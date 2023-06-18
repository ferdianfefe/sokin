import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

type MerchantGetRequestBody = {
  ownerId: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { keyword } = req.query;
    if (keyword) {
      const data = await prisma.merchant.findMany({
        where: {
          name: {
            contains: keyword.toString(),
            mode: "insensitive",
          },
        },
      });
      return res.status(200).json(data);
    }

    const data = await prisma.merchant.findMany({});

    return res.status(200).json(data);
  } else if (req.method === "POST") {
    const { id } = JSON.parse(req.body);
    // console.log(id);
    const merchant = await prisma.merchant.findFirst({
      where: {
        id: id,
      },
    });

    if (!merchant) {
      return res.status(404).json({ message: "Merchant not found" });
    }

    const menu = await prisma.menu.findMany({
      where: {
        ownerId: merchant.ownerId,
      },
    });

    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    return res
      .status(200)
      .json({ data: menu, name: merchant.name, logo: merchant.merchantLogo });
  }

  return res.status(405).json({ message: "Method unallowed" });
};

export default handler;
