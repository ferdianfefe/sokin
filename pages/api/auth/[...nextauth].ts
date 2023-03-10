import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email'},
        password: {label: 'password', type: 'password' }
      },
      async authorize(credentials: any, req: any) {
        const user = await prisma.owner.findFirst({
          where: {
            email: credentials.email,
          },
        })
        if (!user) {
          throw new Error("No user found")
        }

        if (user.password !== credentials.password) {
          throw new Error("Password is incorrect")
        }
        
        return user;
      }
    }),
  ],
  session: {
    strategy: "jwt"
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60

    //signingKey: {"kty":"oct","kid":"Dl893BEV-iVE-x9EC52TDmlJUgGm9oZ99_ZL025Hc5Q","alg":"HS512","k":"K7QqRmJOKRK2qcCKV_pi9PSBv3XP0fpTu30TP8xn4w01xR3ZMZM38yL2DnTVPVw6e4yhdh0jtoah-i4c_pZagA"},
  },
  callbacks: {
    async session({ session, token }) {
       session.accessToken = token.accessToken
       session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
        token.id = user.id
      }
      return token
    },
})

// import { NextApiHandler } from "next";
// import NextAuth, { Awaitable } from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import GoogleProvider from "next-auth/providers/google";
// import prisma from "../../../lib/prisma";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { redirect } from "next/dist/server/api-utils";

// const options = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//       profile(profile) {
//         return {
//           id: profile.sub,
//           name: profile.name,
//           email: profile.email,
//           image: profile.picture,
//         };
//       },
//       checks: ["both"],
//     }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   async authorize(credentials: any, req: any) {
    //     const user = await prisma.owner.findFirst({
    //       where: {
    //         email: credentials.email,
    //       },
    //     })
    //     if (!user) {
    //       throw new Error("No user found")
    //     }
    //     else if (user.password !== credentials.password) {
    //       throw new Error("Password is incorrect")
    //     }
    //     else {
    //       return {user}
    //     }
    //   }
    // }),
//   ],
//   adapter: PrismaAdapter(prisma),
//   secret: process.env.SECRET,
//   callbacks: {
//     async signIn(user: any, account: any, profile: any) {
//       try {
//         const { email } = user;
//         const userExists = await prisma.user.findFirst({
//           where: {
//             email,
//           },
//         });
//         if (!userExists) {
//           await prisma.user.create({
//             data: {
//               email,
//               name: user.name,
//               image: user.image,
//             },
//           });
//         }
//         return true;
//       } catch (error) {
//         console.log(error);
//         return false;
//       }
//     },
//   },
// };

// const authHandler: NextApiHandler = (req, res) =>
//   NextAuth(req, res, options);
// export default authHandler;