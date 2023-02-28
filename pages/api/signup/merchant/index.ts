import { PrismaClient, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type OwnerCreateRequestBody = {
  name?: string;
  idCardNumber: number;
  city?: string;
  address?: string;
  phoneNumber: number;
  email: string;
  password?: string;
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
      where: { idCardNumber },
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
        hashed_password: password,
      },
    });

    return res.status(201).json(newOwner);
  }

  return res.status(405).json({ message: 'Method unallowed' });
}