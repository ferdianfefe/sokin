import { NextApiHandler } from "next";
import NextAuth, { Awaitable } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma";

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
      profile(profile, tokens) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      const { userEmail } = user;

      const userExists = await prisma.user.findUnique({
        where: {
          email: userEmail,
        },
      });

      if (!userExists) {
        await prisma.user.create({
          data: {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            accounts: {
              create: {
                id: account.id,
                provider: account.provider,
                providerAccountId: account.id,
                refreshToken: account.refreshToken,
                accessToken: account.accessToken,
                expiresAt: account.accessTokenExpires,
              },
            },
          },
        });
        return true;
      }

      return true;
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
