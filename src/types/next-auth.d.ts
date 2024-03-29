import type { Session, User, Profile } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      token: string;
      username: string;
    };
  }

  interface User {
    username: string;
  }
}
