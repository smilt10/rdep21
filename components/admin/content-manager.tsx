"use client"

import { useState } from "react"
import { Save } from "lucide-react"
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
      <h2 className="mb-6 text-2xl font-bold">Gestion du Contenu</h2>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="home">Page d'accueil</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="about">À propos</TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="space-y-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold">Section Héro</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="heroTitle">Titre principal</Label>
                <Input
                  id="heroTitle"
                  value={homeContent.heroTitle}
                  onChange={(e) => setHomeContent({ ...homeContent, heroTitle: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="heroSubtitle">Sous-titre</Label>
                <Input
                  id="heroSubtitle"
                  value={homeContent.heroSubtitle}
                  onChange={(e) => setHomeContent({ ...homeContent, heroSubtitle: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold">Section À propos</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="aboutText">Texte principal</Label>
                <Textarea
                  id="aboutText"
                  value={homeContent.aboutText}
                  onChange={(e) => setHomeContent({ ...homeContent, aboutText: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="aboutText2">Texte secondaire</Label>
                <Textarea
                  id="aboutText2"
                  value={homeContent.aboutText2}
                  onChange={(e) => setHomeContent({ ...homeContent, aboutText2: e.target.value })}
                  rows={3}
                />
              </div>
            </div>
          </div>

          <Button onClick={handleSaveHomeContent}>
            <Save className="mr-2 h-4 w-4" />
            Enregistrer les modifications
          </Button>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold">Informations de contact</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  value={contactContent.address}
                  onChange={(e) => setContactContent({ ...contactContent, address: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  value={contactContent.phone}
                  onChange={(e) => setContactContent({ ...contactContent, phone: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={contactContent.email}
                  onChange={(e) => setContactContent({ ...contactContent, email: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold">Informations légales</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="rcs">RCS</Label>
                <Input
                  id="rcs"
                  value={contactContent.rcs}
                  onChange={(e) => setContactContent({ ...contactContent, rcs: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="naf">NAF</Label>
                <Input
                  id="naf"
                  value={contactContent.naf}
                  onChange={(e) => setContactContent({ ...contactContent, naf: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rgeNumber">Numéro de certification RGE</Label>
                <Input
                  id="rgeNumber"
                  value={contactContent.rgeNumber}
                  onChange={(e) => setContactContent({ ...contactContent, rgeNumber: e.target.value })}
                />
              </div>
            </div>
          </div>

          <Button onClick={handleSaveContactContent}>
            <Save className="mr-2 h-4 w-4" />
            Enregistrer les modifications
          </Button>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold">Notre Histoire</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="historyText">Texte principal</Label>
                <Textarea
                  id="historyText"
                  value={aboutContent.historyText}
                  onChange={(e) => setAboutContent({ ...aboutContent, historyText: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="historyText2">Texte secondaire</Label>
                <Textarea
                  id="historyText2"
                  value={aboutContent.historyText2}
                  onChange={(e) => setAboutContent({ ...aboutContent, historyText2: e.target.value })}
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold">Notre Philosophie</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="philosophy">Texte</Label>
                <Textarea
                  id="philosophy"
                  value={aboutContent.philosophy}
                  onChange={(e) => setAboutContent({ ...aboutContent, philosophy: e.target.value })}
                  rows={3}
                />
              </div>
            </div>
          </div>

          <Button onClick={handleSaveAboutContent}>
            <Save className="mr-2 h-4 w-4" />
            Enregistrer les modifications
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
