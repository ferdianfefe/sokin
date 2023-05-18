import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

type PromoCreateRequestBody = {
  id: string;
  promoType: string;
  title: string;
  discPercentage: number;
  discValue: number;
  minOrder: number;
  maxDisc: number;
};

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const promo = await prisma.merchant.findMany();
    console.log(promo);
    return res.status(200).json(promo);
    // const cart = await prisma.cart.findFirst({
    //     where: { userId: '6458f87ec5de7d3000e553cd' },
    //     include: { menuItems: { include: { menu: true } } },
    //   });
    //   return res.json(cart);
  }
  if (req.method === "POST") {
    const { promoType, title, discPercentage, discValue, minOrder, maxDisc } = req.body as PromoCreateRequestBody;
    const newPromo = await prisma.promo.create({
        data: { promoType, title, discPercentage, discValue, minOrder, maxDisc },
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