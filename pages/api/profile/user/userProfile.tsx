import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";
import Merchant from "pages/merchant";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { id } = JSON.parse(req.body);

        const user = await prisma.user.findFirst({
            where: {
                id: id,
            }
        })

        if (!user) {
            return res.status(400).json({ message: "failed to get user" });
        }

        console.log(user);

        return res.status(200).json(user);
    }
    
    return res.status(405).json({ message: "Method unallowed" });
}