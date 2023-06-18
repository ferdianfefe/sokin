import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";
import Merchant from "pages/merchant";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id } = JSON.parse(req.body);

    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "failed to get user" });
    }

    return res.status(200).json(user);
  }

  if (req.method === "PUT") {
    const { id } = req.query;
    const { coordinates } = req.body;

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        coordinates: coordinates,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "failed to update user" });
    }
    return res.status(200).json(user);
  }

  if (req.method === "PATCH") {
    const { coordinates, userId } = req.body;
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        coordinates: coordinates,
      },
    });
    return res.status(200).json(user);
  }

  return res.status(405).json({ message: "Method unallowed" });
}
