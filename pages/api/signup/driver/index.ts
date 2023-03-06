import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type DriverCreateRequestBody = {
  name: string;
  idCardNumber: string;
  city: string;
  address: string;
  phoneNumber: string;
  email: string;
  licenseNumber: string;
  vehicle: string;
  productionYear: string;
  password: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      name,
      idCardNumber,
      city,
      address,
      phoneNumber,
      email,
      licenseNumber,
      vehicle,
      productionYear,
      password,
    } = req.body as DriverCreateRequestBody;

    const driver = await prisma.driver.findUnique({
      where: { email },
    });

    if (driver) {
      return res.status(400).json({ message: "driver already exists" });
    }

    const newdriver = await prisma.driver.create({
      data: {
        name,
        idCardNumber,
        city,
        address,
        phoneNumber,
        email,
        licenseNumber,
        vehicle,
        productionYear,
        password,
      },
    });

    return res.status(201).json(newdriver);
  }

  if (req.method === "GET") {
    const users = await prisma.driver.findMany();
    return res.status(200).json(users);
  }

  return res.status(405).json({ message: "Method unallowed" });
}
