"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="w-full flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo - stays at left on all screen sizes */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-14 w-40">
            <Image src="/images/logo-new.png" alt="RDEP21 Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Navigation - hidden on mobile, spread out on desktop */}
        <nav className="hidden md:flex flex-1 items-center justify-center mx-4">
          <div className="flex w-full max-w-4xl justify-between">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Button - hidden on mobile, at right on desktop */}
        <div className="hidden md:flex items-center">
          <Button asChild>
            <Link href="/contact?type=devis">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile menu button - only visible on mobile, stays at right */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-white pb-6 md:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <div className="w-full px-4 py-6">
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center py-3 text-base font-medium text-gray-700 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            <Button asChild className="w-full">
              <Link href="/contact?type=devis" onClick={() => setIsMenuOpen(false)}>
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Nos activités", href: "/activites" },
  { label: "Nos réalisations", href: "/realisations" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "RGE/CAPEB", href: "/rge-capeb" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
]
