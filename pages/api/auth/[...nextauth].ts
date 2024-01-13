import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import prisma from "@/src/lib/prisma";

const githubID = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

const googleID = process.env.GOOGLE_ID;
const googleSecret = process.env.GOOGLE_SECRET;

if (!githubID || !githubSecret || !googleID || !googleSecret) {
  throw new Error("Missing environment variables for authentification");
}

export const authConfig = {
  providers: [
    GithubProvider({
      clientId: githubID,
      clientSecret: githubSecret,
    }),

    GoogleProvider({
      clientId: googleID,
      clientSecret: googleSecret,
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      console.log(session, user);
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions;

export default NextAuth(authConfig);
