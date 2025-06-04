import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCarousel from "@/components/testimonial-carousel"
import HeroImageCarousel from "@/components/hero-image-carousel"
import { Button } from "@/components/ui/button"

interface Service {
  id: string
  title: string
  description: string
  link: string
  icon: string
  order: number
}

async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/services`, {
      cache: 'no-store'
    })
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Error fetching services:', error)
  }
  
  // Fallback to default services if API fails
  return [
    {
      id: "1",
      title: "Peinture",
      description: "Peinture intérieure et extérieure avec une large gamme de finitions et de couleurs.",
      link: "/activites#peinture",
      icon: "red",
      order: 1,
    },
    {
      id: "2",
      title: "Revêtements Muraux",
      description: "Installation de papier peint, tissu mural et autres revêtements décoratifs.",
      link: "/activites#revetements-muraux",
      icon: "blue",
      order: 2,
    },
    {
      id: "3",
      title: "Revêtements de Sol",
      description: "Installation de parquet, carrelage, linoléum et autres revêtements de sol.",
      link: "/activites#revetements-sol",
      icon: "green",
      order: 3,
    },
    {
      id: "4",
      title: "Plâtrerie",
      description: "Travaux de plâtrerie, cloisons, doublage et isolation thermique et acoustique.",
      link: "/activites#platrerie",
      icon: "yellow",
      order: 4,
    },
    {
      id: "5",
      title: "Rénovation Complète",
      description: "Rénovation complète d'intérieur pour particuliers et professionnels.",
      link: "/activites#renovation-complete",
      icon: "purple",
      order: 5,
    },
    {
      id: "6",
      title: "Façades",
      description: "Rénovation et ravalement de façades pour redonner vie à l'extérieur de votre bâtiment.",
      link: "/activites#facades",
      icon: "orange",
      order: 6,
    },
  ]
}

function getIconColorClass(colorName: string) {
  const colorMap: { [key: string]: string } = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    pink: "bg-pink-500",
    indigo: "bg-indigo-500",
  }
  return colorMap[colorName] || "bg-blue-500"
}

export default async function Home() {
  const services = await getServices()
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-foreground/20 z-10" />
        <div className="container relative z-20 mx-auto px-4 py-24 sm:py-32 lg:flex lg:items-center lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Réussissez la transition énergétique et la transformation de votre habitat
            </h1>
            <p className="mt-6 text-xl text-white/90">
              Réussissez la transition énergétique et la transformation de votre habitat avec des experts certifiés
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/activites">Nos Services</Link>
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-bold text-xl md:text-2xl lg:text-3xl px-4 py-2 bg-primary/80 rounded-lg shadow-lg animate-pulse">
                Plus de 30 ans d'expérience
              </span>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <HeroImageCarousel />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              RDEP21 travaille avec les particuliers et les entreprises. Notre expérience nous permet de répondre à vos
              besoins pour les petits et grands espaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className={`w-6 h-6 ${getIconColorClass(service.icon)} rounded-full`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link} className="text-primary font-medium inline-flex items-center">
                  En savoir plus <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image src="/images/mascot-character.png" alt="Notre équipe" fill className="object-contain" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">À propos de RDEP21</h2>
              <p className="text-lg text-gray-600 mb-4">
                Fondée par un artisan qui travaille depuis plus de 30 ans, RDEP21 est une entreprise basée à Dijon
                spécialisée dans les travaux de design d'intérieur (neufs ou anciens).
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nous nous engageons à fournir un travail de qualité, avec un suivi rigoureux et dans le respect des
                délais.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Qualité des réalisations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Suivi des travaux</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Respect des délais</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Finitions impeccables</p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white p-2">
                  <Image
                    src="/images/artisan-logo.png"
                    alt="Certification Artisan"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white p-2">
                  <Image
                    src="/images/qualibat-rge.jpeg"
                    alt="Certification Qualibat RGE"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white p-2">
                  <Image
                    src="/images/capeb-logo.png"
                    alt="CAPEB Côte-d'Or"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos Réalisations</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos transformations les plus impressionnantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="overflow-hidden rounded-xl">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center">
                      <span className="text-white font-medium text-lg">Avant</span>
                    </div>
                    <Image
                      src={project.before || "/placeholder.svg"}
                      alt={`${project.title} avant`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center">
                      <span className="text-white font-medium text-lg">Après</span>
                    </div>
                    <Image
                      src={project.after || "/placeholder.svg"}
                      alt={`${project.title} après`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{project.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/realisations">Voir toutes nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Témoignages Clients</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de notre travail et de notre service.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Prêt à transformer votre espace?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



const projects = [
  {
    title: "Rénovation de façade",
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Rénovation de plafond",
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Rénovation de couloir",
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Rénovation de cuisine",
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
  },
]
