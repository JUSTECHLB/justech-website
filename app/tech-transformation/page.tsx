import type { Metadata } from "next"
import TechHero from "@/components/tech/tech-hero"
import TechCapabilities from "@/components/tech/tech-capabilities"
import TransformationApproach from "@/components/tech/transformation-approach"
import TechUsp from "@/components/tech/tech-usp"
import TechCaseStudies from "@/components/tech/tech-case-studies"
import TechCta from "@/components/tech/tech-cta"
import PillarFit from "@/components/pillar/pillar-fit"
import { pageMetadata } from "@/lib/seo"
import JsonLd from "@/components/seo/json-ld"
import { serviceSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata({
  title: "Tech Transformation",
  description:
    "AWS migration, legacy modernization, and custom application development for systems that have outgrown their foundations.",
  path: "/tech-transformation",
});

export default function TechTransformationPage() {
  return (
    <main className="pt-24 overflow-hidden bg-dark">
      <JsonLd
      	schema={serviceSchema({
      		name: "Tech Transformation",
      		description:
      			"AWS migration, legacy modernization, and custom application development for systems that have outgrown their foundations.",
      		path: "/tech-transformation",
      		serviceType: "Cloud migration and legacy modernization",
      	})}
      	id="schema-service"
      />
      <TechHero />
      {/*
        TODO (needs input from JUSTECH): no case study exists for this pillar yet.
        It carries the largest deals and currently has zero evidence behind it.
        Add a `proof` prop below once there is a real project to name.
      */}
      <PillarFit
        problems={[
          "The system slows down or breaks when traffic spikes",
          "Nobody left at the company understands the original code",
          "Deployments are manual and everyone holds their breath",
          "You have backups but you've never tested restoring one",
          "A client asked about your security posture and you couldn't answer",
        ]}
        services={[
          {
            label: "AWS cloud migration and architecture",
            href: "/services/aws-devops",
          },
          { label: "DevOps and CI/CD", href: "/services/aws-devops" },
          { label: "Legacy modernization and replatforming" },
          { label: "Web and mobile application development" },
          { label: "Microservices architecture" },
          {
            label: "Machine learning model training and deployment",
            href: "/ai",
          },
          { label: "MLOps", href: "/ai" },
          { label: "Security hardening and disaster recovery" },
          { label: "Performance engineering" },
          { label: "Technical due diligence" },
          { label: "Technical consultation", href: "/consultation" },
          { label: "Support retainers" },
        ]}
        metrics={[
          "Uptime",
          "Deploy frequency",
          "Load capacity",
          "Infrastructure cost",
          "Security posture",
        ]}
      />
      <TechCapabilities />
      <TransformationApproach />
      <TechUsp />
      <TechCaseStudies />
      <TechCta />
    </main>
  )
}

