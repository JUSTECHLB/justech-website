import { Suspense } from "react"
import RevenueHero from "@/components/revenue/revenue-hero"
import UniqueSellingPoints from "@/components/revenue/unique-selling-points"
import Capabilities from "@/components/revenue/capabilities"
import StrategizingGrowth from "@/components/revenue/strategizing-growth"
import ImplementationProcess from "@/components/revenue/implementation-process"
import UniqueApproach from "@/components/revenue/unique-approach"
import ValueProposition from "@/components/revenue/value-proposition"
import Methodology from "@/components/revenue/methodology"
import CaseStudies from "@/components/revenue/case-studies"
import CtaSection from "@/components/revenue/cta-section"
import Loading from "@/app/loading"

export default function RevenueScalingPage() {
  return (
    <main className="min-h-screen bg-dark text-white overflow-hidden">
      <Suspense fallback={<Loading />}>
        <RevenueHero />
        <Capabilities />
        <UniqueSellingPoints />
        <StrategizingGrowth />
        <ImplementationProcess />
        <UniqueApproach />
        <ValueProposition />
        <Methodology />
        <CaseStudies />
        <CtaSection />
      </Suspense>
    </main>
  )
}

