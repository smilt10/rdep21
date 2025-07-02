import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
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
      title: "Revêtements Muraux et Sols",
      description: "Installation de papier peint, tissu mural et autres revêtements décoratifs et de sols.",
      link: "/activites#revetements-muraux",
      icon: "blue",
      order: 2,
    },
    {
      id: "3",
      title: "Isolation Intérieure (Certification RGE)",
      description: "Isolation thermique et acoustique intérieure avec certification RGE.",
      link: "/activites#isolation-interieure",
      icon: "green",
      order: 3,
    },
    {
      id: "4",
      title: "Platerie – Placo – Plafond suspendu",
      description: "Travaux de plâtrerie, cloisons, placo et installation de plafonds suspendus.",
      link: "/activites#platrerie",
      icon: "yellow",
      order: 4,
    },
    {
      id: "5",
      title: "Rénovation de façades",
      description: "Rénovation et ravalement de façades pour redonner vie à l'extérieur de votre bâtiment.",
      link: "/activites#renovation-facades",
      icon: "purple",
      order: 5,
    },
    {
      id: "6",
      title: "Isolation Extérieure (Certification RGE)",
      description: "Isolation thermique extérieure avec certification RGE pour améliorer l'efficacité énergétique.",
      link: "/activites#isolation-exterieure",
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

export default async function AboutPage() {
  const services = await getServices()
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            À Propos de RDEP21
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Le point fort de RDEP21 est dans ses compétences. Vous pouvez réaliser l’ensemble de vos travaux de rénovation  et d’isolation  avec une seule équipe. 
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-4">
                RDEP21, fondée par un artisan avec une expérience de plus de 35 ans, est une entreprise basée à Dijon spécialisée dans les travaux de rénovation et d’isolation  (Intérieure et d’extérieure) de votre habitat  
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Notre expertise et notre passion pour le métier nous permettent de réaliser des projets de qualité,
                adaptés aux besoins et aux goûts de nos clients.
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/mascot-character.png"
                  alt="Mascotte RDEP21"
                  width={150}
                  height={150}
                  className="object-contain mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Notre Philosophie</h3>
                  <p className="text-gray-700">
                    Nous croyons que chaque espace mérite une attention particulière et un travail soigné pour révéler
                    tout son potentiel.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/int.jpg"
                alt="Équipe RDEP21"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 transition-all hover:shadow-lg">
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

      {/* Strengths Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Nos Points Forts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ChevronRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualité des réalisations</h3>
              <p className="text-gray-600">
                Nous mettons un point d'honneur à fournir un travail de qualité irréprochable pour chaque projet.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ChevronRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Suivi des travaux</h3>
              <p className="text-gray-600">
                Nous assurons un suivi rigoureux de chaque étape du projet pour garantir sa bonne exécution.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ChevronRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Respect des délais</h3>
              <p className="text-gray-600">
                Nous nous engageons à respecter les délais convenus pour minimiser les désagréments liés aux travaux.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ChevronRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finitions impeccables</h3>
              <p className="text-gray-600">
                Nous accordons une attention particulière aux finitions pour un résultat parfait et durable.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ChevronRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conseils personnalisés</h3>
              <p className="text-gray-600">
                Nous vous accompagnons dans votre projet avec des conseils adaptés à vos besoins et à votre budget.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ChevronRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualification RGE</h3>
              <p className="text-gray-600">
                Nous sommes qualifiés RGE en isolation thermique intérieure et extérieure pour des travaux éligibles aux
                aides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Nos Certifications</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex flex-col items-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-md bg-white p-4 mb-4">
                <Image
                  src="/images/artisan-logo.png"
                  alt="Certification Artisan"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Artisan Qualifié</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Notre statut d'artisan garantit un savoir-faire et une expertise reconnus dans notre domaine.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-md bg-white p-4 mb-4">
                <Image
                  src="/images/qualibat-rge.jpeg"
                  alt="Certification Qualibat RGE"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualibat RGE</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Notre certification RGE (Reconnu Garant de l'Environnement) atteste de notre compétence en matière
                d'économie d'énergie.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-md bg-white p-4 mb-4">
                <Image
                  src="/images/capeb-logo.png"
                  alt="CAPEB Côte-d'Or"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CAPEB</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Notre adhésion à la Confédération de l'Artisanat et des Petites Entreprises du Bâtiment témoigne de
                notre engagement envers les valeurs de l'artisanat.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">Numéro de certification RGE : E-E191032</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Notre Zone d'Intervention</h2>
              <p className="text-lg text-gray-600 mb-4">
                Basés à Dijon, en Côte d'Or, nous intervenons principalement dans la région, mais pouvons également nous
                déplacer dans toute la France selon les projets. L'ensemble des devis que nous effectuons sont bien
                évidemment gratuits.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                N'hésitez pas à nous contacter pour discuter de votre projet, quel que soit votre emplacement.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Dijon et agglomération</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Côte d'Or</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Bourgogne-Franche-Comté</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Déplacements possibles dans toute la France</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43636.99013352664!2d5.0113699!3d47.3215806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29d8ceffd9675%3A0x409ce34b31458d0!2sDijon!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Prêt à travailler avec nous?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
