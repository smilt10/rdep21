import type React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import HangingBadge from "@/components/hanging-badge"
import { NextAuthProvider } from "@/components/next-auth-provider"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "RDEP21 - Rénovation, Décoration, Peinture",
  description:
    "RDEP21 est une entreprise de rénovation et décoration basée à Dijon, spécialisée dans les travaux d'intérieur et d'extérieur.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <HangingBadge />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
