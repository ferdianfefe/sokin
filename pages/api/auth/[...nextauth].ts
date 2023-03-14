import { PrismaClient, User } from "@prisma/client";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        })
        if (!user) {
          throw new Error("No user found")
        }

        if (!credentials?.password || !user.password) {
          throw new Error("An error occurred")
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.password)

        if (!passwordMatch) {
          throw new Error("Password is incorrect")
        }
        return user;
      }
    }),
    CredentialsProvider({
      id: 'merchant',
      name: 'Merchant',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const owner = await prisma.owner.findFirst({
          where: {
            email: credentials?.email,
          },
        })
        if (!owner) {
          throw new Error("No merchant found")
        }

        if (!credentials?.password || !owner.password) {
          throw new Error("An error occurred")
        }

        const passwordMatch = await bcrypt.compare(credentials.password, owner.password)

        if (!passwordMatch) {
          throw new Error("Password is incorrect")
        }
        return owner;
      }
    }),
    CredentialsProvider({
      id: 'driver',
      name: 'Driver',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const driver = await prisma.driver.findFirst({
          where: {
            email: credentials?.email,
          },
        })
        if (!driver) {
          throw new Error("No driver found")
        }

        if (!credentials?.password || !driver.password) {
          throw new Error("An error occurred")
        }

        const passwordMatch = await bcrypt.compare(credentials.password, driver.password)

        if (!passwordMatch) {
          throw new Error("Password is incorrect")
        }
        return driver;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
})


// import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       async authorize(credentials: any, req: any) {
//         const user = await prisma.owner.findFirst({
//           where: {
//             email: credentials.email,
//           },
//         })
//         if (!user) {
//           throw new Error("No user found")
//         }

//         if (user.password !== credentials.password) {
//           throw new Error("Password is incorrect")
//         }
        
//         return user;
//       }
//     }),
//   ],
//   session: {
//     jwt: true,
//     maxAge: 30 * 24 * 60 * 60,
//   },
//   jwt: {
//     signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
//   },
  // callbacks: {
  //   async session({ session, token }) {
  //     session.user = token.user;
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.user = user;
  //     }
  //     return token;
  //   },
  // },
// })

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