"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Plus, Trash2, Upload, ArrowUp, ArrowDown } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

// Mock data for demonstration
const mockCarouselImages = [
  {
    id: 1,
    src: "/images/couple-1.png",
    alt: "Rénovation et transition énergétique 1",
  },
  {
    id: 2,
    src: "/images/couple-keys.png",
    alt: "Rénovation et transition énergétique 2",
  },
  {
    id: 3,
    src: "/images/couple-2.png",
    alt: "Rénovation et transition énergétique 3",
  },
  {
    id: 4,
    src: "/images/couple-doorway.png",
    alt: "Rénovation et transition énergétique 4",
  },
  {
    id: 5,
    src: "/images/couple-3.png",
    alt: "Rénovation et transition énergétique 5",
  },
  {
    id: 6,
    src: "/images/couple-garden.jpeg",
    alt: "Rénovation et transition énergétique 6",
  },
  {
    id: 7,
    src: "/images/couple-4.png",
    alt: "Rénovation et transition énergétique 7",
  },
]

export default function CarouselManager() {
  const [carouselImages, setCarouselImages] = useState(mockCarouselImages)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  // Form state
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState("")
  const [imageAlt, setImageAlt] = useState("")

  const handleAddImage = () => {
    // In a real app, you would upload the image to a storage service
    // and save the image data to a database
    const newImage = {
      id: carouselImages.length + 1,
      src: imagePreview || "/placeholder.svg",
      alt: imageAlt || `Rénovation et transition énergétique ${carouselImages.length + 1}`,
    }

    setCarouselImages([...carouselImages, newImage])
    resetForm()
    setIsAddDialogOpen(false)
  }

  const handleDeleteImage = (id: number) => {
    setCarouselImages(carouselImages.filter((image) => image.id !== id))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImageFile(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const moveImage = (id: number, direction: "up" | "down") => {
    const index = carouselImages.findIndex((image) => image.id === id)
    if ((direction === "up" && index === 0) || (direction === "down" && index === carouselImages.length - 1)) {
      return
    }

    const newImages = [...carouselImages]
    const targetIndex =
      direction === "up"
        ? index - 1
        : index + 1
    
    // Swap positions
    const temp = newImages[index];
    newImages[index] = newImages[targetIndex];
    newImages[targetIndex] = temp;

    setCarouselImages(newImages)
  }

  const resetForm = () => {
    setImageFile(null)
    setImagePreview("")
    setImageAlt("")
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestion du Carousel</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter une image
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Ajouter une nouvelle image</DialogTitle>
              <DialogDescription>Ajoutez une image au carousel de la page d'accueil.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Image</Label>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-60 w-full overflow-hidden rounded-md border bg-gray-100">
                    {imagePreview ? (
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Aperçu de l'image"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Upload className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <Input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageAlt">Texte alternatif</Label>
                <Input
                  id="imageAlt"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Description de l'image"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setIsAddDialogOpen(false)} className="bg-background border border-input hover:bg-accent hover:text-accent-foreground">
                Annuler
              </Button>
              <Button onClick={handleAddImage} disabled={!imagePreview}>
                Ajouter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Carousel Images List */}
      <div className="space-y-4">
        {carouselImages.map((image, index) => (
          <div key={image.id} className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm">
            <div className="relative h-24 w-32 overflow-hidden rounded-md">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Image {index + 1}</p>
              <p className="text-sm text-gray-500">{image.alt}</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => moveImage(image.id, "up")} disabled={index === 0} className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                <ArrowUp className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => moveImage(image.id, "down")}
                disabled={index === carouselImages.length - 1}
                className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
              >
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button onClick={() => handleDeleteImage(image.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
