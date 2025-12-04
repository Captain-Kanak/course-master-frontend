import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import loginUser from "@/app/helpers/auth/loginUser";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials) {
        const res = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (!res.success) return null;

        const data = res.data;

        return {
          _id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.role,
          token: data.token,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        _id: token._id,
        name: token.name,
        email: token.email,
        role: token.role,
        token: token.token,
      };
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
