import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

type MenuCreateRequestBody = {
    name: string;
    price: number;
    category: string;
    description: string;
    image: File;
    stock: number;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "GET") {
        const menu = await prisma.menu.findMany();
        return res.json(menu);
    }
    if (req.method === "POST") {
        const {
            name,
            price,
            category,
            description,
            image,
            stock,
        } = req.body as MenuCreateRequestBody;
        const menu = await prisma.menu.findUnique({
            where: { name },
        });
        if (menu) {
            return res.status(400).json({ message: "menu already exists" });
        }
        
        const newMenu = await prisma.menu.create({
            data: {
                name,
                price,
                category,
                description,
                image,
                stock,
            },
        });
        return res.json(newMenu);
    }
}
