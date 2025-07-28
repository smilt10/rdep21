"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/images/fam1.jpg",
  "/images/fam2.jpg",
  "/images/fam3.png",
  "/images/fam4.png",
  "/images/fam5.png",
  "/images/fam6.png",
  "/images/fam7.png",
]

export default function HeroImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[450px] w-full overflow-hidden rounded-xl">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === currentImageIndex ? 1 : 0 }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Rénovation et transition énergétique ${index + 1}`}
            fill
            className={`object-cover ${src.includes("couple-keys") ? "object-top" : ""}`}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}
