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
  serviceFee: number;
  foodDisc: number;
  costDisc: number;
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
    // console.log(req.body);

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
      serviceFee,
      foodDisc,
      costDisc,
    } = req.body as OrderCreateRequestBody;

    console.log(driverId);

    // return res.status(201).json({message: 'sukses'});

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
        serviceFee,
        foodDisc,
        costDisc,
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

    res?.socket?.server?.io?.emit("newOrder", newOrder);

    // console.log(newOrder);

    // delete cart
    // await prisma.cart.delete({
    //   where: { id: cartId },
    // });

    // update user balance
    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    await prisma.user.update({
      where: { id: userId },
      data: {
        balance: user.balance - foodFee - costFee - serviceFee + foodDisc + costDisc,
      },
    });

    return res.status(201).json(newOrder);
  } else if (req.method === "PUT") {
    try {
      const { orderId, isAccepted, isCompleted, from="merchant", status} = req.body;
      console.log(orderId, isAccepted, isCompleted, status);

      let dataToUpdate: UpdateOrderData = {};

      if (status !== undefined) {
        dataToUpdate["status"] = status;
      }

      if (isAccepted !== undefined) {
        dataToUpdate["isAccepted"] = isAccepted;
      }

      if (isCompleted !== undefined) {
        dataToUpdate["isCompleted"] = isCompleted;
      }

      const order: any | null = await prisma.order.update({
        where: { id: orderId },
        data: dataToUpdate,
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
      console.log("success updating order");
      // console.log(order);
      if (order.status == "DONE") {
        await prisma.cart.delete({
          where: { id: order.cartId },
        });
  
        console.log("success deleting cart");
  
        await prisma.order.delete({
          where: { id: order.id },
        })

        console.log("success deleting order");
      }

      if(from == "merchant"){
        res?.socket?.server?.io?.emit("updateOrder", order);
      }else{
        res?.socket?.server?.io?.emit("updateOrderDriver", order);
      }

      return res.status(200).json(order);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
