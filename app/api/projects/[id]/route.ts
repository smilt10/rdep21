import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// Mock data - in a real app, this would come from a database
let projects = [
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
  {
    id: 4,
    title: "Rénovation de cuisine",
    before: "/images/cuisine1.jpg",
    after: "/images/cuisine2.jpg",
    description:
      "Transformation radicale d'une cuisine vétuste et délabrée en un espace propre, fonctionnel et lumineux avec nouveaux murs, sol et mobilier.",
  },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }

  return NextResponse.json(project)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const id = Number.parseInt(params.id)
  const projectIndex = projects.findIndex((p) => p.id === id)

  if (projectIndex === -1) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }

  try {
    const body = await request.json()
    const { title, description, before, after } = body

    // Validate required fields
    if (!title || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Update project
    projects[projectIndex] = {
      ...projects[projectIndex],
      title,
      description,
      before: before || projects[projectIndex].before,
      after: after || projects[projectIndex].after,
    }

    return NextResponse.json(projects[projectIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const id = Number.parseInt(params.id)
  const projectIndex = projects.findIndex((p) => p.id === id)

  if (projectIndex === -1) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }

  // Remove project
  projects = projects.filter((p) => p.id !== id)

  return NextResponse.json({ success: true })
}
