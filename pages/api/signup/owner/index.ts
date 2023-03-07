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
  bankName: string;
  accountNumber: string;
  fotoBT: string;
  merName: string;
  postalCode: string;
  merAddress: string;
  coordinates: string;
  benchmark: string;
  logoUsaha: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {
    console.log(req.body);
    const {
      name,
      idCardNumber,
      city,
      address,
      phoneNumber,
      email,
      password,
      bankName,
      accountNumber,
      fotoBT,
      merName,
      postalCode,
      merAddress,
      coordinates,
      benchmark,
      logoUsaha,
    } = JSON.parse(req.body) //as OwnerCreateRequestBody;

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
        bankName,
        accountNumber,
        balance: 0,
      },
    });

    if (!newOwner) {
      return res.status(400).json({ message: 'Owner creation failed' });
    }

    const newMerchant = await prisma.merchant.create({
      data: {
        ownerId: newOwner.id,
        name: merName,
        postalCode,
        coordinates,
        benchmark,
      },
    });

    if (!newMerchant) {
      return res.status(400).json({ message: 'Merchant creation failed' });
    }

    return res.status(200).json({message:'success', data: {owner: newOwner, merchant: newMerchant}});
  }

  if (req.method === 'GET'){
    const users = await prisma.owner.findMany()
    return res.status(200).json(users);
  }

  return res.status(405).json({ message: 'Method unallowed' });
}