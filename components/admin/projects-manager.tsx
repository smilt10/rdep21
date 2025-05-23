"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Plus, Trash2, Upload, Edit, ImageIcon, ArrowRightLeft } from "lucide-react"
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

// Mock data for demonstration
const mockProjects = [
  {
    id: 1,
    title: "Rénovation de façade",
    before: "/images/facade1.jpg",
    after: "/images/facade2.jpg",
    description:
      "Rénovation complète d'une façade ancienne avec mise en valeur des éléments architecturaux et installation de nouvelles portes en bois.",
  },
  {
    id: 2,
    title: "Rénovation de couloir",
    before: "/images/couloir1.jpg",
    after: "/images/couloir2.jpg",
    description:
      "Transformation d'un couloir endommagé par l'humidité en un espace moderne et lumineux avec peinture bicolore, lambris et rénovation du parquet.",
  },
  {
    id: 3,
    title: "Rénovation de plafond",
    before: "/images/plafond1.jpg",
    after: "/images/plafond2.jpg",
    description:
      "Remplacement d'un système de ventilation obsolète et réparation des fissures au plafond pour un résultat impeccable et fonctionnel.",
  },
]

export default function ProjectsManager() {
  const [projects, setProjects] = useState(mockProjects)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<any>(null)

  // Form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [beforeImage, setBeforeImage] = useState<File | null>(null)
  const [afterImage, setAfterImage] = useState<File | null>(null)
  const [beforePreview, setBeforePreview] = useState("")
  const [afterPreview, setAfterPreview] = useState("")

  const handleAddProject = () => {
    // In a real app, you would upload the images to a storage service
    // and save the project data to a database
    const newProject = {
      id: projects.length + 1,
      title,
      description,
      before: beforePreview || "/placeholder.svg",
      after: afterPreview || "/placeholder.svg",
    }

    setProjects([...projects, newProject])
    resetForm()
    setIsAddDialogOpen(false)
  }

  const handleEditProject = () => {
    if (!currentProject) return

    const updatedProjects = projects.map((project) =>
      project.id === currentProject.id
        ? {
            ...project,
            title: title || project.title,
            description: description || project.description,
            before: beforePreview || project.before,
            after: afterPreview || project.after,
          }
        : project,
    )

    setProjects(updatedProjects)
    resetForm()
    setIsEditDialogOpen(false)
  }

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  const handleEditClick = (project: any) => {
    setCurrentProject(project)
    setTitle(project.title)
    setDescription(project.description)
    setBeforePreview(project.before)
    setAfterPreview(project.after)
    setIsEditDialogOpen(true)
  }

  const handleBeforeImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setBeforeImage(file)
      setBeforePreview(URL.createObjectURL(file))
    }
  }

  const handleAfterImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setAfterImage(file)
      setAfterPreview(URL.createObjectURL(file))
    }
  }

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setBeforeImage(null)
    setAfterImage(null)
    setBeforePreview("")
    setAfterPreview("")
    setCurrentProject(null)
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
            <ImageIcon className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Gestion des Réalisations
          </h2>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md border-0">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter une réalisation
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
                Ajouter une nouvelle réalisation
              </DialogTitle>
              <DialogDescription>
                Remplissez les informations ci-dessous pour ajouter un nouveau projet à votre portfolio.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-medium text-gray-700">Titre</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Rénovation de façade"
                  className="border-gray-200 focus:border-purple-300 focus:ring-purple-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="font-medium text-gray-700">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez le projet..."
                  rows={3}
                  className="border-gray-200 focus:border-purple-300 focus:ring-purple-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="font-medium text-gray-700">Image Avant</Label>
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-lg border-2 border-dashed border-purple-200 bg-purple-50 transition-all hover:border-purple-300">
                      {beforePreview ? (
                        <Image
                          src={beforePreview || "/placeholder.svg"}
                          alt="Aperçu avant"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                          <Upload className="h-10 w-10 text-purple-400 mb-2" />
                          <p className="text-sm text-gray-500">Avant</p>
                        </div>
                      )}
                    </div>
                    <Input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleBeforeImageChange} 
                      className="w-full cursor-pointer file:cursor-pointer file:border-0 file:bg-purple-50 file:text-purple-600 file:font-medium hover:file:bg-purple-100" 
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label className="font-medium text-gray-700">Image Après</Label>
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-lg border-2 border-dashed border-pink-200 bg-pink-50 transition-all hover:border-pink-300">
                      {afterPreview ? (
                        <Image
                          src={afterPreview || "/placeholder.svg"}
                          alt="Aperçu après"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                          <Upload className="h-10 w-10 text-pink-400 mb-2" />
                          <p className="text-sm text-gray-500">Après</p>
                        </div>
                      )}
                    </div>
                    <Input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleAfterImageChange} 
                      className="w-full cursor-pointer file:cursor-pointer file:border-0 file:bg-pink-50 file:text-pink-600 file:font-medium hover:file:bg-pink-100" 
                    />
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="border-gray-200 hover:bg-gray-50 hover:text-gray-900">
                Annuler
              </Button>
              <Button 
                onClick={handleAddProject}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
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
          <h3 className="text-lg font-medium text-gray-800">Statistiques des réalisations</h3>
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Portfolio</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg border border-purple-100">
            <p className="text-sm text-gray-500 mb-1">Total de projets</p>
            <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg border border-purple-100">
            <p className="text-sm text-gray-500 mb-1">Format recommandé</p>
            <p className="text-lg font-medium text-gray-900">1200 × 800 px</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg border border-purple-100">
            <p className="text-sm text-gray-500 mb-1">Dernière mise à jour</p>
            <p className="text-lg font-medium text-gray-900">Aujourd'hui</p>
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
              Modifier la réalisation
            </DialogTitle>
            <DialogDescription>Modifiez les informations de ce projet.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-title" className="font-medium text-gray-700">Titre</Label>
              <Input 
                id="edit-title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className="border-gray-200 focus:border-purple-300 focus:ring-purple-200"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-description" className="font-medium text-gray-700">Description</Label>
              <Textarea
                id="edit-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="border-gray-200 focus:border-purple-300 focus:ring-purple-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="font-medium text-gray-700">Image Avant</Label>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-40 w-full overflow-hidden rounded-lg border-2 border-dashed border-purple-200 bg-purple-50">
                    {beforePreview && (
                      <Image
                        src={beforePreview || "/placeholder.svg"}
                        alt="Aperçu avant"
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleBeforeImageChange} 
                    className="w-full cursor-pointer file:cursor-pointer file:border-0 file:bg-purple-50 file:text-purple-600 file:font-medium hover:file:bg-purple-100" 
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label className="font-medium text-gray-700">Image Après</Label>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-40 w-full overflow-hidden rounded-lg border-2 border-dashed border-pink-200 bg-pink-50">
                    {afterPreview && (
                      <Image
                        src={afterPreview || "/placeholder.svg"}
                        alt="Aperçu après"
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleAfterImageChange} 
                    className="w-full cursor-pointer file:cursor-pointer file:border-0 file:bg-pink-50 file:text-pink-600 file:font-medium hover:file:bg-pink-100" 
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              Annuler
            </Button>
            <Button 
              onClick={handleEditProject}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">{project.id}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleEditClick(project)}
                  className="border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDeleteProject(project.id)}
                  className="bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200 hover:text-pink-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="mb-6 text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">{project.description}</p>
            
            <div className="relative mb-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg">
                <ArrowRightLeft className="h-6 w-6 text-purple-500" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-1 rounded-lg shadow-md">
                    <div className="bg-white p-1 rounded-md">
                      <p className="mb-2 font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-md inline-block">Avant</p>
                      <div className="relative h-48 w-full overflow-hidden rounded-md shadow-sm">
                        <Image
                          src={project.before || "/placeholder.svg"}
                          alt={`${project.title} avant`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-1 rounded-lg shadow-md">
                    <div className="bg-white p-1 rounded-md">
                      <p className="mb-2 font-medium text-pink-700 bg-pink-50 px-3 py-1 rounded-md inline-block">Après</p>
                      <div className="relative h-48 w-full overflow-hidden rounded-md shadow-sm">
                        <Image
                          src={project.after || "/placeholder.svg"}
                          alt={`${project.title} après`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
