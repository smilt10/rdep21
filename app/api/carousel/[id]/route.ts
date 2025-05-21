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

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const image = carouselImages.find((img) => img.id === id)

  if (!image) {
    return NextResponse.json({ error: "Carousel image not found" }, { status: 404 })
  }

  return NextResponse.json(image)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const id = Number.parseInt(params.id)
  const imageIndex = carouselImages.findIndex((img) => img.id === id)

  if (imageIndex === -1) {
    return NextResponse.json({ error: "Carousel image not found" }, { status: 404 })
  }

  try {
    const body = await request.json()
    const { src, alt } = body

    // Validate required fields
    if (!src) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Update carousel image
    carouselImages[imageIndex] = {
      ...carouselImages[imageIndex],
      src,
      alt: alt || carouselImages[imageIndex].alt,
    }

    return NextResponse.json(carouselImages[imageIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update carousel image" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const id = Number.parseInt(params.id)
  const imageIndex = carouselImages.findIndex((img) => img.id === id)

  if (imageIndex === -1) {
    return NextResponse.json({ error: "Carousel image not found" }, { status: 404 })
  }

  // Remove carousel image
  carouselImages = carouselImages.filter((img) => img.id !== id)

  return NextResponse.json({ success: true })
}
