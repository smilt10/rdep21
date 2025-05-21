"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Plus, Trash2, Upload, Edit } from "lucide-react"
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
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestion des Réalisations</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter une réalisation
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Ajouter une nouvelle réalisation</DialogTitle>
              <DialogDescription>
                Remplissez les informations ci-dessous pour ajouter un nouveau projet à votre portfolio.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Titre</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Rénovation de façade"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez le projet..."
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Image Avant</Label>
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-md border bg-gray-100">
                      {beforePreview ? (
                        <Image
                          src={beforePreview || "/placeholder.svg"}
                          alt="Aperçu avant"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Upload className="h-8 w-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <Input type="file" accept="image/*" onChange={handleBeforeImageChange} className="w-full" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Image Après</Label>
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-md border bg-gray-100">
                      {afterPreview ? (
                        <Image
                          src={afterPreview || "/placeholder.svg"}
                          alt="Aperçu après"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Upload className="h-8 w-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <Input type="file" accept="image/*" onChange={handleAfterImageChange} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Annuler
              </Button>
              <Button onClick={handleAddProject}>Ajouter</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Modifier la réalisation</DialogTitle>
            <DialogDescription>Modifiez les informations de ce projet.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-title">Titre</Label>
              <Input id="edit-title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Image Avant</Label>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-40 w-full overflow-hidden rounded-md border bg-gray-100">
                    {beforePreview && (
                      <Image
                        src={beforePreview || "/placeholder.svg"}
                        alt="Aperçu avant"
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <Input type="file" accept="image/*" onChange={handleBeforeImageChange} className="w-full" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Image Après</Label>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-40 w-full overflow-hidden rounded-md border bg-gray-100">
                    {afterPreview && (
                      <Image
                        src={afterPreview || "/placeholder.svg"}
                        alt="Aperçu après"
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <Input type="file" accept="image/*" onChange={handleAfterImageChange} className="w-full" />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleEditProject}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleEditClick(project)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteProject(project.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-2 font-medium">Avant</p>
                <div className="relative h-48 w-full overflow-hidden rounded-md">
                  <Image
                    src={project.before || "/placeholder.svg"}
                    alt={`${project.title} avant`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 font-medium">Après</p>
                <div className="relative h-48 w-full overflow-hidden rounded-md">
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
        ))}
      </div>
    </div>
  )
}
