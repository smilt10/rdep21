import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ActivitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Nos Activités</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Découvrez notre gamme complète de services de rénovation et décoration pour votre intérieur et extérieur.
          </p>
        </div>
      </section>

      {/* Peinture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Peinture</h2>
              <p className="text-lg text-gray-600 mb-4">
                Nous réalisons tous types de travaux de peinture intérieure et extérieure (constructions neuves et
                rénovations), peintures décoratives et revêtements pour l'intérieur de votre maison ou local
                professionnel.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nous utilisons tous types de peintures : glycéro, acrylique, alkyde, laquée, satinée et écologique.
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/mascot-painter.png"
                  alt="Peintre RDEP21"
                  width={150}
                  height={150}
                  className="object-contain mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Notre engagement</h3>
                  <p className="text-gray-700">
                    Nous réalisons tous nos travaux avec soin pour vous garantir un résultat impeccable.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=2069"
                alt="Services de peinture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Revêtements Muraux Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=2080"
                alt="Revêtements muraux"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Revêtements Muraux</h2>
              <p className="text-lg text-gray-600 mb-4">
                Nous installons papier peint, tissu en verre et tissu mural pour donner une nouvelle dimension à vos
                espaces.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Papier peint traditionnel et design</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Tissu en verre pour une isolation phonique</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Tissu mural décoratif</p>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Revêtements de Sol Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Revêtements de Sol</h2>
              <p className="text-lg text-gray-600 mb-4">
                Nous sommes à votre disposition pour tous types de revêtements de sol : parquet, carrelage, linoléum,
                etc.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Étapes concernant les parquets :</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Remise à neuf</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Rénovation</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Pose</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Ponçage</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Vitrification</p>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974"
                alt="Revêtements de sol"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plâtrerie Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1974"
                alt="Plâtrerie et cloisons"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Plâtrerie et Cloisons</h2>
              <p className="text-lg text-gray-600 mb-4">Nous réalisons les travaux suivants :</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Plâtrerie</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Doublage de murs</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Isolation intérieure des murs et plafonds</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Construction de faux plafonds</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Isolation ou aménagement de combles perdus</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Travaux de cloisonnement : distribution, isolation phonique</p>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Façades Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Rénovation de Façades</h2>
              <p className="text-lg text-gray-600 mb-4">
                Nous proposons des services complets de rénovation et ravalement de façades pour redonner vie à
                l'extérieur de votre bâtiment.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Notre équipe qualifiée assure un travail soigné et durable, respectant les caractéristiques
                architecturales de votre bâtiment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative h-40 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=160&width=240"
                    alt="Façade avant rénovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-medium">Avant</span>
                  </div>
                </div>
                <div className="relative h-40 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=160&width=240"
                    alt="Façade après rénovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-white font-medium">Après</span>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1965"
                alt="Rénovation de façades"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Prêt à démarrer votre projet?</h2>
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
