import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            Découvrez notre histoire, notre équipe et notre engagement envers la qualité et le service client.
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
                Fondée par un artisan qui travaille depuis plus de 30 ans, RDEP21 est une entreprise basée à Dijon
                spécialisée dans les travaux de design d'intérieur (neufs ou anciens).
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
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
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Placo</h3>
              <p className="text-gray-600 mb-4">
                Partition, rénovation, isolation thermique et/ou phonique. Nous réalisons tous vos travaux de placo avec
                précision et qualité.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Installation de Menuiserie</h3>
              <p className="text-gray-600 mb-4">
                Installation de fenêtres, portes et autres éléments de menuiserie pour améliorer l'esthétique et
                l'isolation de votre espace.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Décoration Murale et Plafond</h3>
              <p className="text-gray-600 mb-4">
                Plâtre, peinture, tissu en verre ou papier peint pour transformer vos murs et plafonds selon vos goûts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revêtements de Sol</h3>
              <p className="text-gray-600 mb-4">
                Parquet, PVC, carrelage et autres revêtements pour un sol durable et esthétique adapté à vos besoins.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Isolation</h3>
              <p className="text-gray-600 mb-4">
                Solutions d'isolation thermique pour améliorer le confort et réduire la consommation énergétique de
                votre habitation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rénovation de Façade</h3>
              <p className="text-gray-600 mb-4">
                Ravalement et rénovation de façades pour redonner une nouvelle jeunesse à l'extérieur de votre bâtiment.
              </p>
            </div>
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
                déplacer dans toute la France selon les projets.L'ensemble des devis que nous effectuons sont bien
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
