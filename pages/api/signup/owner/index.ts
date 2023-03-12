import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

type OwnerCreateRequestBody = {
  name: string;
  iDCardNumber: number;
  city: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  bankName: string;
  accountNumber: string;
  accountBookPhoto: File;
  merchantName: string;
  postalCode: string;
  merchantAddress: string;
  coordinates: string;
  benchmark: string;
  merchantLogo: string;
};

const prisma = new PrismaClient();

prisma.$use(async (params: Prisma.MiddlewareParams, next) => {
  if (params.action == "create" && params.model == "Owner") {
    let user = params.args.data;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
  }
  return await next(params);
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);
    const {
      name,
      iDCardNumber,
      address,
      phoneNumber,
      email,
      password,
      city,
      bankName,
      accountNumber,
      accountBookPhoto,
      merchantName,
      postalCode,
      merchantAddress,
      coordinates,
      benchmark,
      merchantLogo,
    } = req.body as OwnerCreateRequestBody;

    const owner = await prisma.owner.findUnique({
      where: { email },
    });

    if (owner) {
      return res.status(400).json({ message: "Owner already exists" });
    }

    const newOwner = await prisma.owner.create({
      data: {
        name,
        iDCardNumber,
        city,
        address,
        phoneNumber,
        email,
        password,
        bankName,
        accountNumber,
        accountBookPhoto: "",  // TODO: impl cloudinary
      },
    });

    if (!newOwner) {
      return res.status(400).json({ message: "Owner creation failed" });
    }

    const newMerchant = await prisma.merchant.create({
      data: {
        ownerId: newOwner.id,
        name: merchantName,
        postalCode,
        coordinates,
        benchmark,
      },
    });

    if (!newMerchant) {
      return res.status(400).json({ message: "Merchant creation failed" });
    }

    return res.status(200).json({
      message: "success",
      data: { owner: newOwner, merchant: newMerchant },
    });
  }

  if (req.method === "GET") {
    const users = await prisma.owner.findMany();
    return res.status(200).json(users);
  }

  return res.status(405).json({ message: "Method unallowed" });
}
