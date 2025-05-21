import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "next-auth"
import { DefaultSession } from "next-auth"

// Extend the User type to include isAdmin
declare module "next-auth" {
  interface User {
    isAdmin?: boolean
  }
  
  interface Session {
    user: {
      isAdmin?: boolean
    } & DefaultSession["user"]
  }
  
  interface JWT {
    isAdmin?: boolean
  }
}

// In a real application, you would use a database to store users
const users = [
  {
    id: "1",
    name: "Admin RDEP21",
    email: "admin@rdep21.com",
    password: "admin123", // In a real app, this would be hashed
    isAdmin: true,
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = users.find((user) => user.email === credentials.email)

        if (!user) {
          return null
        }

        if (user.password !== credentials.password) {
          return null
        }


        return {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        // Only assign isAdmin if it exists in the token
        if (typeof token.isAdmin !== 'undefined') {
          session.user.isAdmin = token.isAdmin as boolean
        } else {
          // Default to false if not present in token
          session.user.isAdmin = false
        }
        
        // Uncomment if you need to include user ID in the session
        // if (token.id) {
        //   session.user.id = token.id as string
        // }
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
