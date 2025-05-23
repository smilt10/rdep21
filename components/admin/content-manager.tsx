"use client"

import { useState } from "react"
import { Save, FileText, Home, Phone, Info, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

export default function ContentManager() {
  const [activeTab, setActiveTab] = useState("home")

  // Mock data for demonstration
  const [homeContent, setHomeContent] = useState({
    heroTitle: "Réussissez la transition énergétique et la transformation de votre habitat",
    heroSubtitle:
      "Réussissez la transition énergétique et la transformation de votre habitat avec des experts certifiés",
    aboutText:
      "Fondée par un artisan qui travaille depuis plus de 30 ans, RDEP21 est une entreprise basée à Dijon spécialisée dans les travaux de design d'intérieur (neufs ou anciens).",
    aboutText2:
      "Nous nous engageons à fournir un travail de qualité, avec un suivi rigoureux et dans le respect des délais.",
  })

  const [contactContent, setContactContent] = useState({
    address: "16 rue Saint Martin, 21000 DIJON",
    phone: "06.22.05.33.42",
    email: "contact@rdep21.com",
    rcs: "Dijon - 822 467 965",
    naf: "4334Z",
    rgeNumber: "E-E191032",
  })

  const [aboutContent, setAboutContent] = useState({
    historyText:
      "Fondée par un artisan qui travaille depuis plus de 30 ans, RDEP21 est une entreprise basée à Dijon spécialisée dans les travaux de design d'intérieur (neufs ou anciens).",
    historyText2:
      "Notre expertise et notre passion pour le métier nous permettent de réaliser des projets de qualité, adaptés aux besoins et aux goûts de nos clients.",
    philosophy:
      "Nous croyons que chaque espace mérite une attention particulière et un travail soigné pour révéler tout son potentiel.",
  })

  const handleSaveHomeContent = () => {
    // In a real app, you would save this to a database
    toast({
      title: "Contenu enregistré",
      description: "Les modifications de la page d'accueil ont été enregistrées avec succès.",
    })
  }

  const handleSaveContactContent = () => {
    // In a real app, you would save this to a database
    toast({
      title: "Contenu enregistré",
      description: "Les modifications des informations de contact ont été enregistrées avec succès.",
    })
  }

  const handleSaveAboutContent = () => {
    // In a real app, you would save this to a database
    toast({
      title: "Contenu enregistré",
      description: "Les modifications de la page À propos ont été enregistrées avec succès.",
    })
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Gestion du Contenu
          </h2>
        </div>
      </div>

      <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">Aperçu des pages</h3>
          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Site public</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-emerald-50 to-white p-4 rounded-lg border border-emerald-100">
            <div className="flex items-center mb-2">
              <Home className="h-4 w-4 text-emerald-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">Page d'accueil</p>
            </div>
            <p className="text-xs text-gray-500">Dernière modification: Aujourd'hui</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-white p-4 rounded-lg border border-emerald-100">
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 text-emerald-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">Contact</p>
            </div>
            <p className="text-xs text-gray-500">Dernière modification: Hier</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-white p-4 rounded-lg border border-emerald-100">
            <div className="flex items-center mb-2">
              <Info className="h-4 w-4 text-emerald-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">À propos</p>
            </div>
            <p className="text-xs text-gray-500">Dernière modification: 20/05/2025</p>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3 bg-emerald-50 p-1 rounded-lg">
          <TabsTrigger 
            value="home" 
            className={`rounded-md transition-all duration-200 ${
              activeTab === "home" 
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md" 
                : "data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm"
            }`}
          >
            <Home className="h-4 w-4 mr-2" />
            Page d'accueil
          </TabsTrigger>
          <TabsTrigger 
            value="contact" 
            className={`rounded-md transition-all duration-200 ${
              activeTab === "contact" 
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md" 
                : "data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm"
            }`}
          >
            <Phone className="h-4 w-4 mr-2" />
            Contact
          </TabsTrigger>
          <TabsTrigger 
            value="about" 
            className={`rounded-md transition-all duration-200 ${
              activeTab === "about" 
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md" 
                : "data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm"
            }`}
          >
            <Info className="h-4 w-4 mr-2" />
            À propos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="space-y-6">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm mr-3">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Section Héro</h3>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="heroTitle" className="font-medium text-gray-700">Titre principal</Label>
                <Input
                  id="heroTitle"
                  value={homeContent.heroTitle}
                  onChange={(e) => setHomeContent({ ...homeContent, heroTitle: e.target.value })}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="heroSubtitle" className="font-medium text-gray-700">Sous-titre</Label>
                <Input
                  id="heroSubtitle"
                  value={homeContent.heroSubtitle}
                  onChange={(e) => setHomeContent({ ...homeContent, heroSubtitle: e.target.value })}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm mr-3">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Section À propos</h3>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="aboutText" className="font-medium text-gray-700">Texte principal</Label>
                <Textarea
                  id="aboutText"
                  value={homeContent.aboutText}
                  onChange={(e) => setHomeContent({ ...homeContent, aboutText: e.target.value })}
                  rows={3}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="aboutText2" className="font-medium text-gray-700">Texte secondaire</Label>
                <Textarea
                  id="aboutText2"
                  value={homeContent.aboutText2}
                  onChange={(e) => setHomeContent({ ...homeContent, aboutText2: e.target.value })}
                  rows={3}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
            </div>
          </div>

          <Button 
            onClick={handleSaveHomeContent}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md border-0"
          >
            <Save className="mr-2 h-4 w-4" />
            Enregistrer les modifications
          </Button>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm mr-3">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Informations de contact</h3>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="address" className="font-medium text-gray-700">Adresse</Label>
                <Input
                  id="address"
                  value={contactContent.address}
                  onChange={(e) => setContactContent({ ...contactContent, address: e.target.value })}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone" className="font-medium text-gray-700">Téléphone</Label>
                <Input
                  id="phone"
                  value={contactContent.phone}
                  onChange={(e) => setContactContent({ ...contactContent, phone: e.target.value })}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="font-medium text-gray-700">Email</Label>
                <Input
                  id="email"
                  value={contactContent.email}
                  onChange={(e) => setContactContent({ ...contactContent, email: e.target.value })}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm mr-3">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Informations légales</h3>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="rcs" className="font-medium text-gray-700">RCS</Label>
                  <Input
                    id="rcs"
                    value={contactContent.rcs}
                    onChange={(e) => setContactContent({ ...contactContent, rcs: e.target.value })}
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="naf" className="font-medium text-gray-700">NAF</Label>
                  <Input
                    id="naf"
                    value={contactContent.naf}
                    onChange={(e) => setContactContent({ ...contactContent, naf: e.target.value })}
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="rgeNumber" className="font-medium text-gray-700">Numéro RGE</Label>
                  <Input
                    id="rgeNumber"
                    value={contactContent.rgeNumber}
                    onChange={(e) => setContactContent({ ...contactContent, rgeNumber: e.target.value })}
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleSaveContactContent}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md border-0"
          >
            <Save className="mr-2 h-4 w-4" />
            Enregistrer les modifications
          </Button>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm mr-3">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Notre Histoire</h3>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="historyText" className="font-medium text-gray-700">Texte principal</Label>
                <Textarea
                  id="historyText"
                  value={aboutContent.historyText}
                  onChange={(e) => setAboutContent({ ...aboutContent, historyText: e.target.value })}
                  rows={3}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="historyText2" className="font-medium text-gray-700">Texte secondaire</Label>
                <Textarea
                  id="historyText2"
                  value={aboutContent.historyText2}
                  onChange={(e) => setAboutContent({ ...aboutContent, historyText2: e.target.value })}
                  rows={3}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm mr-3">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Notre Philosophie</h3>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="philosophy" className="font-medium text-gray-700">Texte</Label>
                <Textarea
                  id="philosophy"
                  value={aboutContent.philosophy}
                  onChange={(e) => setAboutContent({ ...aboutContent, philosophy: e.target.value })}
                  rows={3}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>
            </div>
          </div>

          <Button 
            onClick={handleSaveAboutContent}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md border-0"
          >
            <Save className="mr-2 h-4 w-4" />
            Enregistrer les modifications
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
