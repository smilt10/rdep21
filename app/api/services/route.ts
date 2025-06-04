import { NextRequest, NextResponse } from "next/server"

// In-memory storage for services (in a real app, this would be a database)
let services = [
  {
    id: "1",
    title: "Peinture",
    description: "Peinture intérieure et extérieure avec une large gamme de finitions et de couleurs.",
    link: "/activites#peinture",
    icon: "red",
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Revêtements Muraux",
    description: "Installation de papier peint, tissu mural et autres revêtements décoratifs.",
    link: "/activites#revetements-muraux",
    icon: "blue",
    order: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Revêtements de Sol",
    description: "Installation de parquet, carrelage, linoléum et autres revêtements de sol.",
    link: "/activites#revetements-sol",
    icon: "green",
    order: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Plâtrerie",
    description: "Travaux de plâtrerie, cloisons, doublage et isolation thermique et acoustique.",
    link: "/activites#platrerie",
    icon: "yellow",
    order: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Rénovation Complète",
    description: "Rénovation complète d'intérieur pour particuliers et professionnels.",
    link: "/activites#renovation-complete",
    icon: "purple",
    order: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Façades",
    description: "Rénovation et ravalement de façades pour redonner vie à l'extérieur de votre bâtiment.",
    link: "/activites#facades",
    icon: "orange",
    order: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export async function GET() {
  try {
    // Sort services by order
    const sortedServices = services.sort((a, b) => a.order - b.order)
    return NextResponse.json(sortedServices)
  } catch (error) {
    console.error("Error fetching services:", error)
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, link, icon } = body

    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 })
    }

    const newService = {
      id: Date.now().toString(),
      title,
      description,
      link: link || "#",
      icon: icon || "blue",
      order: services.length + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    services.push(newService)
    return NextResponse.json(newService, { status: 201 })
  } catch (error) {
    console.error("Error creating service:", error)
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 })
  }
}
