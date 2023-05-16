import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Order } from "@prisma/client";

type OrderCreateRequestBody = {
  id: string;
  driverId: string;
  userId: string;
  merchantId: string;
  menuId: string[];
  source: string;
  destination: string;
  distance: number;
  status: string;
  creditScore: number;
  menuOrder: string[];
  eta: number;
  isAccepted: boolean;
  isCompleted: boolean;
  fee: number;
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
  if (req.method === "GET") {
    const order = await prisma.order.findMany();
    console.log(order);
    return res.status(200).json(order);
  }
  if (req.method === "POST") {
    const { driverId, userId, menuId, customerName, source, destination, distance, status, creditScore, menuOrder, eta, isAccepted, isCompleted, fee} = req.body as OrderCreateRequestBody;
    const newPromo = await prisma.order.create({
        data: { driverId, userId, menuId, customerName, source, destination, distance, status, creditScore, menuOrder, eta, isAccepted, isCompleted, fee},
    });
    return res.status(201).json(newPromo);

  } else if (req.method === 'PUT') {
    try {
      const { orderId, status, isAccepted, isCompleted } = req.body;

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
    }
  }
}