import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

type PromoCreateRequestBody = {
  id: string;
  promoType: string;
  title: string;
  percentage: number;
  value: number;
  minOrder: number;
  maxDisc: number;
};

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const promo = await prisma.promo.findMany();
    return res.json(promo);
  }
  if (req.method === "POST") {
    const { promoType, title, percentage, value, minOrder, maxDisc } = req.body as PromoCreateRequestBody;
    const newPromo = await prisma.promo.create({
        data: { promoType, title, percentage, value, minOrder, maxDisc },
    });
    return res.status(201).json(newPromo);

  }  
  if (req.method == "DELETE") {
    const { id } = JSON.parse(req.body);
    const deletePromo = await prisma.promo.delete({
      where: {
        id: id,
      },
    });
    if (!deletePromo) {
      return res.status(400).json({ message: "failed to delete promo" });
    }
    return res.status(200).json({ message: "success delete promo" });
  }
}