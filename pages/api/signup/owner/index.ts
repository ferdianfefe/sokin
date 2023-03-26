import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

type OwnerCreateRequestBody = {
  name: string;
  idCardNumber: string;
  city: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  bankName: string;
  accountNumber: string;
  accountBookPhoto: string;
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
      idCardNumber,
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
    } = JSON.parse(req.body) as OwnerCreateRequestBody;

    const owner = await prisma.owner.findFirst({
      where: { email },
    });

    if (owner) {
      return res.status(400).json({ message: "Owner already exists" });
    }

    const newOwner = await prisma.owner.create({
      data: {
        name,
        idCardNumber: idCardNumber.toString(),
        city,
        address,
        phoneNumber,
        email,
        password,
        bankName,
        accountNumber,
        accountBookPhoto,
      },
    });

    if (!newOwner) {
      return res.status(400).json({ message: "Owner creation failed" });
    }

    const newMerchant = await prisma.merchant.create({
      data: {
        ownerId: newOwner.id,
        name: merchantName,
        address: merchantAddress,
        postalCode,
        coordinates,
        benchmark,
        merchantLogo,
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
