import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  company: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, company, quote, rating }: TestimonialCardProps) {
  return (
    <div className="gradient-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group">
      <div className="flex mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
        ))}
      </div>
      <p className="text-gray-300 mb-8 italic group-hover:text-white">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-dark-lighter border border-blue/20 flex items-center justify-center">
          <span className="text-lg font-bold text-blue-light">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold group-hover:text-white">{name}</p>
          <p className="text-sm text-gray-400 group-hover:text-gray-200">{company}</p>
        </div>
      </div>
    </div>
  )
}

