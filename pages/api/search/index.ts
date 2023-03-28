import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import Merchant from "pages/merchant";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { keyword } = JSON.parse(req.body);

    // console.log(keyword);

    // const merchant = await prisma.merchant.findMany({
    //     where: {
    //         OR: [
    //             { name: { contains: keyword, mode: "insensitive" } },
    //         ],
    //     }
    // });

    const merchant = await prisma.merchant.findMany({})

    if (!merchant) {
      return res.status(400).json({ message: "Merchant not found" });
    }

    return res.status(200).json({ message: "sukses", data: merchant });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
