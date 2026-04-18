"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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
    icon: LayoutTemplate,
    href: "/services/web-design",
  },
  {
    title: "Web Development",
    description:
      "Fast, scalable websites and web apps built with clean architecture, strong performance, and future growth in mind.",
    icon: Code2,
    href: "/services/web-development",
  },
  {
    title: "SEO Optimization",
    description:
      "Search-ready structure, technical optimization, and content alignment that help your website get discovered.",
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-white overflow-hidden bg-[#07111f]">
      <section className="relative pt-28 pb-24 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,171,247,0.16),transparent_28%),radial-gradient(circle_at_bottom,rgba(92,124,250,0.14),transparent_30%),linear-gradient(180deg,#060b17_0%,#09101d_45%,#0b1220_100%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-[-120px] right-[-140px] w-[520px] h-[520px] bg-blue/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] bg-indigo/10 rounded-full blur-[120px]" />
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

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-blue/20 bg-dark-lighter/60 px-5 py-2 text-sm text-blue-light mb-6"
            >
              Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Digital Services
              <br />
              <span className="gradient-text">Built to Elevate Your Brand</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-10"
            >
              We combine design, development, and SEO into polished digital experiences
              that look premium, perform smoothly, and support long-term growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white px-8 py-6 text-lg h-auto rounded-full shadow-lg shadow-blue/10">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <a href="#services-grid">
                <Button
                  variant="outline"
                  className="border-blue/20 hover:bg-dark-lighter text-white px-8 py-6 text-lg h-auto rounded-full"
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
            className="mt-16 max-w-6xl mx-auto"
          >
            <div className="relative rounded-[32px] border border-blue/10 bg-gradient-to-br from-[#0d1728] to-[#09111f] p-6 md:p-8 overflow-hidden shadow-2xl shadow-blue/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,171,247,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(92,124,250,0.15),transparent_35%)]" />

              <FloatingOrb className="top-[14%] left-[18%]" size="w-2 h-2" delay={0.6} />
              <FloatingOrb className="top-[26%] right-[20%]" size="w-3 h-3" delay={1.3} />
              <FloatingOrb className="bottom-[18%] right-[28%]" size="w-2 h-2" delay={2.1} />

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
                <div className="rounded-[28px] border border-white/5 bg-dark/50 p-8 md:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue/10 bg-dark-lighter/60 px-4 py-2 text-sm text-blue-light mb-6">
                    <BarChart3 className="h-4 w-4" />
                    Premium digital execution
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                    Strategy, design, and development
                    <span className="gradient-text"> working together</span>
                  </h2>

                  <p className="text-gray-400 text-lg max-w-2xl mb-8">
                    Instead of treating services as disconnected tasks, we create a unified
                    digital presence where structure, visuals, and performance all support
                    the same business goals.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-blue/10 bg-dark-lighter/60 p-5"
                      >
                        <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                        <div className="text-white font-medium">{stat.label}</div>
                        <div className="text-sm text-gray-400 mt-1">{stat.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex items-center justify-center min-h-[420px] rounded-[28px] border border-blue/10 bg-dark/45 overflow-hidden px-6">
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[290px] h-[290px] rounded-full bg-blue/10 blur-3xl"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute w-[220px] h-[220px] rounded-full bg-indigo/10 blur-3xl"
                  />

                  <div className="relative w-full max-w-md">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl"
                    >
                      <div className="flex items-center gap-2 mb-5">
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

                      <h3 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
                        A cleaner service experience with stronger visual direction
                      </h3>

                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-light mt-0.5 shrink-0" />
                          <p>Clear structure for your core offerings</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-light mt-0.5 shrink-0" />
                          <p>Consistent styling across the whole site</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-light mt-0.5 shrink-0" />
                          <p>Premium presentation without clutter</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      className="mt-4 ml-auto w-fit rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4"
                    >
                      <div className="text-blue-light text-sm mb-1">Performance</div>
                      <div className="text-white font-semibold">Fast, smooth, scalable</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services-grid" className="py-24 relative overflow-hidden bg-[linear-gradient(180deg,#0b1220_0%,#0c1526_100%)]">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[110px] -z-10" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue/10 rounded-full blur-[120px] -z-10" />
        <FloatingOrb className="top-[18%] right-[12%]" size="w-3 h-3" delay={0.9} />
        <FloatingOrb className="bottom-[22%] left-[15%]" size="w-2 h-2" delay={1.7} />

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-blue/20 bg-dark-lighter/60 px-5 py-2 text-sm text-blue-light mb-5">
              Main services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What We <span className="gradient-text">Specialize In</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Focused, high-impact services designed to strengthen your digital
              presence and support meaningful growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <Link href={service.href} className="block h-full">
                    <div className="h-full rounded-[28px] border border-blue/10 bg-dark-lighter/70 p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-transparent hover:shadow-blue/5">
                      <div className="mb-8 flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue/15 to-indigo/20 border border-blue/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-light" />
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-500" />
                      </div>

                      <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-[linear-gradient(180deg,#0c1526_0%,#0a1321_100%)]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[110px] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,171,247,0.10),transparent_26%)]" />
        <FloatingQuestion className="top-[14%] left-[8%]" delay={0.2} />
        <FloatingOrb className="bottom-[18%] right-[10%]" size="w-3 h-3" delay={2.2} />

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-blue/20 bg-dark/60 px-5 py-2 text-sm text-blue-light mb-5">
              Core strengths
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for <span className="gradient-text">Performance</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The goal is not just to launch a website — it’s to build a stronger,
              more effective digital foundation for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[28px] border border-blue/10 bg-dark p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue/15 to-indigo/20 border border-blue/10 flex items-center justify-center mb-8">
                    <Icon className="h-6 w-6 text-blue-light" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-[linear-gradient(180deg,#0a1321_0%,#09121e_100%)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[110px] -z-10" />
        <div className="absolute bottom-[-100px] left-[20%] w-[280px] h-[280px] bg-blue/10 rounded-full blur-[100px] -z-10" />
        <FloatingSymbol className="top-[16%] right-[10%]" delay={1.2} />
        <FloatingOrb className="bottom-[12%] left-[12%]" size="w-2 h-2" delay={2.5} />

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-blue/20 bg-dark-lighter/60 px-5 py-2 text-sm text-blue-light mb-5">
              Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              From Idea to <span className="gradient-text">Launch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A clear process keeps the work focused, collaborative, and aligned
              with your actual business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue/20 via-indigo/10 to-transparent hover:from-blue/40 hover:via-indigo/20 transition-all duration-500"
                >
                  <div className="relative h-full rounded-3xl bg-[linear-gradient(180deg,rgba(17,24,39,0.86),rgba(10,15,28,0.92))] backdrop-blur-xl p-8 overflow-hidden min-h-[340px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,171,247,0.10),transparent_28%)] opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div className="relative z-10">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white text-2xl font-semibold mb-6">
                        {item.step}
                      </div>

                      <div className="flex items-center gap-2 mb-5 opacity-70">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue/15 to-indigo/20 border border-blue/10 flex items-center justify-center mb-6">
                        <Icon className="h-5 w-5 text-blue-light" />
                      </div>

                      <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-light transition">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-[linear-gradient(180deg,#09121e_0%,#0b1422_100%)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[110px] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,124,250,0.08),transparent_30%)]" />

        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-blue/20 bg-dark/60 px-5 py-2 text-sm text-blue-light mb-5">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Answers to Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A few of the questions businesses usually ask before starting a new
              website or digital project.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[24px] border border-blue/10 bg-dark px-7 py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold">
                  <span>{item.question}</span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dark-lighter border border-blue/10 transition-transform duration-300 group-open:rotate-45">
                    <Plus className="h-5 w-5 text-white" />
                  </span>
                </summary>
                <p className="mt-5 text-gray-400 text-lg leading-relaxed pr-12">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
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
      <CircleHelp className="w-24 h-24 md:w-28 md:h-28" />
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
      <Binary className="w-14 h-14 md:w-16 md:h-16" />
    </motion.div>
  )
}