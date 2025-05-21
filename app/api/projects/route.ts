import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// Mock data - in a real app, this would come from a database
const projects = [
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

export async function GET() {
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, description, before, after } = body

    // Validate required fields
    if (!title || !description || !before || !after) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create new project
    const newProject = {
      id: projects.length > 0 ? Math.max(...projects.map((p) => p.id)) + 1 : 1,
      title,
      description,
      before,
      after,
    }

    projects.push(newProject)

    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}
