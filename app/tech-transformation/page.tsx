import type { Metadata } from "next"
import TechHero from "@/components/tech/tech-hero"
import TechCapabilities from "@/components/tech/tech-capabilities"
import TransformationApproach from "@/components/tech/transformation-approach"
import TechUsp from "@/components/tech/tech-usp"
import TechCaseStudies from "@/components/tech/tech-case-studies"
import TechCta from "@/components/tech/tech-cta"

export const metadata: Metadata = {
  title: "Tech Transformation | JusTech",
  description:
    "Accelerate your business with our comprehensive tech transformation services. Modernize legacy systems, implement cloud solutions, and leverage AI/ML technologies.",
}

export default function TechTransformationPage() {
  return (
    <main className="pt-24 overflow-hidden bg-dark">
      <TechHero />
      <TechCapabilities />
      <TransformationApproach />
      <TechUsp />
      <TechCaseStudies />
      <TechCta />
    </main>
  )
}

