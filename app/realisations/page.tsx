import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AchievementsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Nos Réalisations</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Découvrez quelques-unes de nos transformations les plus impressionnantes. Avant et après, voyez par
            vous-même la qualité de notre travail.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <div key={index} className="overflow-hidden">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">{project.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-80 w-full overflow-hidden rounded-xl group">
                    <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center transition-all duration-300 group-hover:bg-black/20">
                      <span className="text-white font-medium text-lg transition-opacity duration-300 group-hover:opacity-70">
                        Avant
                      </span>
                    </div>
                    <Image
                      src={project.before || "/placeholder.svg"}
                      alt={`${project.title} avant`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative h-80 w-full overflow-hidden rounded-xl group">
                    <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center transition-all duration-300 group-hover:bg-black/10">
                      <span className="text-white font-medium text-lg transition-opacity duration-300 group-hover:opacity-70">
                        Après
                      </span>
                    </div>
                    <Image
                      src={project.after || "/placeholder.svg"}
                      alt={`${project.title} après`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Autres Projets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-xl group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition-all duration-300 group-hover:from-black/60">
                  <h3 className="text-xl font-bold text-white transition-opacity duration-300 group-hover:opacity-90">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-2 transition-opacity duration-300 group-hover:opacity-70">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Envie de transformer votre espace?
          </h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit.
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
    before: "/images/facade1.jpg",
    after: "/images/facade2.jpg",
    description:
      "Rénovation complète d'une façade ancienne avec mise en valeur des éléments architecturaux et installation de nouvelles portes en bois.",
  },
  {
    title: "Rénovation de couloir",
    before: "/images/couloir1.jpg",
    after: "/images/couloir2.jpg",
    description:
      "Transformation d'un couloir endommagé par l'humidité en un espace moderne et lumineux avec peinture bicolore, lambris et rénovation du parquet.",
  },
  {
    title: "Rénovation de plafond",
    before: "/images/plafond1.jpg",
    after: "/images/plafond2.jpg",
    description:
      "Remplacement d'un système de ventilation obsolète et réparation des fissures au plafond pour un résultat impeccable et fonctionnel.",
  },
  {
    title: "Rénovation de cuisine",
    before: "/images/cuisine1.jpg",
    after: "/images/cuisine2.jpg",
    description:
      "Transformation radicale d'une cuisine vétuste et délabrée en un espace propre, fonctionnel et lumineux avec nouveaux murs, sol et mobilier.",
  },
]

const otherProjects = [
  {
    title: "Rénovation d'appartement",
    location: "Dijon Centre",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070",
  },
  {
    title: "Peinture intérieure",
    location: "Chenôve",
    image: "/images/man_paint.png",
  },
  {
    title: "Pose de parquet",
    location: "Fontaine-lès-Dijon",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974",
  },
  {
    title: "Rénovation de salle de bain",
    location: "Talant",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
  },
  {
    title: "Aménagement de combles",
    location: "Beaune",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
  },
  {
    title: "Ravalement de façade",
    location: "Saint-Apollinaire",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1965",
  },
]
