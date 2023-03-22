import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

// type MenuUpdateRequestBody = {
//   name?: string;
//   price?: number;
//   category?: string;
//   description?: string;
//   image?: File;
//   stock?: number;
// };

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {id} = JSON.parse(req.body);

    // console.log(id);
    // console.log('halo');
    // console.log(req.body);
    // const { name, price, category, description, stock } = JSON.parse(
    //   req.body
    // ) as MenuUpdateRequestBody;

    // const existingMenu = await prisma.menu.findUnique({
    //   where: {
    //     id: Number(id),
    //   },
    // });

    // if (!existingMenu) {
    //   return res.status(404).json({ message: "Menu not found" });
    // }

    // const updatedMenu = await prisma.menu.update({
    //   where: {
    //     id: Number(id),
    //   },
    //   data: {
    //     name: name ?? existingMenu.name,
    //     price: price ?? existingMenu.price,
    //     category: category ?? existingMenu.category,
    //     description: description ?? existingMenu.description,
    //     stock: stock ?? existingMenu.stock,
    //   },
    // });

    const data = await prisma.menu.findUnique({
      where: {
        id: id,
      }
    })

    if (!data) {
      return res.status(404).json({ message: "Menu not found" });
    }

    // let data = {
    //   name: "test",
    //   price: 10000,
    //   category: "test",
    //   description: "test",
    //   stock: 100,
    // }

    return res.json(data);
  }
}
