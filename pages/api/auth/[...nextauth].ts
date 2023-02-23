import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma";

const authHander: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHander;

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile, tokens) {
        return {
          id: profile.id.toString(),
          name: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  callbacks: {
    async signIn(user: any, account: any, profile: any) {
      console.log(user, account, profile);
      const { email } = user;
      const userExists = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!userExists) {
        await prisma.user.create({
          data: {
            email,
          },
        });
      }
      return true;
    },
  },
};
