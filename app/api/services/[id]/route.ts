import { NextRequest, NextResponse } from "next/server"

// This would be imported from the main route file in a real app
// For now, we'll use a simple in-memory storage approach
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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = services.find(s => s.id === params.id)
    
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    return NextResponse.json(service)
  } catch (error) {
    console.error("Error fetching service:", error)
    return NextResponse.json({ error: "Failed to fetch service" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { title, description, link, icon, order } = body

    const serviceIndex = services.findIndex(s => s.id === params.id)
    
    if (serviceIndex === -1) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 })
    }

    services[serviceIndex] = {
      ...services[serviceIndex],
      title,
      description,
      link: link || "#",
      icon: icon || "blue",
      order: order || services[serviceIndex].order,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(services[serviceIndex])
  } catch (error) {
    console.error("Error updating service:", error)
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const serviceIndex = services.findIndex(s => s.id === params.id)
    
    if (serviceIndex === -1) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    const deletedService = services[serviceIndex]
    services.splice(serviceIndex, 1)

    // Reorder remaining services
    services = services.map((service, index) => ({
      ...service,
      order: index + 1,
      updatedAt: new Date().toISOString(),
    }))

    return NextResponse.json(deletedService)
  } catch (error) {
    console.error("Error deleting service:", error)
    return NextResponse.json({ error: "Failed to delete service" }, { status: 500 })
  }
}
