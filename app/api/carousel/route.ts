import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// Mock data - in a real app, this would come from a database
let carouselImages = [
  {
    id: 1,
    src: "/images/couple-1.png",
    alt: "Rénovation et transition énergétique 1",
  },
  {
    id: 2,
    src: "/images/couple-keys.png",
    alt: "Rénovation et transition énergétique 2",
  },
  {
    id: 3,
    src: "/images/couple-2.png",
    alt: "Rénovation et transition énergétique 3",
  },
  {
    id: 4,
    src: "/images/couple-doorway.png",
    alt: "Rénovation et transition énergétique 4",
  },
  {
    id: 5,
    src: "/images/couple-3.png",
    alt: "Rénovation et transition énergétique 5",
  },
  {
    id: 6,
    src: "/images/couple-garden.jpeg",
    alt: "Rénovation et transition énergétique 6",
  },
  {
    id: 7,
    src: "/images/couple-4.png",
    alt: "Rénovation et transition énergétique 7",
  },
]

export async function GET() {
  return NextResponse.json(carouselImages)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { src, alt } = body

    // Validate required fields
    if (!src) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create new carousel image
    const newImage = {
      id: carouselImages.length > 0 ? Math.max(...carouselImages.map((img) => img.id)) + 1 : 1,
      src,
      alt: alt || `Rénovation et transition énergétique ${carouselImages.length + 1}`,
    }

    carouselImages.push(newImage)

    return NextResponse.json(newImage, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create carousel image" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()

    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request body, expected array" }, { status: 400 })
    }

    // Update carousel images order
    carouselImages = body.map((img, index) => ({
      ...img,
      id: index + 1,
    }))

    return NextResponse.json(carouselImages)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update carousel images order" }, { status: 500 })
  }
}
