import Image from "next/image"
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/10 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Contactez-nous</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Vous avez un projet? Complétez le formulaire ci-dessous pour nous contacter. Nous vous répondrons dans les
            plus brefs délais.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Formulaire de Contact</h2>
              <p className="text-lg text-gray-600 mb-8">
                Remplissez ce formulaire pour nous faire part de votre projet. Tous les devis sont gratuits et sans
                engagement.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Prénom *
                    </label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nom *
                    </label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email *
                  </label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="address"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Adresse
                  </label>
                  <Input id="address" />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="constructionSite"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Adresse du chantier
                  </label>
                  <Input id="constructionSite" placeholder="Indiquez la ville et le code postal" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Nature des travaux envisagés</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {workTypes.map((type, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`work-${index}`} />
                        <label
                          htmlFor={`work-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Parlez-nous de votre projet
                  </label>
                  <Textarea id="message" rows={5} />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" required />
                  <label
                    htmlFor="privacy"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    J'accepte la politique de confidentialité *
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Envoyer votre demande
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Informations de Contact</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vous pouvez également nous contacter directement par téléphone ou email, ou venir nous rencontrer à
                notre adresse.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">21000 DIJON</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">06.22.05.33.42</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@rdep21.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations Légales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>RCS: Dijon - 822 467 965</li>
                  <li>NAF: 4334Z</li>
                  <li>Numéro de certification RGE: E-E191032</li>
                </ul>
              </div>

              <div className="mt-12 flex gap-4">
                <Image
                  src="/images/artisan.png"
                  alt="Certification Artisan"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <Image
                  src="/images/LogRGE.jpg"
                  alt="Certification RGE"
                  width={100}
                  height={50}
                  className="object-contain"
                />
                <Image
                  src="/images/capeb.png"
                  alt="CAPEB Côte-d'Or"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Notre Localisation</h2>
          <div className="h-[400px] w-full overflow-hidden rounded-xl">
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">Pourquoi Nous Choisir?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const workTypes = [
  "Peinture",
  "Revêtements muraux et sols",
  "Isolation intérieure (RGE)",
  "Platerie – Placo – Plafond suspendu",
  "Rénovation de façades",
  "Isolation extérieure (RGE)",
  "Autres",
]

const benefits = [
  {
    title: "Devis Gratuit",
    description: "Nous proposons des devis détaillés et gratuits pour tous vos projets de rénovation.",
  },
  {
    title: "Expertise",
    description: "Plus de 30 ans d'expérience dans le domaine de la rénovation et de la décoration.",
  },
  {
    title: "Qualité",
    description: "Un travail soigné et des finitions impeccables pour un résultat qui dure dans le temps.",
  },
  {
    title: "Garantie",
    description: "Nos travaux sont garantis et nous sommes assurés pour votre tranquillité d'esprit.",
  },
]
