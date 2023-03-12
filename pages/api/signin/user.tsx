import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

type SignupRequestBody = Omit<Prisma.UserCreateInput, "id"> & {
  name?: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log(email, password)

    // console.log(email + password);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Email not registered" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    return res.status(200).json({ message: "Login sukses" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
