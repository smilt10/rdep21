/* "use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

// Define error messages
const ERROR_MESSAGES = {
  invalidCredentials: "Identifiants invalides. Veuillez réessayer.",
  serverError: "Une erreur est survenue lors de la connexion. Veuillez réessayer.",
  emptyFields: "Veuillez remplir tous les champs.",
  invalidEmail: "Veuillez entrer une adresse email valide."
}

// Form state interface
interface FormState {
  email: string
  password: string
  isValid: boolean
  emailError?: string
  passwordError?: string
}

export default function AdminLoginPage() {
  // Consolidated form state
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    isValid: false
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { status } = useSession()
  const searchParams = useSearchParams()

  // Validate form
  const validateForm = useCallback(() => {
    let isValid = true
    const updatedState = { ...formState }
    
    // Email validation
    if (!formState.email) {
      updatedState.emailError = "Email requis"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      updatedState.emailError = ERROR_MESSAGES.invalidEmail
      isValid = false
    } else {
      updatedState.emailError = undefined
    }
    
    // Password validation
    if (!formState.password) {
      updatedState.passwordError = "Mot de passe requis"
      isValid = false
    } else {
      updatedState.passwordError = undefined
    }
    
    updatedState.isValid = isValid
    setFormState(updatedState)
    return isValid
  }, [formState])

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // If already authenticated, redirect to admin dashboard
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/admin")
    }
  }, [status, router])

  // Check for error in URL params
  useEffect(() => {
    const errorParam = searchParams.get("error")
    if (errorParam) {
      setError(ERROR_MESSAGES.invalidCredentials)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form before submission
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)
    setError("")

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formState.email,
        password: formState.password,
      })

      if (result?.error) {
        setError(ERROR_MESSAGES.invalidCredentials)
        setIsLoading(false)
        return
      }

      // Successful login - redirect to admin dashboard
      router.push("/admin")
      router.refresh()
    } catch (error) {
      console.error("Login error:", error)
      setError(ERROR_MESSAGES.serverError)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Administration RDEP21</CardTitle>
          <CardDescription>Connectez-vous pour accéder au tableau de bord</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm font-medium text-red-500">
              <AlertCircle className="h-4 w-4" />
              <p>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleInputChange}
                onBlur={validateForm}
                placeholder="admin@rdep21.com"
                aria-invalid={!!formState.emailError}
                aria-describedby={formState.emailError ? "email-error" : undefined}
                className={formState.emailError ? "border-red-500" : ""}
                autoComplete="username"
                required
              />
              {formState.emailError && (
                <p id="email-error" className="mt-1 text-xs text-red-500">
                  {formState.emailError}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleInputChange}
                onBlur={validateForm}
                aria-invalid={!!formState.passwordError}
                aria-describedby={formState.passwordError ? "password-error" : undefined}
                className={formState.passwordError ? "border-red-500" : ""}
                autoComplete="current-password"
                required
              />
              {formState.passwordError && (
                <p id="password-error" className="mt-1 text-xs text-red-500">
                  {formState.passwordError}
                </p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
 */

// app/admin/login/page.tsx
"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })

      if (result?.error) {
        setError("Identifiants invalides")
        setIsLoading(false)
        return
      }

      router.push("/admin")
      router.refresh()
    } catch (error) {
      setError("Une erreur est survenue")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Administration RDEP21</CardTitle>
          <CardDescription>Connectez-vous pour accéder au tableau de bord</CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="mb-4 text-sm font-medium text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@rdep21.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}