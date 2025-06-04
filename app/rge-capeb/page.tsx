import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Shield, Users } from "lucide-react"

export default function RgeCapebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifications RGE & CAPEB
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            RDEP21 est fier d'être certifié par les organismes les plus reconnus du secteur du bâtiment, 
            garantissant la qualité et la conformité de nos services.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="relative h-32 w-48">
              <Image 
                src="/images/qualibat-rge.jpeg" 
                alt="Certification RGE Qualibat" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="relative h-32 w-48">
              <Image 
                src="/images/capeb-logo.png" 
                alt="Logo CAPEB" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RGE Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                Certification RGE
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Reconnu Garant de l'Environnement
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                La certification RGE (Reconnu Garant de l'Environnement) est un label de qualité 
                délivré par l'État français. Elle atteste de la compétence de RDEP21 dans le domaine 
                de l'efficacité énergétique et des énergies renouvelables.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Éligibilité aux aides publiques</h4>
                    <p className="text-gray-600 text-sm">
                      Nos clients peuvent bénéficier des aides de l'État (MaPrimeRénov', CEE, etc.)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expertise technique certifiée</h4>
                    <p className="text-gray-600 text-sm">
                      Formation continue et mise à jour des compétences techniques
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Respect des normes environnementales</h4>
                    <p className="text-gray-600 text-sm">
                      Engagement pour la transition énergétique et écologique
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="p-6 bg-green-50 border-green-200">
                <CardHeader className="text-center pb-4">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Domaines RGE Certifiés</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm">Isolation thermique par l'extérieur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm">Isolation thermique par l'intérieur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm">Ravalement de façade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm">Peinture et finitions</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CAPEB Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardHeader className="text-center pb-4">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-800">Avantages CAPEB</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Réseau professionnel reconnu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Formation continue obligatoire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Respect du code de déontologie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Assurance responsabilité civile</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Membre CAPEB
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Confédération de l'Artisanat et des Petites Entreprises du Bâtiment
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                RDEP21 est membre de la CAPEB, la première organisation professionnelle du bâtiment 
                en France. Cette adhésion témoigne de notre engagement envers l'excellence et le 
                respect des standards les plus élevés de la profession.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Garantie de qualité</h4>
                    <p className="text-gray-600 text-sm">
                      Respect des règles de l'art et des normes professionnelles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Médiation en cas de litige</h4>
                    <p className="text-gray-600 text-sm">
                      Accès à un service de médiation pour résoudre les conflits
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Veille réglementaire</h4>
                    <p className="text-gray-600 text-sm">
                      Mise à jour permanente sur les évolutions du secteur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RDEP21 Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi choisir RDEP21 ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Certifications Reconnues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Nos certifications RGE et CAPEB garantissent la qualité de nos interventions 
                  et votre éligibilité aux aides publiques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Expertise Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Formation continue de nos équipes pour rester à la pointe des techniques 
                  et des réglementations du bâtiment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Confiance & Sérénité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Assurances professionnelles complètes et respect des délais pour 
                  votre tranquillité d'esprit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à démarrer votre projet avec un professionnel certifié ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez RDEP21 dès aujourd'hui pour un devis gratuit et personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact?type=devis" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander un devis
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
