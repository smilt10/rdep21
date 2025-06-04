"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Plus, Trash2, Edit, Settings, Palette, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

interface Service {
  id: string
  title: string
  description: string
  link: string
  icon: string
  order: number
  createdAt: string
  updatedAt: string
}

const iconColors = [
  { value: "red", label: "Rouge", color: "bg-red-500" },
  { value: "blue", label: "Bleu", color: "bg-blue-500" },
  { value: "green", label: "Vert", color: "bg-green-500" },
  { value: "yellow", label: "Jaune", color: "bg-yellow-500" },
  { value: "purple", label: "Violet", color: "bg-purple-500" },
  { value: "orange", label: "Orange", color: "bg-orange-500" },
  { value: "pink", label: "Rose", color: "bg-pink-500" },
  { value: "indigo", label: "Indigo", color: "bg-indigo-500" },
]

export default function ServicesManager() {
  const [services, setServices] = useState<Service[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentService, setCurrentService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  // Form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [link, setLink] = useState("")
  const [icon, setIcon] = useState("blue")

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services")
      if (response.ok) {
        const data = await response.json()
        setServices(data)
      } else {
        toast({
          title: "Erreur",
          description: "Impossible de charger les services",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching services:", error)
      toast({
        title: "Erreur",
        description: "Erreur de connexion",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleAddService = async () => {
    if (!title.trim() || !description.trim()) {
      toast({
        title: "Erreur",
        description: "Le titre et la description sont requis",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          link: link.trim() || "#",
          icon,
        }),
      })

      if (response.ok) {
        const newService = await response.json()
        setServices([...services, newService])
        resetForm()
        setIsAddDialogOpen(false)
        toast({
          title: "Succès",
          description: "Service ajouté avec succès",
        })
      } else {
        const error = await response.json()
        toast({
          title: "Erreur",
          description: error.error || "Impossible d'ajouter le service",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error adding service:", error)
      toast({
        title: "Erreur",
        description: "Erreur de connexion",
        variant: "destructive",
      })
    }
  }

  const handleEditService = async () => {
    if (!currentService || !title.trim() || !description.trim()) {
      toast({
        title: "Erreur",
        description: "Le titre et la description sont requis",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch(`/api/services/${currentService.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          link: link.trim() || "#",
          icon,
          order: currentService.order,
        }),
      })

      if (response.ok) {
        const updatedService = await response.json()
        setServices(services.map(service => 
          service.id === currentService.id ? updatedService : service
        ))
        resetForm()
        setIsEditDialogOpen(false)
        toast({
          title: "Succès",
          description: "Service modifié avec succès",
        })
      } else {
        const error = await response.json()
        toast({
          title: "Erreur",
          description: error.error || "Impossible de modifier le service",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error updating service:", error)
      toast({
        title: "Erreur",
        description: "Erreur de connexion",
        variant: "destructive",
      })
    }
  }

  const handleDeleteService = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce service ?")) {
      return
    }

    try {
      const response = await fetch(`/api/services/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setServices(services.filter(service => service.id !== id))
        toast({
          title: "Succès",
          description: "Service supprimé avec succès",
        })
      } else {
        const error = await response.json()
        toast({
          title: "Erreur",
          description: error.error || "Impossible de supprimer le service",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error deleting service:", error)
      toast({
        title: "Erreur",
        description: "Erreur de connexion",
        variant: "destructive",
      })
    }
  }

  const handleEditClick = (service: Service) => {
    setCurrentService(service)
    setTitle(service.title)
    setDescription(service.description)
    setLink(service.link)
    setIcon(service.icon)
    setIsEditDialogOpen(true)
  }

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setLink("")
    setIcon("blue")
    setCurrentService(null)
  }

  const getIconColorClass = (colorName: string) => {
    const colorMap: { [key: string]: string } = {
      red: "bg-red-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      yellow: "bg-yellow-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      pink: "bg-pink-500",
      indigo: "bg-indigo-500",
    }
    return colorMap[colorName] || "bg-blue-500"
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center shadow-md">
            <Settings className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            Gestion des Services
          </h2>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-md border-0">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent font-bold">
                Ajouter un nouveau service
              </DialogTitle>
              <DialogDescription>
                Remplissez les informations ci-dessous pour ajouter un nouveau service.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-medium text-gray-700">Titre</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Peinture"
                  className="border-gray-200 focus:border-cyan-300 focus:ring-cyan-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="font-medium text-gray-700">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez le service..."
                  rows={3}
                  className="border-gray-200 focus:border-cyan-300 focus:ring-cyan-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="link" className="font-medium text-gray-700">Lien (optionnel)</Label>
                <Input
                  id="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Ex: /activites#peinture"
                  className="border-gray-200 focus:border-cyan-300 focus:ring-cyan-200"
                />
              </div>
              <div className="grid gap-2">
                <Label className="font-medium text-gray-700">Couleur de l'icône</Label>
                <Select value={icon} onValueChange={setIcon}>
                  <SelectTrigger className="border-gray-200 focus:border-cyan-300 focus:ring-cyan-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {iconColors.map((color) => (
                      <SelectItem key={color.value} value={color.value}>
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full ${color.color}`} />
                          {color.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="border-gray-200 hover:bg-gray-50 hover:text-gray-900">
                Annuler
              </Button>
              <Button 
                onClick={handleAddService}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0"
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
          <h3 className="text-lg font-medium text-gray-800">Statistiques des services</h3>
          <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">Services</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-cyan-50 to-white p-4 rounded-lg border border-cyan-100">
            <p className="text-sm text-gray-500 mb-1">Total de services</p>
            <p className="text-2xl font-bold text-gray-900">{services.length}</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-white p-4 rounded-lg border border-cyan-100">
            <p className="text-sm text-gray-500 mb-1">Services actifs</p>
            <p className="text-lg font-medium text-gray-900">{services.length}</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-white p-4 rounded-lg border border-cyan-100">
            <p className="text-sm text-gray-500 mb-1">Dernière mise à jour</p>
            <p className="text-lg font-medium text-gray-900">Aujourd'hui</p>
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent font-bold">
              Modifier le service
            </DialogTitle>
            <DialogDescription>Modifiez les informations de ce service.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-title" className="font-medium text-gray-700">Titre</Label>
              <Input 
                id="edit-title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className="border-gray-200 focus:border-cyan-300 focus:ring-cyan-200"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-description" className="font-medium text-gray-700">Description</Label>
              <Textarea
                id="edit-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="border-gray-200 focus:border-cyan-300 focus:ring-cyan-200"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-link" className="font-medium text-gray-700">Lien</Label>
              <Input 
                id="edit-link" 
                value={link} 
                onChange={(e) => setLink(e.target.value)} 
                className="border-gray-200 focus:border-cyan-300 focus:ring-cyan-200"
              />
            </div>
            <div className="grid gap-2">
              <Label className="font-medium text-gray-700">Couleur de l'icône</Label>
              <Select value={icon} onValueChange={setIcon}>
                <SelectTrigger className="border-gray-200 focus:border-cyan-300 focus:ring-cyan-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {iconColors.map((color) => (
                    <SelectItem key={color.value} value={color.value}>
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full ${color.color}`} />
                        {color.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              Annuler
            </Button>
            <Button 
              onClick={handleEditService}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0"
            >
              Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Services List */}
      <div className="space-y-6">
        {services.map((service) => (
          <div key={service.id} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`h-12 w-12 rounded-lg ${getIconColorClass(service.icon)} flex items-center justify-center shadow-sm`}>
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  <p className="text-sm text-gray-500">Ordre: {service.order}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleEditClick(service)}
                  className="border-gray-200 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDeleteService(service.id)}
                  className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <p className="mb-4 text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">
              {service.description}
            </p>
            
            {service.link && service.link !== "#" && (
              <div className="flex items-center gap-2 text-sm text-cyan-600">
                <LinkIcon className="h-4 w-4" />
                <span>{service.link}</span>
              </div>
            )}
            
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>Créé le: {new Date(service.createdAt).toLocaleDateString('fr-FR')}</span>
              <span>Modifié le: {new Date(service.updatedAt).toLocaleDateString('fr-FR')}</span>
            </div>
          </div>
        ))}
        
        {services.length === 0 && (
          <div className="text-center py-12">
            <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun service</h3>
            <p className="text-gray-500 mb-4">Commencez par ajouter votre premier service.</p>
            <Button 
              onClick={() => setIsAddDialogOpen(true)}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un service
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
