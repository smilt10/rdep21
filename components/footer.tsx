import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              <div className="relative h-24 w-64">
                <Image src="/images/logo-new.png" alt="RDEP21 Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="mb-4 max-w-xs">
              RDEP21 est une entreprise de rénovation et décoration basée à Dijon, spécialisée dans les travaux
              d'intérieur et d'extérieur.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Nos services</h3>
            <ul className="space-y-2">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="hover:text-white">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Liens utiles</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>21000 DIJON</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>06.22.05.33.42</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span>contact@rdep21.com</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white p-2">
                <Image
                  src="/images/artisan.png"
                  alt="Certification Artisan"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white p-2">
                <Image
                  src="/images/LogRGE.jpg"
                  alt="Certification RGE"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white p-2">
                <Image
                  src="/images/capeb.png"
                  alt="CAPEB Côte-d'Or"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>&copy; {new Date().getFullYear()} RDEP21. Tous droits réservés.</p>
            <div className="flex space-x-4 text-sm">
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const footerServices = [
  { label: "Peinture", href: "/activites" },
  { label: "Revêtements muraux et sols", href: "/activites" },
  { label: "Isolation intérieure (RGE)", href: "/activites" },
  { label: "Platerie – Placo – Plafond suspendu", href: "/activites" },
  { label: "Rénovation de façades", href: "/activites" },
  { label: "Isolation extérieure (RGE)", href: "/activites" },
]

const usefulLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos activités", href: "/activites" },
  { label: "Nos réalisations", href: "/realisations" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
]
