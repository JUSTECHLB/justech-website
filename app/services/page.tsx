"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  ArrowRight,
  Globe,
  LayoutTemplate,
  Search,
  Sparkles,
  Zap,
  CheckCircle2,
  Plus,
  BarChart3,
  Code2,
  CircleHelp,
  Binary,
  Compass,
  PenTool,
  Rocket,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Web Design",
    description:
      "Modern, brand-focused interfaces designed to look premium, feel intuitive, and convert attention into action.",
    points: [
      "Premium visual direction",
      "Clear user-focused layouts",
      "Responsive modern design",
    ],
    icon: LayoutTemplate,
    href: "/services/web-design",
  },
  {
    title: "Web Development",
    description:
      "Fast, scalable websites and web apps built with clean architecture, strong performance, and future growth in mind.",
    points: [
      "Clean scalable builds",
      "Modern frameworks",
      "Performance-conscious development",
    ],
    icon: Code2,
    href: "/services/web-development",
  },
  {
    title: "SEO Optimization",
    description:
      "Search-ready structure, technical optimization, and content alignment that help your website get discovered.",
    points: [
      "Technical SEO foundation",
      "Search-friendly structure",
      "Content alignment support",
    ],
    icon: Search,
    href: "/services/seo",
  },
]

const featureCards = [
  {
    title: "Performance First",
    description:
      "We build digital experiences that load fast, feel smooth, and perform reliably across devices.",
    icon: Zap,
  },
  {
    title: "Scalable Structure",
    description:
      "Your website is designed to grow with your brand, whether you need new pages, features, or integrations later on.",
    icon: Globe,
  },
  {
    title: "Brand-Led Design",
    description:
      "Every visual decision is made to strengthen your identity and create a more memorable online presence.",
    icon: Sparkles,
  },
]

const stats = [
  { value: "3", label: "Core services", sub: "focused, premium, intentional" },
  { value: "100%", label: "Responsive builds", sub: "desktop, tablet, mobile" },
  { value: "SEO", label: "Ready foundation", sub: "visibility starts at launch" },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn your goals, audience, and positioning to shape the right direction before anything gets built.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We define the structure, user journey, and service priorities so the project is clear and intentional.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Build",
    description:
      "We design and develop the experience using modern tools, clean styling, and performance-conscious implementation.",
    icon: PenTool,
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We refine, test, and deliver a polished product that is ready to represent your brand and support growth.",
    icon: Rocket,
  },
]

