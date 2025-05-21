"use client"

import type React from "react"

import { useState } from "react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { LayoutDashboard, ImageIcon, MessageSquare, FileText, Settings, LogOut } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import ProjectsManager from "@/components/admin/projects-manager"
import TestimonialsManager from "@/components/admin/testimonials-manager"
import ContentManager from "@/components/admin/content-manager"
import SettingsManager from "@/components/admin/settings-manager"
import CarouselManager from "@/components/admin/carousel-manager"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">RDEP21 Administration</h1>
          <Button className={buttonVariants({ variant: "outline" })} onClick={() => signOut({ callbackUrl: "/" })}>
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-gray-50 p-6">
          <nav className="space-y-2">
            <Link
              href="#dashboard"
              className={`flex items-center rounded-md px-3 py-2 ${
                activeTab === "dashboard" ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Tableau de bord
            </Link>
            <Link
              href="#projects"
              className={`flex items-center rounded-md px-3 py-2 ${
                activeTab === "projects" ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("projects")}
            >
              <ImageIcon className="mr-2 h-5 w-5" />
              Réalisations
            </Link>
            <Link
              href="#testimonials"
              className={`flex items-center rounded-md px-3 py-2 ${
                activeTab === "testimonials" ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("testimonials")}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Témoignages
            </Link>
            <Link
              href="#content"
              className={`flex items-center rounded-md px-3 py-2 ${
                activeTab === "content" ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("content")}
            >
              <FileText className="mr-2 h-5 w-5" />
              Contenu
            </Link>
            <Link
              href="#carousel"
              className={`flex items-center rounded-md px-3 py-2 ${
                activeTab === "carousel" ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("carousel")}
            >
              <ImageIcon className="mr-2 h-5 w-5" />
              Carousel
            </Link>
            <Link
              href="#settings"
              className={`flex items-center rounded-md px-3 py-2 ${
                activeTab === "settings" ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="mr-2 h-5 w-5" />
              Paramètres
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value="dashboard" className="mt-0">
              <h2 className="mb-6 text-2xl font-bold">Tableau de bord</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <DashboardCard
                  title="Réalisations"
                  count={12}
                  icon={<ImageIcon className="h-8 w-8 text-primary" />}
                  onClick={() => setActiveTab("projects")}
                />
                <DashboardCard
                  title="Témoignages"
                  count={24}
                  icon={<MessageSquare className="h-8 w-8 text-primary" />}
                  onClick={() => setActiveTab("testimonials")}
                />
                <DashboardCard
                  title="Images Carousel"
                  count={7}
                  icon={<ImageIcon className="h-8 w-8 text-primary" />}
                  onClick={() => setActiveTab("carousel")}
                />
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <ProjectsManager />
            </TabsContent>

            <TabsContent value="testimonials" className="mt-0">
              <TestimonialsManager />
            </TabsContent>

            <TabsContent value="content" className="mt-0">
              <ContentManager />
            </TabsContent>

            <TabsContent value="carousel" className="mt-0">
              <CarouselManager />
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
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
}

function DashboardCard({ title, count, icon, onClick }: DashboardCardProps) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
      onClick={onClick}
    >
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-3xl font-bold text-primary">{count}</p>
      </div>
      <div className="rounded-full bg-primary/10 p-3">{icon}</div>
    </div>
  )
}
