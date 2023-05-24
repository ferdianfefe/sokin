import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const { id } = req.query;
        const driver = await prisma.driver.findUnique({
        where: { id: id as string },
        });
        return res.status(200).json(driver);
    }
    return res.status(405).json({ message: "Method unallowed" });
    }

export default handler;
