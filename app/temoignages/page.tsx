import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Témoignages Clients
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Découvrez ce que nos clients disent de notre travail et de notre service. Nous sommes fiers de la
            satisfaction de nos clients et de la qualité de nos réalisations.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src={`/placeholder.svg?height=48&width=48&text=${testimonial.name.charAt(0)}`}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Prêt à rejoindre nos clients satisfaits?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Contactez-nous</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/realisations">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
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
  {
    content: "Travail soigné et équipe très professionnelle. Merci à RDEP21 pour la rénovation de notre salle de bain.",
    name: "Céline Dubois",
    location: "Dijon",
    rating: 5,
  },
  {
    content:
      "Nous sommes très satisfaits de la rénovation de notre cuisine. RDEP21 a su respecter nos contraintes de temps et de budget.",
    name: "Laurent Mercier",
    location: "Longvic",
    rating: 4,
  },
]
