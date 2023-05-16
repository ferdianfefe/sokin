import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

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
    if (req.method === "GET") {
    const order = await prisma.order.findMany({
      include: {
        driver: {
          select: {
            name: true,
            phoneNumber: true,
            licenseNumber: true,
            vehicle: true
          }
        },
        user: {
          select: {
            name: true
          }
        },
        cart: {
          include: {
            menuItems: {
              include: {
                menu: {
                  select: {
                    name: true,
                    price: true,
                    image: true
                  }
                }
              }
            }
          }
        }
      }
    });
  
      console.log(order);
      return res.status(200).json(order);
    }

  
  if (req.method === "POST") {
    const { driverId, userId, merchantId, cartId,  source, destination, distance, creditScore,  eta, isAccepted, isCompleted, foodFee, costFee} = req.body as OrderCreateRequestBody;
    const newOrder = await prisma.order.create({
      data: {
        driver: { connect: { id: driverId } },
        user: { connect: { id: userId } },
        merchant: { connect: { id: merchantId } },
        cart: { connect: { id: cartId} },
        source,
        destination,
        distance,
        creditScore,
        eta,
        isAccepted,
        isCompleted,
        foodFee,
        costFee
      },
    });
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
