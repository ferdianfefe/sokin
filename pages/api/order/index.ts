import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

enum OrderStatus {
  PENDING,
  ACCEPTED,
  COMPLETED,
}

type OrderCreateRequestBody = {
  driverId: string;
  userId: string;
  customerName: string;
  source: string;
  destination: string;
  distance: number;
  status: OrderStatus;
  menuOrder: String[];
  eta: number;
  isAccepted: boolean;
  isCompleted: boolean;
  fee: number;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ message: "unauthenticated" });
    }

    const userId = session?.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "unauthenticated" });
    }

    const {
      driverId,
      customerName,
      source,
      destination,
      distance,
      status,
      menuOrder,
      eta,
      isAccepted,
      isCompleted,
      fee,
    } = req.body as OrderCreateRequestBody;

    const newOrder = await prisma.order.create({
      data: {
        driverId,
        userId,
        customerName,
        source,
        destination,
        distance,
        status,
        menuOrder,
        eta,
        isAccepted,
        isCompleted,
        fee,
      },
    });

    return res.status(201).json(newOrder);
  }

  if (req.method === "GET") {
    const orders = await prisma.order.findMany();
    return res.status(200).json(orders);
  }

  return res.status(405).json({ message: "Method unallowed" });
}
