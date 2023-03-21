import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("GET");
    // const { id } = req.query;

    const menu = await prisma.menu.findMany({});

    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    return res.json(menu);
  }

  return res.status(400).json({ message: "Invalid request method" });
}
