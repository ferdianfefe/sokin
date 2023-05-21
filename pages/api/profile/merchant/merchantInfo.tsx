import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id } = JSON.parse(req.body);

    console.log(id);

    const merchant = await prisma.merchant.findFirst({
        where: {
            ownerId: id,
        }
    })

    if (!merchant) {
        return res.status(400).json({ message: "failed to get merchant" });
    }
    return res.status(200).json(merchant);
}
}