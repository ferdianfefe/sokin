import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import io from "socket.io-client";
let socket = io("/api/socket");

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
  res: NextApiResponse
) {
  /*if (req.method === "GET") {
    const order = await prisma.order.findMany();
    console.log(order);
    return res.status(200).json(order);
  }*/
  if (req.method === "POST") {
    const { id = undefined, driverId = undefined } =
      req.body as OrderCreateRequestBody;
    console.log("id", id)
    // find many where merchantId = id or driverId = id
    const order = await prisma.order.findMany({
      where: {
        OR: id ? [{merchantId: id}] : [{driverId: driverId}],
      },
      orderBy: {
        createdAt: "desc",
      },
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
}
