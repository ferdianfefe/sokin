import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const balance = await prisma.user.update({
        where: { id: req.body.userId },
        data: { balance: { increment: parseFloat(req.body.amount) } },
    });
    console.log(balance)
    return res.json(balance);
  }

  if (req.method == "GET") {
    const balance = await prisma.user.findUnique({
      where: { id: req.body.userId },
    });
    return res.json(balance);
  }
}
