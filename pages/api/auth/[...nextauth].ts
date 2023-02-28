import { NextApiHandler } from "next";
import NextAuth, { Awaitable } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma";
import { redirect } from "next/dist/server/api-utils";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
      checks: ["both"],
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  callbacks: {
    async signIn(user: any, account: any, profile: any) {
      try {
        const { email } = user;
        const userExists = await prisma.user.findFirst({
          where: {
            email,
          },
        });
        if (!userExists) {
          await prisma.user.create({
            data: {
              email,
              name: user.name,
              image: user.image,
            },
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, { ...options });
export default authHandler;

// id            String    @id @db.ObjectId @map("_id")
// name          String?
// email         String    @unique
// emailVerified DateTime? @map("email_verified")
// password      String?   @map("hashed_password")
// image         String?
// accounts      Account[]
// sessions      Session[]
// balance       Float     @default(0)
// coordinates   String?
// points        Int       @default(0)
// creditScore   Int       @default(0)
// createdAt     DateTime  @default(now())
// updatedAt     DateTime  @updatedAt
