import type { Metadata } from "next"
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
import PillarFit from "@/components/pillar/pillar-fit"
import Loading from "@/app/loading"
import { pageMetadata } from "@/lib/seo"
import JsonLd from "@/components/seo/json-ld"
import { serviceSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata({
  title: "Revenue Scaling",
  description:
    "Websites, SEO, and e-commerce built to produce enquiries, not just traffic. Measured in leads and conversion, not impressions.",
  path: "/revenue-scaling",
});

export default function RevenueScalingPage() {
  return (
    <main className="min-h-screen bg-dark text-white overflow-hidden">
      <JsonLd
      	schema={serviceSchema({
      		name: "Revenue Scaling",
      		description:
      			"Websites, SEO, and e-commerce built to produce enquiries, not just traffic. Measured in leads and conversion, not impressions.",
      		path: "/revenue-scaling",
      		serviceType: "Website design, SEO, and e-commerce development",
      	})}
      	id="schema-service"
      />
      <Suspense fallback={<Loading />}>
        <RevenueHero />
        <PillarFit
          problems={[
            "Traffic comes in, enquiries don't",
            "You're invisible on Google for the terms customers actually search",
            "The site looks good but nobody can tell what you do in five seconds",
            "No idea which channel produced your last ten customers",
            "Carts get abandoned and you don't know where",
          ]}
          services={[
            { label: "Website design", href: "/services/web-design" },
            { label: "Website development", href: "/services/web-development" },
            { label: "SEO optimization", href: "/services/seo" },
            { label: "E-commerce" },
            { label: "CRM and analytics setup" },
            { label: "AI chatbots and lead capture", href: "/ai" },
            { label: "Lead scoring", href: "/ai" },
          ]}
          metrics={[
            "Qualified enquiries per month",
            "Conversion rate",
            "Organic traffic for terms that convert, not vanity keywords",
            "Revenue per visitor",
          ]}
          proof={{
            client: "AGS Solutions:",
            body: "business website scoped, built, and delivered in a short window, with requirements captured accurately the first time.",
          }}
        />
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

