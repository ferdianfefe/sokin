import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

type CartCreateRequestBody = {
  userId: string;
  restaurantId: string;
};

type MenuItemCreateRequestBody = {
  cartId: string;
  menuId: string;
  quantity: number;
};

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const carts = await prisma.cart.findMany({
      include: { menuItems: { include: { menu: true } } },
    });
    return res.json(carts);
  }

  if (req.method === "POST") {
    const { userId, restaurantId } = req.body as CartCreateRequestBody;
    const newCart = await prisma.cart.create({
      data: { userId, restaurantId },
    });
    return res.status(201).json(newCart);
  }

  if (req.method === "PUT") {
    const { id, userId, restaurantId } = req.body;
    const updatedCart = await prisma.cart.update({
      where: { id },
      data: { userId, restaurantId },
    });
    return res.status(200).json(updatedCart);
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    const deletedCart = await prisma.cart.delete({ where: { id } });
    return res.status(200).json(deletedCart);
  }

  if (req.method === "POST" && req.query.action === "addMenuItem") {
    const { cartId, menuId, quantity } = req.body as MenuItemCreateRequestBody;
    const newMenuItem = await prisma.menuItem.create({
      data: { cartId, menuId, quantity },
    });
    return res.status(201).json(newMenuItem);
  }

  if (req.method === "PUT" && req.query.action === "updateMenuItem") {
    const { id, cartId, menuId, quantity } = req.body;
    const updatedMenuItem = await prisma.menuItem.update({
      where: { id },
      data: { cartId, menuId, quantity },
    });
    return res.status(200).json(updatedMenuItem);
  }

  if (req.method === "DELETE" && req.query.action === "deleteMenuItem") {
    const { id } = req.body;
    const deletedMenuItem = await prisma.menuItem.delete({ where: { id } });
    return res.status(200).json(deletedMenuItem);
  }

  return res.status(404).json({ message: "API endpoint not found" });
}
