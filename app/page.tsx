import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import ClientsSection from "@/components/home/clients-section"
import ServicesSection from "@/components/home/services-section"
import TechnologiesSection from "@/components/home/technologies-section"
import PartnersSection from "@/components/home/partners-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CtaSection from "@/components/home/cta-section"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "JUSTECH | Software Engineering in Beirut",
  ogTitle: "JUSTECH | Software Engineering in Beirut",
  description:
    "Software engineering for businesses in Lebanon and MENA. We scale revenue, automate operations, and modernize the technology underneath.",
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <TechnologiesSection />
      <PartnersSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}

