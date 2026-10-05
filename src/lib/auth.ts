import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as NextAuthOptions["adapter"],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const user = await db.user.findUnique({ where: { email: credentials.email } });
        if (!user?.passwordHash) return null;
        const valid = await bcrypt.compare(credentials.password, user.passwordHash);
        return valid ? { id: user.id, email: user.email, name: user.name } : null;
      },
    }),
  ],
};