const faqItems = [
  {
    question: "How long does a website project usually take?",
    answer:
      "It depends on scope, but most projects move through discovery, design, development, and launch in clearly defined stages. Timelines become much easier to estimate once the required pages and features are confirmed.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We can improve an outdated website visually, structurally, and technically while keeping the parts of your brand that still work well.",
  },
  {
    question: "Can SEO be included with design and development?",
    answer:
      "Yes. SEO is strongest when it is considered from the start, so we can align structure, performance, and content direction during the build.",
  },
  {
    question: "Can you build custom features for my business?",
    answer:
      "Yes. If your business needs tailored functionality, we can build custom website features and workflows around your specific goals.",
  },
]

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <motion.div
            key={item.question}
            layout
            transition={{ duration: 0.28 }}
            className={`rounded-[24px] border px-7 py-6 transition-all duration-300 ${
              isOpen
                ? "border-blue/25 bg-[linear-gradient(180deg,rgba(18,27,45,0.96),rgba(12,18,31,0.96))] shadow-[0_0_0_1px_rgba(77,171,247,0.05)]"
                : "border-blue/10 bg-dark hover:border-blue/20"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span
                className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                  isOpen ? "text-white" : "text-white/95"
                }`}
              >
                {item.question}
              </span>

              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-blue/20 bg-blue/10 shadow-[0_0_18px_rgba(77,171,247,0.12)]"
                    : "rotate-0 border-blue/10 bg-dark-lighter"
                }`}
              >
                <Plus className="h-5 w-5 text-white" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-5 pr-12 text-base md:text-lg leading-relaxed text-gray-400">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,171,247,0.16),transparent_28%),radial-gradient(circle_at_bottom,rgba(92,124,250,0.14),transparent_30%),linear-gradient(180deg,#060b17_0%,#09101d_45%,#0b1220_100%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-[-120px] right-[-140px] h-[520px] w-[520px] rounded-full bg-blue/10 blur-[130px]" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-indigo/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(77,171,247,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(77,171,247,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.08]" />

        <FloatingOrb className="top-[18%] left-[10%]" size="w-4 h-4" delay={0} />
        <FloatingOrb className="top-[22%] right-[16%]" size="w-5 h-5" delay={0.7} />
        <FloatingOrb className="bottom-[20%] left-[18%]" size="w-3 h-3" delay={1.2} />
        <FloatingOrb className="bottom-[28%] right-[12%]" size="w-4 h-4" delay={1.8} />
        <FloatingOrb className="top-[42%] left-[6%]" size="w-2 h-2" delay={2.3} />
        <FloatingOrb className="top-[56%] right-[8%]" size="w-3 h-3" delay={2.8} />

        <FloatingQuestion className="top-[26%] left-[5%]" delay={0.4} />
        <FloatingQuestion className="top-[30%] right-[6%]" delay={1} />
        <FloatingQuestion className="bottom-[18%] right-[18%]" delay={1.6} />
        <FloatingSymbol className="bottom-[16%] left-[10%]" delay={1.2} />
        <FloatingSymbol className="top-[14%] right-[28%]" delay={1.9} />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center rounded-full border border-blue/20 bg-dark-lighter/60 px-5 py-2 text-sm text-blue-light"
            >
              Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
            >
              Digital Services
              <br />
              <span className="gradient-text">Built to Elevate Your Brand</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mx-auto mb-10 max-w-3xl text-lg text-gray-400 md:text-xl"
            >
              We combine design, development, and SEO into polished digital experiences
              that look premium, perform smoothly, and support long-term growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link href="/contact">
                <Button className="h-auto rounded-full bg-gradient-to-r from-blue to-indigo px-8 py-6 text-lg text-white shadow-lg shadow-blue/10 transition-all duration-300 hover:scale-[1.02] hover:opacity-90">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <a href="#services-grid">
                <Button
                  variant="outline"
                  className="h-auto rounded-full border-blue/20 px-8 py-6 text-lg text-white transition-all duration-300 hover:bg-dark-lighter hover:border-blue/30"
                >
                  Explore Services
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-16 max-w-6xl"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-blue/10 bg-gradient-to-br from-[#0d1728] to-[#09111f] p-6 shadow-2xl shadow-blue/5 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,171,247,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(92,124,250,0.15),transparent_35%)]" />

              <FloatingOrb className="top-[14%] left-[18%]" size="w-2 h-2" delay={0.6} />
              <FloatingOrb className="top-[26%] right-[20%]" size="w-3 h-3" delay={1.3} />
              <FloatingOrb className="bottom-[18%] right-[28%]" size="w-2 h-2" delay={2.1} />

              <div className="relative grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/5 bg-dark/50 p-8 md:p-10">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/10 bg-dark-lighter/60 px-4 py-2 text-sm text-blue-light">
                    <BarChart3 className="h-4 w-4" />
                    Premium digital execution
                  </div>

                  <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
                    Strategy, design, and development
                    <span className="gradient-text"> working together</span>
                  </h2>

                  <p className="mb-8 max-w-2xl text-lg text-gray-400">
                    Instead of treating services as disconnected tasks, we create a unified
                    digital presence where structure, visuals, and performance all support
                    the same business goals.
                  </p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-blue/10 bg-dark-lighter/60 p-5 transition-all duration-300 hover:border-blue/20 hover:bg-dark-lighter/80"
                      >
                        <div className="mb-2 text-3xl font-bold gradient-text">{stat.value}</div>
                        <div className="font-medium text-white">{stat.label}</div>
                        <div className="mt-1 text-sm text-gray-400">{stat.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[28px] border border-blue/10 bg-dark/45 px-6">
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute h-[290px] w-[290px] rounded-full bg-blue/10 blur-3xl"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute h-[220px] w-[220px] rounded-full bg-indigo/10 blur-3xl"
                  />

                  <div className="relative w-full max-w-md">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md"
                    >
                      <div className="mb-5 flex items-center gap-2">
                        <span className="rounded-full bg-blue/10 px-3 py-1 text-sm text-blue-light">
                          Design
                        </span>
                        <span className="rounded-full bg-blue/10 px-3 py-1 text-sm text-blue-light">
                          Dev
                        </span>
                        <span className="rounded-full bg-blue/10 px-3 py-1 text-sm text-blue-light">
                          SEO
                        </span>
                      </div>

                      <h3 className="mb-4 text-2xl font-semibold leading-snug sm:text-3xl">
                        A cleaner service experience with stronger visual direction
                      </h3>

                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-light" />
                          <p>Clear structure for your core offerings</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-light" />
                          <p>Consistent styling across the whole site</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-light" />
                          <p>Premium presentation without clutter</p>
                        </div>
                      </div>
                    </motion.div>

                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services-grid"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#0b1220_0%,#0c1526_100%)] py-24"
      >
        <div className="absolute top-1/2 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo/10 blur-[110px]" />
        <div className="absolute bottom-[-120px] left-[-120px] -z-10 h-[420px] w-[420px] rounded-full bg-blue/10 blur-[120px]" />
        <FloatingOrb className="top-[18%] right-[12%]" size="w-3 h-3" delay={0.9} />
        <FloatingOrb className="bottom-[22%] left-[15%]" size="w-2 h-2" delay={1.7} />

        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue/20 bg-dark-lighter/60 px-5 py-2 text-sm text-blue-light">
              Main services
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              What We <span className="gradient-text">Specialize In</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
              Focused, high-impact services designed to strengthen your digital
              presence and support meaningful growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group"
                >
                  <Link href={service.href} className="block h-full">
                    <div className="relative h-full overflow-hidden rounded-[28px] border border-blue/10 bg-dark-lighter/70 p-8 shadow-lg shadow-transparent transition-all duration-300 group-hover:-translate-y-3 group-hover:border-blue/20 group-hover:shadow-[0_18px_50px_rgba(8,15,30,0.35)]">
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(77,171,247,0.08),transparent_38%)]" />

                      <div className="relative z-10">
                        <div className="mb-8 flex items-center justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue/10 bg-gradient-to-r from-blue/15 to-indigo/20 transition-all duration-300 group-hover:scale-105 group-hover:border-blue/20">
                            <Icon className="h-6 w-6 text-blue-light" />
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-light" />
                        </div>

                        <h3 className="mb-4 text-3xl font-semibold">{service.title}</h3>
                        <p className="mb-6 text-lg leading-relaxed text-gray-400">
                          {service.description}
                        </p>

                        <div className="mb-8 space-y-3">
                          {service.points.map((point) => (
                            <div key={point} className="flex items-start gap-3 text-sm text-gray-300">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-light" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-light transition-all duration-300 group-hover:gap-3">
                          Learn more
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0c1526_0%,#0a1321_100%)] py-24">
        <div className="absolute top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,171,247,0.10),transparent_26%)]" />
        <FloatingQuestion className="top-[14%] left-[8%]" delay={0.2} />
        <FloatingOrb className="bottom-[18%] right-[10%]" size="w-3 h-3" delay={2.2} />

        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue/20 bg-dark/60 px-5 py-2 text-sm text-blue-light">
              Core strengths
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Built for <span className="gradient-text">Performance</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
              The goal is not just to launch a website — it’s to build a stronger,
              more effective digital foundation for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featureCards.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[28px] border border-blue/10 bg-dark p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/20 hover:bg-[rgba(12,18,32,0.98)]"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue/10 bg-gradient-to-r from-blue/15 to-indigo/20">
                    <Icon className="h-6 w-6 text-blue-light" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="text-lg text-gray-400">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a1321_0%,#09121e_100%)] py-24">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo/10 blur-[110px]" />
        <div className="absolute bottom-[-100px] left-[20%] -z-10 h-[280px] w-[280px] rounded-full bg-blue/10 blur-[100px]" />
        <FloatingSymbol className="top-[16%] right-[10%]" delay={1.2} />
        <FloatingOrb className="bottom-[12%] left-[12%]" size="w-2 h-2" delay={2.5} />

        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue/20 bg-dark-lighter/60 px-5 py-2 text-sm text-blue-light">
              Process
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              From Idea to <span className="gradient-text">Launch</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
              A clear process keeps the work focused, collaborative, and aligned
              with your actual business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative rounded-3xl bg-gradient-to-br from-blue/20 via-indigo/10 to-transparent p-[1px] transition-all duration-500 hover:from-blue/40 hover:via-indigo/20"
                >
                  <div className="relative min-h-[340px] h-full overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(17,24,39,0.86),rgba(10,15,28,0.92))] p-8 backdrop-blur-xl">
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(77,171,247,0.10),transparent_28%)]" />
                    <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue/10 bg-gradient-to-r from-blue/15 to-indigo/20">
                           <Icon className="h-7 w-7 text-blue-light" />
                    </div>
                      <h3 className="mb-4 text-2xl font-semibold transition group-hover:text-blue-light">
                        {item.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#09121e_0%,#0b1422_100%)] py-24">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,124,250,0.08),transparent_30%)]" />

        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue/20 bg-dark/60 px-5 py-2 text-sm text-blue-light">
              FAQ
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Answers to Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
              A few of the questions businesses usually ask before starting a new
              website or digital project.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

    </main>
  )
}

function FloatingOrb({
  className,
  size,
  delay,
}: {
  className: string
  size: string
  delay: number
}) {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-r from-blue/50 to-indigo/50 blur-[1px] ${className} ${size}`}
      animate={{ y: [0, -12, 0], opacity: [0.35, 0.8, 0.35] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
    />
  )
}

function FloatingQuestion({
  className,
  delay,
}: {
  className: string
  delay: number
}) {
  return (
    <motion.div
      className={`absolute text-white/10 ${className}`}
      animate={{ y: [0, -10, 0], rotate: [0, 4, 0], opacity: [0.08, 0.16, 0.08] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <CircleHelp className="h-24 w-24 md:h-28 md:w-28" />
    </motion.div>
  )
}

function FloatingSymbol({
  className,
  delay,
}: {
  className: string
  delay: number
}) {
  return (
    <motion.div
      className={`absolute text-blue/20 ${className}`}
      animate={{ y: [0, 12, 0], rotate: [0, -6, 0], opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Binary className="h-14 w-14 md:h-16 md:w-16" />
    </motion.div>
  )
}