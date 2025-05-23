"use client"

import { useState } from "react"
import { Star, Plus, Trash2, Edit, MessageSquare, User, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

// Mock data for demonstration
const mockTestimonials = [
  {
    id: 1,
    content:
      "RDEP21 a complètement transformé notre salon. L'équipe a été professionnelle du début à la fin, respectant les délais et le budget. La qualité du travail est exceptionnelle!",
    name: "Marie Dupont",
    location: "Dijon",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Nous avons fait appel à RDEP21 pour la rénovation complète de notre appartement. Le résultat est à la hauteur de nos attentes. Je recommande vivement leurs services.",
    name: "Thomas Laurent",
    location: "Beaune",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Service client impeccable et travail de qualité. L'équipe a su nous conseiller sur les meilleures solutions pour notre projet de rénovation de cuisine.",
    name: "Sophie Martin",
    location: "Chenôve",
    rating: 4,
  },
]

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState(mockTestimonials)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState<any>(null)

  // Form state
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [content, setContent] = useState("")
  const [rating, setRating] = useState(5)

  const handleAddTestimonial = () => {
    const newTestimonial = {
      id: testimonials.length + 1,
      name,
      location,
      content,
      rating,
    }

    setTestimonials([...testimonials, newTestimonial])
    resetForm()
    setIsAddDialogOpen(false)
  }

  const handleEditTestimonial = () => {
    if (!currentTestimonial) return

    const updatedTestimonials = testimonials.map((testimonial) =>
      testimonial.id === currentTestimonial.id
        ? {
            ...testimonial,
            name: name || testimonial.name,
            location: location || testimonial.location,
            content: content || testimonial.content,
            rating,
          }
        : testimonial,
    )

    setTestimonials(updatedTestimonials)
    resetForm()
    setIsEditDialogOpen(false)
  }

  const handleDeleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id))
  }

  const handleEditClick = (testimonial: any) => {
    setCurrentTestimonial(testimonial)
    setName(testimonial.name)
    setLocation(testimonial.location)
    setContent(testimonial.content)
    setRating(testimonial.rating)
    setIsEditDialogOpen(true)
  }

  const resetForm = () => {
    setName("")
    setLocation("")
    setContent("")
    setRating(5)
    setCurrentTestimonial(null)
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
            <MessageSquare className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Gestion des Témoignages
          </h2>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md border-0">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un témoignage
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-bold">
                Ajouter un nouveau témoignage
              </DialogTitle>
              <DialogDescription>Ajoutez un témoignage client à afficher sur votre site.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="font-medium text-gray-700 flex items-center">
                    <User className="h-4 w-4 mr-1 text-amber-500" />
                    Nom
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Marie Dupont"
                    className="border-gray-200 focus:border-amber-300 focus:ring-amber-200"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location" className="font-medium text-gray-700 flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-amber-500" />
                    Localisation
                  </Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Dijon"
                    className="border-gray-200 focus:border-amber-300 focus:ring-amber-200"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content" className="font-medium text-gray-700 flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1 text-amber-500" />
                  Témoignage
                </Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Écrivez le témoignage ici..."
                  rows={4}
                  className="border-gray-200 focus:border-amber-300 focus:ring-amber-200"
                />
              </div>
              <div className="grid gap-2">
                <Label className="font-medium text-gray-700">Note</Label>
                <div className="flex p-2 bg-amber-50 rounded-lg border border-amber-100">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star} 
                      type="button" 
                      onClick={() => setRating(star)} 
                      className="p-1 transition-all duration-200 hover:scale-110"
                    >
                      <Star
                        className={cn(
                          "h-7 w-7",
                          star <= rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="border-gray-200 hover:bg-gray-50 hover:text-gray-900">
                Annuler
              </Button>
              <Button 
                onClick={handleAddTestimonial}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0"
              >
                Ajouter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Card */}
      <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">Statistiques des témoignages</h3>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Avis clients</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-lg border border-amber-100">
            <p className="text-sm text-gray-500 mb-1">Total de témoignages</p>
            <p className="text-2xl font-bold text-gray-900">{testimonials.length}</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-lg border border-amber-100">
            <p className="text-sm text-gray-500 mb-1">Note moyenne</p>
            <div className="flex items-center">
              <p className="text-lg font-medium text-gray-900 mr-2">
                {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}
              </p>
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-lg border border-amber-100">
            <p className="text-sm text-gray-500 mb-1">Dernière mise à jour</p>
            <p className="text-lg font-medium text-gray-900">Aujourd'hui</p>
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-bold">
              Modifier le témoignage
            </DialogTitle>
            <DialogDescription>Modifiez les informations de ce témoignage.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name" className="font-medium text-gray-700 flex items-center">
                  <User className="h-4 w-4 mr-1 text-amber-500" />
                  Nom
                </Label>
                <Input 
                  id="edit-name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="border-gray-200 focus:border-amber-300 focus:ring-amber-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-location" className="font-medium text-gray-700 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-amber-500" />
                  Localisation
                </Label>
                <Input 
                  id="edit-location" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                  className="border-gray-200 focus:border-amber-300 focus:ring-amber-200"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-content" className="font-medium text-gray-700 flex items-center">
                <MessageSquare className="h-4 w-4 mr-1 text-amber-500" />
                Témoignage
              </Label>
              <Textarea 
                id="edit-content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                rows={4} 
                className="border-gray-200 focus:border-amber-300 focus:ring-amber-200"
              />
            </div>
            <div className="grid gap-2">
              <Label className="font-medium text-gray-700">Note</Label>
              <div className="flex p-2 bg-amber-50 rounded-lg border border-amber-100">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star} 
                    type="button" 
                    onClick={() => setRating(star)} 
                    className="p-1 transition-all duration-200 hover:scale-110"
                  >
                    <Star
                      className={cn(
                        "h-7 w-7",
                        star <= rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200",
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              Annuler
            </Button>
            <Button 
              onClick={handleEditTestimonial}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0"
            >
              Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Testimonials List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Liste des témoignages</h3>
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold shadow-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 text-amber-500 mr-1" />
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEditClick(testimonial)}
                    className="border-gray-200 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    className="bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 hover:text-orange-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mb-3 flex bg-amber-50 p-2 rounded-md inline-block">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200",
                    )}
                  />
                ))}
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-3">
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
