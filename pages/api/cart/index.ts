import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { json } from "react-router-dom";

type CartCreateRequestBody = {
  userId: string;
  merchantId: string;
};

type MenuItemCreateRequestBody = {
  cartId: string;
  menuId: string;
  quantity: number;
  merchantId: string;
};

const prisma = new PrismaClient();
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const cart = await prisma.cart.findFirst({
      where: {
        userId: req.query.userId,
      },
      include: {
        menuItems: {
          include: {
            menu: true,
          },
        },
        merchant: true,
      },
    });
    return res.json(cart);
  }

  if (req.method === "POST") {
    const { menuId, quantity, merchantId } =
      req.body as MenuItemCreateRequestBody;
    // get cart from user
    const cart = await prisma.cart.findFirst({
      where: { userId: req.body.userId },
    });

    let cartId = null;

    // if cart doesn't exist, create one
    if (!cart) {
      const newCart = await prisma.cart.create({
        data: {
          userId: req.body.userId,
          merchantId,
          menuItems: {
            create: {
              quantity,
              menu: {
                connect: { id: menuId },
              },
            },
          },
        },
      });
      cartId = newCart.id;
    } else {
      cartId = cart.id;
      if (cart.merchantId !== merchantId) {
        return res.status(400).json({ message: "Merchant ID does not match" });
      }

      // if cart exists, add menu item to cart
      await prisma.menuItem.create({
        data: {
          cart: { connect: { id: cartId } },
          menu: {
            connect: { id: menuId },
          },
          quantity,
        },
      });
    }

    return res.status(201).json({ cartId });
  }

  if (req.method === "PUT") {
    const { id, cartId, menuId, quantity } = req.body;
    const updatedMenuItem = await prisma.menuItem.update({
      where: { id },
      data: { cartId, menuId, quantity },
    });
    return res.status(200).json(updatedMenuItem);
  }

  if (req.method === "DELETE") {
    const data = req.body.menuId;
    const deletedMenuItem = await prisma.menuItem.delete({
      where: { id: data },
    });
    // return res.status(200).json(deletedMenuItem);
    return res.status(200).json({ message: "deleted" });
  }
  // if (req.method === "POST" && req.query.action === "addMenuItem") {
  //   const { menuId, quantity } = req.body as MenuItemCreateRequestBody;
  //   // get cart from user
  //   const cart = await prisma.cart.findFirst({
  //     where: { userId: req.body.userId },
  //   });
  //   const cartId = cart.id;
  //   const newMenuItem = await prisma.menuItem.create({
  //     data: { cartId, menuId, quantity },
  //   });
  //   return res.status(201).json(newMenuItem);
  // }

  // if (req.method === "PUT" && req.query.action === "updateMenuItem") {
  //   const { id, cartId, menuId, quantity } = req.body;
  //   const updatedMenuItem = await prisma.menuItem.update({
  //     where: { id },
  //     data: { cartId, menuId, quantity },
  //   });
  //   return res.status(200).json(updatedMenuItem);
  // }

  // if (req.method === "DELETE" && req.query.action === "deleteMenuItem") {
  //   const { id } = req.body;
  //   const deletedMenuItem = await prisma.menuItem.delete({ where: { id } });
  //   return res.status(200).json(deletedMenuItem);
  // }

  // if (req.method === "GET") {
  //   const carts = await prisma.cart.findMany({
  //     include: { menuItems: { include: { menu: true } } },
  //   });
  //   return res.json(carts);
  // }

  // if (req.method === "POST") {
  //   const { userId, merchantId } = req.body as CartCreateRequestBody;
  //   const newCart = await prisma.cart.create({
  //     data: { userId, merchantId },
  //   });
  //   return res.status(201).json(newCart);
  // }

  // if (req.method === "PUT") {
  //   const { id, userId, merchantId } = req.body;
  //   const updatedCart = await prisma.cart.update({
  //     where: { id },
  //     data: { userId, merchantId },
  //   });
  //   return res.status(200).json(updatedCart);
  // }

  // if (req.method === "DELETE") {
  //   const { id } = req.body;
  //   const deletedCart = await prisma.cart.delete({ where: { id } });
  //   return res.status(200).json(deletedCart);
  // }

  return res.status(404).json({ message: "API endpoint not found" });
}
