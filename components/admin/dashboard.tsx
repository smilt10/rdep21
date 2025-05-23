"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { 
  LayoutDashboard, 
  ImageIcon, 
  MessageSquare, 
  FileText, 
  Settings, 
  LogOut,
  ChevronRight
} from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import ProjectsManager from "@/components/admin/projects-manager"
import TestimonialsManager from "@/components/admin/testimonials-manager"
import ContentManager from "@/components/admin/content-manager"
import SettingsManager from "@/components/admin/settings-manager"
import CarouselManager from "@/components/admin/carousel-manager"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Bonjour")
    else if (hour < 18) setGreeting("Bon après-midi")
    else setGreeting("Bonsoir")
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="border-b bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              RDEP21 Administration
            </h1>
          </div>
          <Button 
            className={buttonVariants({ variant: "outline" })} 
            onClick={() => signOut({ callbackUrl: "/" })}
            size="sm"
          >
            <LogOut className="mr-2 h-4 w-4 text-red-500" />
            <span className="text-red-500 font-medium">Déconnexion</span>
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md z-10">
          <div className="p-6 border-b border-gray-100">
            <p className="text-sm text-gray-500">{greeting},</p>
            <p className="font-medium text-gray-800">Administrateur</p>
          </div>
          <nav className="p-4 space-y-1">
            <Link
              href="#dashboard"
              className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
                activeTab === "dashboard" 
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                  : "hover:bg-blue-50 text-gray-700"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <div className="flex items-center">
                <LayoutDashboard className={`mr-3 h-5 w-5 ${activeTab === "dashboard" ? "text-white" : "text-blue-500"}`} />
                <span className="font-medium">Tableau de bord</span>
              </div>
              {activeTab === "dashboard" && <ChevronRight className="h-4 w-4 text-white" />}
            </Link>
            
            <Link
              href="#projects"
              className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
                activeTab === "projects" 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md" 
                  : "hover:bg-purple-50 text-gray-700"
              }`}
              onClick={() => setActiveTab("projects")}
            >
              <div className="flex items-center">
                <ImageIcon className={`mr-3 h-5 w-5 ${activeTab === "projects" ? "text-white" : "text-purple-500"}`} />
                <span className="font-medium">Réalisations</span>
              </div>
              {activeTab === "projects" && <ChevronRight className="h-4 w-4 text-white" />}
            </Link>
            
            <Link
              href="#testimonials"
              className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
                activeTab === "testimonials" 
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md" 
                  : "hover:bg-amber-50 text-gray-700"
              }`}
              onClick={() => setActiveTab("testimonials")}
            >
              <div className="flex items-center">
                <MessageSquare className={`mr-3 h-5 w-5 ${activeTab === "testimonials" ? "text-white" : "text-amber-500"}`} />
                <span className="font-medium">Témoignages</span>
              </div>
              {activeTab === "testimonials" && <ChevronRight className="h-4 w-4 text-white" />}
            </Link>
            
            <Link
              href="#content"
              className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
                activeTab === "content" 
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md" 
                  : "hover:bg-emerald-50 text-gray-700"
              }`}
              onClick={() => setActiveTab("content")}
            >
              <div className="flex items-center">
                <FileText className={`mr-3 h-5 w-5 ${activeTab === "content" ? "text-white" : "text-emerald-500"}`} />
                <span className="font-medium">Contenu</span>
              </div>
              {activeTab === "content" && <ChevronRight className="h-4 w-4 text-white" />}
            </Link>
            
            <Link
              href="#carousel"
              className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
                activeTab === "carousel" 
                  ? "bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-md" 
                  : "hover:bg-rose-50 text-gray-700"
              }`}
              onClick={() => setActiveTab("carousel")}
            >
              <div className="flex items-center">
                <ImageIcon className={`mr-3 h-5 w-5 ${activeTab === "carousel" ? "text-white" : "text-rose-500"}`} />
                <span className="font-medium">Carousel</span>
              </div>
              {activeTab === "carousel" && <ChevronRight className="h-4 w-4 text-white" />}
            </Link>
            
            <Link
              href="#settings"
              className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
                activeTab === "settings" 
                  ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-md" 
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <div className="flex items-center">
                <Settings className={`mr-3 h-5 w-5 ${activeTab === "settings" ? "text-white" : "text-gray-500"}`} />
                <span className="font-medium">Paramètres</span>
              </div>
              {activeTab === "settings" && <ChevronRight className="h-4 w-4 text-white" />}
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value="dashboard" className="mt-0">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tableau de bord
                </h2>
                <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                  <span className="text-sm text-gray-500">Dernière connexion: </span>
                  <span className="text-sm font-medium">Aujourd'hui à 10:30</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <DashboardCard
                  title="Réalisations"
                  count={12}
                  icon={<ImageIcon className="h-8 w-8 text-white" />}
                  onClick={() => setActiveTab("projects")}
                  color="from-purple-500 to-pink-500"
                  description="Projets réalisés"
                />
                <DashboardCard
                  title="Témoignages"
                  count={24}
                  icon={<MessageSquare className="h-8 w-8 text-white" />}
                  onClick={() => setActiveTab("testimonials")}
                  color="from-amber-500 to-orange-500"
                  description="Avis clients"
                />
                <DashboardCard
                  title="Images Carousel"
                  count={7}
                  icon={<ImageIcon className="h-8 w-8 text-white" />}
                  onClick={() => setActiveTab("carousel")}
                  color="from-rose-500 to-red-500"
                  description="Photos en rotation"
                />
              </div>
              
              <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Activité récente</h3>
                <div className="space-y-3">
                  {[
                    { action: "Ajout d'une réalisation", time: "Il y a 2 heures", user: "Admin" },
                    { action: "Modification du carousel", time: "Hier à 15:45", user: "Admin" },
                    { action: "Ajout d'un témoignage", time: "23/05/2025", user: "Admin" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-medium text-gray-800">{item.action}</p>
                        <p className="text-sm text-gray-500">{item.time}</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{item.user}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-1 mb-6 shadow-md">
                <div className="bg-white rounded-md p-4">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Gestion des Réalisations
                  </h2>
                </div>
              </div>
              <ProjectsManager />
            </TabsContent>

            <TabsContent value="testimonials" className="mt-0">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-1 mb-6 shadow-md">
                <div className="bg-white rounded-md p-4">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    Gestion des Témoignages
                  </h2>
                </div>
              </div>
              <TestimonialsManager />
            </TabsContent>

            <TabsContent value="content" className="mt-0">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-1 mb-6 shadow-md">
                <div className="bg-white rounded-md p-4">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Gestion du Contenu
                  </h2>
                </div>
              </div>
              <ContentManager />
            </TabsContent>

            <TabsContent value="carousel" className="mt-0">
              <div className="bg-gradient-to-r from-rose-500 to-red-500 rounded-lg p-1 mb-6 shadow-md">
                <div className="bg-white rounded-md p-4">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">
                    Gestion du Carousel
                  </h2>
                </div>
              </div>
              <CarouselManager />
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg p-1 mb-6 shadow-md">
                <div className="bg-white rounded-md p-4">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
                    Paramètres
                  </h2>
                </div>
              </div>
              <SettingsManager />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

interface DashboardCardProps {
  title: string
  count: number
  icon: React.ReactNode
  onClick: () => void
  color: string
  description: string
}

function DashboardCard({ title, count, icon, onClick, color, description }: DashboardCardProps) {
  return (
    <div
      className="cursor-pointer rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300"
      onClick={onClick}
    >
      <div className={`bg-gradient-to-r ${color} p-6`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <p className="text-4xl font-bold text-white mt-2">{count}</p>
            <p className="text-xs text-white/80 mt-1">{description}</p>
          </div>
          <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">{icon}</div>
        </div>
      </div>
      <div className="bg-white p-3 text-center">
        <span className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Gérer {title.toLowerCase()} →
        </span>
      </div>
    </div>
  )
}
