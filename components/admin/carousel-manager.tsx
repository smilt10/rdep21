"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Plus, Trash2, Upload, ArrowUp, ArrowDown, ImageIcon } from "lucide-react"
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
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center shadow-md">
            <ImageIcon className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">
            Gestion du Carousel
          </h2>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white shadow-md border-0">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter une image
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent font-bold">
                Ajouter une nouvelle image
              </DialogTitle>
              <DialogDescription>Ajoutez une image au carousel de la page d'accueil.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label className="font-medium text-gray-700">Image</Label>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-60 w-full overflow-hidden rounded-lg border-2 border-dashed border-rose-200 bg-rose-50 transition-all hover:border-rose-300">
                    {imagePreview ? (
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Aperçu de l'image"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                        <Upload className="h-12 w-12 text-rose-400 mb-2" />
                        <p className="text-sm text-gray-500">Cliquez pour sélectionner une image ou glissez-déposez</p>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP jusqu'à 5MB</p>
                      </div>
                    )}
                  </div>
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="w-full cursor-pointer file:cursor-pointer file:border-0 file:bg-rose-50 file:text-rose-600 file:font-medium hover:file:bg-rose-100" 
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageAlt" className="font-medium text-gray-700">Texte alternatif</Label>
                <Input
                  id="imageAlt"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Description de l'image"
                  className="border-gray-200 focus:border-rose-300 focus:ring-rose-200"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setIsAddDialogOpen(false)} variant="outline" className="border-gray-200 hover:bg-gray-50 hover:text-gray-900">
                Annuler
              </Button>
              <Button 
                onClick={handleAddImage} 
                disabled={!imagePreview}
                className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white border-0"
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
          <h3 className="text-lg font-medium text-gray-800">Statistiques du carousel</h3>
          <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full">Page d'accueil</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-rose-50 to-white p-4 rounded-lg border border-rose-100">
            <p className="text-sm text-gray-500 mb-1">Total d'images</p>
            <p className="text-2xl font-bold text-gray-900">{carouselImages.length}</p>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-white p-4 rounded-lg border border-rose-100">
            <p className="text-sm text-gray-500 mb-1">Format recommandé</p>
            <p className="text-lg font-medium text-gray-900">1920 × 1080 px</p>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-white p-4 rounded-lg border border-rose-100">
            <p className="text-sm text-gray-500 mb-1">Vitesse de défilement</p>
            <p className="text-lg font-medium text-gray-900">5 secondes</p>
          </div>
        </div>
      </div>

      {/* Carousel Images List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Images du carousel</h3>
        <div className="space-y-4">
          {carouselImages.map((image, index) => (
            <div 
              key={image.id} 
              className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 hover:shadow-md transition-all duration-200"
            >
              <div className="relative h-24 w-32 overflow-hidden rounded-lg shadow-sm">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="bg-rose-100 text-rose-700 text-xs px-2 py-0.5 rounded-full mr-2">#{index + 1}</span>
                  <p className="font-medium text-gray-800">Image {index + 1}</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">{image.alt}</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={() => moveImage(image.id, "up")} 
                  disabled={index === 0} 
                  className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 h-9 rounded-md px-3 shadow-sm"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => moveImage(image.id, "down")}
                  disabled={index === carouselImages.length - 1}
                  className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 h-9 rounded-md px-3 shadow-sm"
                >
                  <ArrowDown className="h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => handleDeleteImage(image.id)} 
                  className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 h-9 rounded-md px-3 shadow-sm"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
