import HeroSection from "@/components/home/hero-section"
import ClientsSection from "@/components/home/clients-section"
import ServicesSection from "@/components/home/services-section"
import TechnologiesSection from "@/components/home/technologies-section"
import PartnersSection from "@/components/home/partners-section"
import CertificationsSection from "@/components/home/certifications-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CtaSection from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <TechnologiesSection />
      <PartnersSection />
      <CertificationsSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}

