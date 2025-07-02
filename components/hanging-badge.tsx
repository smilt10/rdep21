"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HangingBadge() {
  const [isVisible, setIsVisible] = useState(true)
  const [isSwinging, setIsSwinging] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    // Check if user has previously dismissed the badge
    const badgeDismissed = localStorage.getItem("rge-capeb-badge-dismissed")
    if (badgeDismissed === "true") {
      setIsVisible(false)
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Only trigger animation if scrolling more than 5px
      if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
        setIsSwinging(true)

        // Reset swing after animation completes
        setTimeout(() => {
          setIsSwinging(false)
        }, 1500)

        lastScrollY.current = currentScrollY
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("rge-capeb-badge-dismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed mt-16 md:mt-20 top-0 right-8 z-50 sm:right-12 md:right-16 lg:right-20">
      <div className="relative">
        {/* String effect */}
        <div className="absolute left-1/2 -top-1 h-24 w-0.5 -translate-x-1/2 bg-gray-400"></div>

        {/* Pin effect */}
        <div className="absolute left-1/2 -top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-red-500 shadow-md"></div>

        {/* Badge */}
        <div
          className={cn(
            "relative w-32 h-32 md:w-44 md:h-44 rounded-md overflow-visible shadow-lg transition-all duration-300",
            isSwinging && "animate-badge-swing",
          )}
        >
          <button
            onClick={handleDismiss}
            className="absolute top-1 right-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-sm hover:bg-white"
            aria-label="Fermer"
          >
            <X className="h-3 w-3" />
          </button>

          <Link 
            href="/rge-capeb"
            className="block h-full w-full bg-white rounded-md p-1 hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Voir nos certifications RGE et CAPEB"
          >
            <div className="flex flex-row h-full justify-center items-center space-x-1">
              {/* CAPEB Certification */}
              <div className="flex-1 flex items-center justify-center h-full">
                <Image
                  src="/images/capeb.png"
                  alt="Certification CAPEB - L'Artisanat du Bâtiment"
                  width={90}
                  height={65}
                  className="max-w-full max-h-full object-contain"
                  priority
                />
              </div>
              
              {/* RGE Certification */}
              <div className="flex-1 flex items-center justify-center h-full">
                <Image
                  src="/images/LogRGE.jpg"
                  alt="Certification RGE - Votre label de fiabilité"
                  width={70}
                  height={50}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
