import { PrismaClient, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type SignupRequestBody = Omit<Prisma.UserCreateInput, 'id'> & { name?: string };

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {
    const { name, idCardNumber, password } = req.body as SignupRequestBody;

    const owner = await prisma.owner.findUnique({
      where: { idCardNumber },
    });

    if (owner) {
      return res.status(400).json({ message: 'Owner already exists' });
    }

    const newOwner = await prisma.owner.create({
      data: { name, idCardNumber, password },
    });

    return res.status(201).json(newOwner);
  }

  return res.status(405).json({ message: 'Method unallowed' });
}
