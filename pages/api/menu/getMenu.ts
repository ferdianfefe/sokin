import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import io from "socket.io-client";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id } = JSON.parse(req.body);

    console.log("id", req.body);
    
    const menu = await prisma.menu.findMany({
      where: {
        ownerId: id,
      }
    });

    console.log("menu", menu.length);

    return res.status(200).json(menu);
  }
}
