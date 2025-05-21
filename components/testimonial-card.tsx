import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  content: string
}

export default function TestimonialCard({ name, location, rating, content }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
      <div className="mb-3 flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={cn("h-5 w-5", i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600")} />
        ))}
      </div>
      <p className="text-gray-700 italic flex-grow mb-4">"{content}"</p>
      <div className="mt-auto">
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  )
}
