"use client"

import { useState } from "react"
import type { ReactElement } from "react"
import { User, Lock, Settings, Shield, Bell, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

export default function SettingsManager(): ReactElement {
  const [activeTab, setActiveTab] = useState("account")
  const [showPassword, setShowPassword] = useState(false)

  // Form state
  const [name, setName] = useState("Admin RDEP21")
  const [email, setEmail] = useState("admin@rdep21.com")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSaveAccount = () => {
    // In a real app, you would update the user account
    toast({
      title: "Compte mis à jour",
      description: "Les informations de votre compte ont été mises à jour avec succès.",
    })
  }

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas.",
        variant: "destructive",
      })
      return
    }

    if (newPassword.length < 8) {
      toast({
        title: "Erreur",
        description: "Le mot de passe doit contenir au moins 8 caractères.",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would update the user password
    toast({
      title: "Mot de passe modifié",
      description: "Votre mot de passe a été modifié avec succès.",
    })

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center shadow-md">
            <Settings className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
            Paramètres
          </h2>
        </div>
      </div>

      <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">Informations du compte</h3>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Administrateur</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <User className="h-4 w-4 text-gray-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">Nom d'utilisateur</p>
            </div>
            <p className="text-base font-medium text-gray-900">Admin RDEP21</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <Bell className="h-4 w-4 text-gray-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">Notifications</p>
            </div>
            <p className="text-base font-medium text-gray-900">Activées</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <Shield className="h-4 w-4 text-gray-500 mr-2" />
              <p className="text-sm font-medium text-gray-700">Dernière connexion</p>
            </div>
            <p className="text-base font-medium text-gray-900">Aujourd'hui à 10:30</p>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2 bg-gray-50 p-1 rounded-lg">
          <TabsTrigger 
            value="account" 
            className={`rounded-md transition-all duration-200 ${
              activeTab === "account" 
                ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-md" 
                : "data-[state=active]:bg-white data-[state=active]:text-gray-700 data-[state=active]:shadow-sm"
            }`}
          >
            <User className="h-4 w-4 mr-2" />
            Compte
          </TabsTrigger>
          <TabsTrigger 
            value="password" 
            className={`rounded-md transition-all duration-200 ${
              activeTab === "password" 
                ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-md" 
                : "data-[state=active]:bg-white data-[state=active]:text-gray-700 data-[state=active]:shadow-sm"
            }`}
          >
            <Lock className="h-4 w-4 mr-2" />
            Mot de passe
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-6">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center shadow-sm mr-3">
                <User className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Informations du compte</h3>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="font-medium text-gray-700">Nom</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="font-medium text-gray-700">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                />
              </div>
            </div>
          </div>

          <Button 
            onClick={handleSaveAccount}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-md border-0"
          >
            <User className="mr-2 h-4 w-4" />
            Enregistrer les modifications
          </Button>
        </TabsContent>

        <TabsContent value="password" className="space-y-6">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center shadow-sm mr-3">
                <Lock className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Changer le mot de passe</h3>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="currentPassword" className="font-medium text-gray-700">Mot de passe actuel</Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="border-gray-200 focus:border-gray-400 focus:ring-gray-300 pr-10"
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="newPassword" className="font-medium text-gray-700">Nouveau mot de passe</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border-gray-200 focus:border-gray-400 focus:ring-gray-300 pr-10"
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {newPassword && (
                  <div className="mt-1">
                    <div className="flex items-center space-x-1">
                      <div className={`h-1 flex-1 rounded-full ${newPassword.length >= 8 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${/[A-Z]/.test(newPassword) ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${/[0-9]/.test(newPassword) ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${/[^A-Za-z0-9]/.test(newPassword) ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Le mot de passe doit contenir au moins 8 caractères</p>
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword" className="font-medium text-gray-700">Confirmer le mot de passe</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border-gray-200 focus:border-gray-400 focus:ring-gray-300 pr-10"
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {confirmPassword && newPassword !== confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">Les mots de passe ne correspondent pas</p>
                )}
              </div>
            </div>
          </div>

          <Button 
            onClick={handleChangePassword}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-md border-0"
          >
            <Lock className="mr-2 h-4 w-4" />
            Changer le mot de passe
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
