import { User } from "@prisma/client";
import NextAuth from "next-auth"
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth/" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: any;
  }
}

// interface Session extends DefaultSession {
//   user?: User;
// }