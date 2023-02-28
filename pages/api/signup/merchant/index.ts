import { PrismaClient, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type OwnerCreateRequestBody = {
  name: string;
  idCardNumber: string;
  city: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {
    const {
      name,
      idCardNumber,
      city,
      address,
      phoneNumber,
      email,
      password,
    } = req.body as OwnerCreateRequestBody;

    const owner = await prisma.owner.findUnique({
      where: { email },
    });

    if (owner) {
      return res.status(400).json({ message: 'Owner already exists' });
    }

    const newOwner = await prisma.owner.create({
      data: {
        name,
        idCardNumber,
        city,
        address,
        phoneNumber,
        email,
        password,
      },
    });

    return res.status(201).json(newOwner);
  }

  if (req.method === 'GET'){
    const users = await prisma.owner.findMany()
    return res.status(200).json(users);
  }

  return res.status(405).json({ message: 'Method unallowed' });
}