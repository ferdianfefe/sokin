import { NextApiRequest, NextApiResponse } from "next";

type MerchantGetRequestBody = {
    ownerId: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const { ownerId } = req.query as MerchantGetRequestBody;
        const merchant = await prisma.merchant.findFirst({
            where: {
                ownerId
            }
        });
        return res.status(200).json(merchant);
    }
    
    return res.status(405).json({ message: "Method unallowed" });
}