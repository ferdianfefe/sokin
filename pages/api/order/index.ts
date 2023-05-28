import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import io from "socket.io-client";
import { NextApiResponseServerIO } from "types/next";

type OrderCreateRequestBody = {
  id: string;
  driverId: string;
  userId: string;
  merchantId: string;
  cartId: string;
  source: string;
  destination: string;
  distance: number;
  status: string;
  creditScore: number;
  eta: number;
  isAccepted: boolean;
  isCompleted: boolean;
  foodFee: number;
  costFee: number;
};

type UpdateOrderData = {
  status?: string;
  isAccepted?: boolean;
  isCompleted?: boolean;
};

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  /*if (req.method === "GET") {
    const order = await prisma.order.findMany();
    console.log(order);
    return res.status(200).json(order);
  }*/
  let socket = io("/api/socket");

  if (req.method === "GET") {
    const order = await prisma.order.findMany({
      include: {
        driver: {
          select: {
            name: true,
            phoneNumber: true,
            licenseNumber: true,
            vehicle: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        cart: {
          include: {
            menuItems: {
              include: {
                menu: {
                  select: {
                    name: true,
                    price: true,
                    image: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return res.status(200).json(order);
  }

  if (req.method === "POST") {
    const {
      driverId,
      userId,
      merchantId,
      cartId,
      source,
      destination,
      distance,
      eta,
      isAccepted,
      isCompleted,
      foodFee,
      costFee,
    } = req.body as OrderCreateRequestBody;

    const newOrder = await prisma.order.create({
      data: {
        driverId,
        userId,
        merchantId,
        cartId,
        source,
        destination,
        distance,
        eta,
        isAccepted,
        isCompleted,
        foodFee,
        costFee,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        cart: {
          include: {
            menuItems: {
              include: {
                menu: {
                  select: {
                    name: true,
                    price: true,
                    image: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    console.log("success creating order");

    res?.socket?.server?.io?.emit("newOrder", newOrder);

    return res.status(201).json(newOrder);
  } /*else if (req.method === 'PUT') {
    try {
      const { orderId, isAccepted, isCompleted } = req.body;

      const dataToUpdate: UpdateOrderData = {};

      if (status !== undefined) {
        dataToUpdate['status'] = status;
      }

      if (isAccepted !== undefined) {
        dataToUpdate['isAccepted'] = isAccepted;
      }

      if (isCompleted !== undefined) {
        dataToUpdate['isCompleted'] = isCompleted;
      }

      const order: Order | null = await prisma.order.update({
        where: { id: orderId },
        data: dataToUpdate,
      });

      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    } */
}
