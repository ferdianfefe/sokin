import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

type MerchantGetRequestBody = {
    ownerId: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        // const { ownerId } = req.query as MerchantGetRequestBody;
        // const merchant = await prisma.merchant.findFirst({
        //     where: {
        //         ownerId
        //     }
        // });
        const data = await prisma.merchant.findMany({});
        console.log("GET");

        return res.status(200).json(data);
    } else if (req.method === "POST") {
        const { id } = JSON.parse(req.body);
        // console.log(id);
        const merchant = await prisma.merchant.findFirst({
            where: {
                id: id
            }
        })

        if (!merchant) {
            return res.status(404).json({ message: "Merchant not found" });
        }

        const menu = await prisma.menu.findMany({
            where: {
                ownerId: merchant.ownerId,
            }
        })

        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
        }

        console.log(menu);

        return res.status(200).json({ data: menu });
    }
    
    return res.status(405).json({ message: "Method unallowed" });
}

export default handler;