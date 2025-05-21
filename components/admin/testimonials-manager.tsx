"use client"

import { useState } from "react"
import { Star, Plus, Trash2, Edit } from "lucide-react"
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
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestion des Témoignages</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un témoignage
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Ajouter un nouveau témoignage</DialogTitle>
              <DialogDescription>Ajoutez un témoignage client à afficher sur votre site.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Marie Dupont"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Localisation</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Dijon"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Témoignage</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Écrivez le témoignage ici..."
                  rows={4}
                />
              </div>
              <div className="grid gap-2">
                <Label>Note</Label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setRating(star)} className="p-1">
                      <Star
                        className={cn(
                          "h-6 w-6",
                          star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Annuler
              </Button>
              <Button onClick={handleAddTestimonial}>Ajouter</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Modifier le témoignage</DialogTitle>
            <DialogDescription>Modifiez les informations de ce témoignage.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Nom</Label>
                <Input id="edit-name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-location">Localisation</Label>
                <Input id="edit-location" value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-content">Témoignage</Label>
              <Textarea id="edit-content" value={content} onChange={(e) => setContent(e.target.value)} rows={4} />
            </div>
            <div className="grid gap-2">
              <Label>Note</Label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => setRating(star)} className="p-1">
                    <Star
                      className={cn(
                        "h-6 w-6",
                        star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200",
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleEditTestimonial}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Testimonials List */}
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleEditClick(testimonial)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteTestimonial(testimonial.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mb-3 flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-5 w-5",
                    i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200",
                  )}
                />
              ))}
            </div>
            <p className="text-gray-700">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}
