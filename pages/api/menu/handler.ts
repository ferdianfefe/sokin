import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

type MenuCreateRequestBody = {
  ownerId: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: File;
  stock: number;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // get menu with pagination 
    const { page, limit } = req.query;
    const menu = await prisma.menu.findMany({
      take: (limit? parseInt(limit.toString()) : 0) as number,
      skip: (page? parseInt(page.toString()) : 0) as number,
    });
    return res.json(menu);

  }
  if (req.method === "POST") {
    const { id, namaProduk, harga, kategori, deskripsi, stok, user } = JSON.parse(req.body) //req.body as MenuCreateRequestBody;

    if (id) {
      const updatedMenu = await prisma.menu.update({
        where: {
          id: id,
        },
        data: {
          name: namaProduk,
          price: harga,
          category: kategori,
          description: deskripsi,
          stock: stok,
        },
      });

      if (!updatedMenu) {
        return res.status(400).json({ message: "failed to update menu" });
      }
    }

    const newMenu = await prisma.menu.create({
      data: {
        ownerId: user,
        name: namaProduk,
        price: parseFloat(harga),
        category: kategori,
        description: deskripsi,
        image: "image",
        stock: parseInt(stok),
      },
    });

    if (!newMenu) {
      return res.status(400).json({ message: "failed to create menu" });
    }

    // const updateOwner = await prisma.owner.update({
    //   where: {
    //     id: user,
    //   },
    //   data: {
    //     menus: {
    //       push: newMenu,
    //     },
    //   },
    // })


    return res.json("sukses");
  }
  if(req.method == "DELETE"){
    const { id } = req.body;
    const deleteMenu = await prisma.menu.delete({
      where: {
        id: id
      }
    })
    return res.json(deleteMenu);
  }
}
