import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// Mock data - in a real app, this would come from a database
const siteContent = {
  home: {
    heroTitle: "Réussissez la transition énergétique et la transformation de votre habitat",
    heroSubtitle:
      "Réussissez la transition énergétique et la transformation de votre habitat avec des experts certifiés",
    aboutText:
      "Fondée par un artisan qui travaille depuis plus de 30 ans, RDEP21 est une entreprise basée à Dijon spécialisée dans les travaux de design d'intérieur (neufs ou anciens).",
    aboutText2:
      "Nous nous engageons à fournir un travail de qualité, avec un suivi rigoureux et dans le respect des délais.",
  },
  contact: {
    address: "16 rue Saint Martin, 21000 DIJON",
    phone: "06.22.05.33.42",
    email: "contact@rdep21.com",
    rcs: "Dijon - 822 467 965",
    naf: "4334Z",
    rgeNumber: "E-E191032",
  },
  about: {
    historyText:
      "Fondée par un artisan qui travaille depuis plus de 30 ans, RDEP21 est une entreprise basée à Dijon spécialisée dans les travaux de design d'intérieur (neufs ou anciens).",
    historyText2:
      "Notre expertise et notre passion pour le métier nous permettent de réaliser des projets de qualité, adaptés aux besoins et aux goûts de nos clients.",
    philosophy:
      "Nous croyons que chaque espace mérite une attention particulière et un travail soigné pour révéler tout son potentiel.",
  },
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const section = searchParams.get("section")

  if (section && section in siteContent) {
    return NextResponse.json(siteContent[section as keyof typeof siteContent])
  }

  return NextResponse.json(siteContent)
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { section, content } = body

    // Validate required fields
    if (!section || !content || !(section in siteContent)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    // Update site content
    siteContent[section as keyof typeof siteContent] = {
      ...siteContent[section as keyof typeof siteContent],
      ...content,
    }

    return NextResponse.json(siteContent[section as keyof typeof siteContent])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update site content" }, { status: 500 })
  }
}
