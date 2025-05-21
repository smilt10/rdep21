"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import TestimonialCard from "./testimonial-card"

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Calculate total number of slides (2 testimonials per slide)
  const totalSlides = Math.ceil(testimonials.length / 2)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Generate slides with 2 testimonials per slide */}
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              {/* Get 2 testimonials for this slide */}
              {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                <div key={index} className="px-2">
                  <TestimonialCard
                    name={testimonial.name}
                    location={testimonial.location}
                    rating={testimonial.rating}
                    content={testimonial.content}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={prevSlide}
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                index === currentSlide ? "bg-primary" : "bg-gray-300",
              )}
              aria-label={`Go to testimonials ${index * 2 + 1}-${Math.min((index + 1) * 2, testimonials.length)}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={nextSlide}
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

const testimonials = [
  {
    content:
      "RDEP21 a complètement transformé notre salon. L'équipe a été professionnelle du début à la fin, respectant les délais et le budget. La qualité du travail est exceptionnelle!",
    name: "Marie Dupont",
    location: "Dijon",
    rating: 5,
  },
  {
    content:
      "Nous avons fait appel à RDEP21 pour la rénovation complète de notre appartement. Le résultat est à la hauteur de nos attentes. Je recommande vivement leurs services.",
    name: "Thomas Laurent",
    location: "Beaune",
    rating: 5,
  },
  {
    content:
      "Service client impeccable et travail de qualité. L'équipe a su nous conseiller sur les meilleures solutions pour notre projet de rénovation de cuisine.",
    name: "Sophie Martin",
    location: "Chenôve",
    rating: 4,
  },
  {
    content:
      "Très satisfait de la rénovation de notre façade. RDEP21 a su respecter le caractère ancien de notre maison tout en lui donnant un coup de jeune.",
    name: "Pierre Moreau",
    location: "Talant",
    rating: 5,
  },
  {
    content:
      "Professionnalisme et expertise au rendez-vous. Notre salle de bain est méconnaissable, dans le bon sens du terme!",
    name: "Julie Petit",
    location: "Fontaine-lès-Dijon",
    rating: 5,
  },
  {
    content:
      "Nous avons apprécié les conseils avisés et le suivi régulier des travaux. RDEP21 a su s'adapter à nos contraintes et nos demandes.",
    name: "François Durand",
    location: "Marsannay-la-Côte",
    rating: 4,
  },
  {
    content: "Excellente entreprise pour tous vos travaux de rénovation. Équipe à l'écoute et travail soigné.",
    name: "Isabelle Bernard",
    location: "Quetigny",
    rating: 5,
  },
  {
    content:
      "RDEP21 a réalisé la pose de notre parquet et la peinture de notre appartement. Résultat impeccable et dans les délais.",
    name: "Nicolas Leroy",
    location: "Dijon",
    rating: 5,
  },
  {
    content:
      "Très bonne expérience avec RDEP21 pour notre projet de rénovation. Des artisans qualifiés et un travail de qualité.",
    name: "Émilie Roux",
    location: "Chevigny-Saint-Sauveur",
    rating: 4,
  },
  {
    content:
      "Je recommande RDEP21 pour leur professionnalisme et la qualité de leur travail. Notre maison a été complètement transformée!",
    name: "Antoine Girard",
    location: "Saint-Apollinaire",
    rating: 5,
  },
]
