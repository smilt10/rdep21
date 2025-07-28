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
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Notre engagement</h3>
                  <p className="text-gray-700">
                    Nous réalisons tous nos travaux avec soin pour vous garantir un résultat impeccable.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <Image
                      src="/images/P1.png"
                      alt="Certification P1"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                    <Image
                      src="/images/P2.png"
                      alt="Certification P2"
                      width={150}
                      height={200}
                      className="object-contain"
                    />
                    <Image
                      src="/images/P3.png"
                      alt="Certification P3"
                      width={150}
                      height={200}
                      className="object-contain"
                    />
                    <Image
                      src="/images/P4.png"
                      alt="Certification P4"
                      width={150}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/panting1.png"
                alt="Services de peinture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Revêtements Muraux et Sols Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/Parquet.jpg"
                alt="Revêtements muraux et sols"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Revêtements Muraux et Sols</h2>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pour les Revêtements Muraux :</h3>
              <p className="text-lg text-gray-600 mb-4">
                Nous posons papier peint, toile de verre décoratifpour donner une nouvelle dimension à vos espaces.
              </p>
             <h3 className="text-xl font-bold text-gray-900 mb-3">Pour les sols :</h3>
              <ul className="space-y-3 mb-6">
                
                  <p className="text-gray-700">Nous sommes à votre disposition pour tous types de revêtements de sol : tout type de parquets flottant, PVC, dalle PVC, etc.. , Rénovation sol (ponçage, vitrification)</p>
                
              </ul>
              <Button asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Isolation Intérieure Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Isolation Thermique par l’Intérieure (ITI)</h2>
              <h6 className="text-lg text-gray-600 mb-4">Certification RGE  No E-E191032,  7122 Isolation thermique par l'intérieur </h6>
              <p className="text-lg text-gray-600 mb-4">
                Isolation des murs, des rampants, des plafonds et des planchers bas. Egalement, isolation des combles.
              </p>
             
              <Button asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/insolation.jpg"
                alt="Isolation intérieure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platerie – Placo – Plafond suspendu Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/placoo.jpg"
                alt="Platerie, Placo et plafonds suspendus"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Platerie – Placo – Plafond suspendu</h2>
              <p className="text-lg text-gray-600 mb-4">Nous réalisons tous vos travaux de plâtrerie, pose de placo et installation de plafonds suspendus :</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Plâtrerie traditionnelle</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Pose de plaques de plâtre (Placo)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Installation de plafonds suspendus</p>
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
                  <p className="text-gray-700">Cloisons et cloisonnement</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Finitions et enduits</p>
                </li>
              </ul>
                 <div className="flex gap-4 mt-4">
                    <Image
                      src="/images/dora.png"
                      alt="Doras"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                    <Image
                      src="/images/litt.jpg"
                      alt="Litt"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                    
                  </div>
              <Button asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
        
        
      </section>

      {/* Rénovation de Façades Section */}
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
               <div className="flex gap-4 mt-4">
                    <Image
                      src="/images/dora.png"
                      alt="Doras"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <Image
                      src="/images/P1.png"
                      alt="Certification P1"
                      width={180}
                      height={200}
                      className="object-contain"
                    />
                    <Image
                      src="/images/P3.png"
                      alt="Certification P1"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                    <Image
                      src="/images/litt.jpg"
                      alt="Litt"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                    <Image
                      src="/images/P4.png"
                      alt="Certification P1"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                    
                  </div>
             
              <Button asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/avant.jpg"
                alt="Rénovation de façades"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Isolation Extérieure Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/external.jpg"
                alt="Isolation extérieure"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Isolation Thermique par l’Extérieur (ITE)</h2>
              <h6 className="text-lg text-gray-600 mb-4">Certification RGE  No E-E191032,  7122 Isolation thermique par l'intérieur </h6>
              <p className="text-lg text-gray-600 mb-4">
                Nous sommes certifiés RGE pour tous vos travaux d'isolation thermique extérieure. Améliorez l'efficacité énergétique de votre bâtiment.
              </p>
              <ul className="space-y-3 mb-6">
               
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Bardage et vêtures</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Enduits isolants</p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700">Amélioration du DPE</p>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
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
