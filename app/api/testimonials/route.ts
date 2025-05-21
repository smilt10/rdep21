import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// Mock data - in a real app, this would come from a database
const testimonials = [
  {
    id: 1,
    content:
      "RDEP21 a complètement transformé notre salon. L'équipe a été professionnelle du début à la fin, respectant les délais et le budget. La qualité du travail est exceptionnelle!",
    name: "Marie Dupont",
    location: "Dijon",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Nous avons fait appel à RDEP21 pour la rénovation complète de notre appartement. Le résultat est à la hauteur de nos attentes. Je recommande vivement leurs services.",
    name: "Thomas Laurent",
    location: "Beaune",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Service client impeccable et travail de qualité. L'équipe a su nous conseiller sur les meilleures solutions pour notre projet de rénovation de cuisine.",
    name: "Sophie Martin",
    location: "Chenôve",
    rating: 4,
  },
]

export async function GET() {
  return NextResponse.json(testimonials)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and is an admin
  if (!session || !session.user.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { name, location, content, rating } = body

    // Validate required fields
    if (!name || !location || !content || !rating) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create new testimonial
    const newTestimonial = {
      id: testimonials.length > 0 ? Math.max(...testimonials.map((t) => t.id)) + 1 : 1,
      name,
      location,
      content,
      rating: Number(rating),
    }

    testimonials.push(newTestimonial)

    return NextResponse.json(newTestimonial, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 })
  }
}
