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

    const merchant = await prisma.merchant.findMany({
        where: {
            OR: [
                { name: { contains: keyword, mode: "insensitive" } },
            ],
        }
    });

    const similar = await prisma.merchant.findMany({})

    let selected = [];

    for (let i = 0; i < similar.length; i++) {
        selected.push(false);
    }

    let data2= [];

    let count = Math.round(Math.random() * (4 - 1) + 1);

    for (let i = 0; i < count; i++) {
        // console.log(i);
        let random = Math.round(Math.random() * (similar.length - 1));
        if (selected[random] == false) {
            selected[random] = true;
            data2.push(similar[random]);
        } else {
            i--;
        }
    }

    // console.log(data2);

    if (!merchant) {
      return res.status(400).json({ message: "Merchant not found" });
    }

    return res.status(200).json({ message: "sukses", data: merchant, data2: data2 });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
