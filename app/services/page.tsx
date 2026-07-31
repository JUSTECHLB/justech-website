"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  HelpCircle,
  Layers,
  LineChart,
  Palette,
  PhoneCall,
  Search,
  Server,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { discoveryLinkProps } from "@/lib/links";

const stats = [
  { value: "3", label: "Pillars", sub: "Revenue, operations, technology" },
  { value: "7", label: "Services", sub: "Consultation through to AI" },
  { value: "2019", label: "In Beirut", sub: "Serving Lebanon and MENA" },
];

// The three problems clients actually arrive with. Everything below is a way of
// solving one of them.
const pillars = [
  {
    title: "Revenue Scaling",
    href: "/revenue-scaling",
    icon: TrendingUp,
    quote: "We're getting traffic but no enquiries.",
    measured: "Qualified leads per month, conversion rate.",
  },
  {
    title: "Business Operation Optimization",
    href: "/business-operation-optimization",
    icon: Layers,
    quote: "My team is drowning in manual work.",
    measured: "Hours saved per week, error rate.",
  },
  {
    title: "Tech Transformation",
    href: "/tech-transformation",
    icon: Server,
    quote: "Our system is old and can't handle growth.",
    measured: "Uptime, load capacity, infrastructure cost.",
  },
];

const services = [
  {
    title: "Technical Consultation",
    href: "/consultation",
    icon: ClipboardCheck,
    description:
      "A paid, fixed-fee review of your code, infrastructure, cloud setup, or operations, ending in a written recommendation you own.",
    points: [
      "Fee agreed before we start",
      "A document you keep either way",
      "Credited against the project",
    ],
  },
  {
    title: "Website Design",
    href: "/services/web-design",
    icon: Palette,
    description:
      "Responsive websites structured so a visitor can tell what you do in five seconds and knows what to do next.",
    points: [
      "Mobile-first layouts",
      "Built for page speed",
      "One clear action per page",
    ],
  },
  {
    title: "Custom Software Development",
    href: "/services/web-development",
    icon: Code2,
    description:
      "Web and custom applications built on the stack that fits the problem, your team, and the ten-year cost.",
    points: [
      "Next.js, Node, Python, Go, .NET",
      "APIs and integrations",
      "Documentation and handover",
    ],
  },
  {
    title: "SEO",
    href: "/services/seo",
    icon: Search,
    description:
      "Search work aimed at the terms your customers actually use, in Arabic and English, measured in enquiries rather than impressions.",
    points: [
      "Technical audit and fixes",
      "Intent-led keyword research",
      "Local SEO and Google Business Profile",
    ],
  },
  {
    title: "Odoo Implementation",
    href: "/services/odoo",
    icon: Boxes,
    description:
      "One system instead of nine spreadsheets. Odoo implementation, migration, and the custom modules it does not ship with.",
    points: [
      "Inventory, accounting, sales, MRP",
      "Data migration and integrations",
      "Training and support retainer",
    ],
  },
  {
    title: "AWS and DevOps",
    href: "/services/aws-devops",
    icon: Cloud,
    description:
      "Cloud migration, architecture, and the delivery pipeline around it, so deployments stop being an event everyone watches.",
    points: [
      "AWS migration and landing zones",
      "CI/CD and infrastructure as code",
      "Monitoring, backup, and recovery",
    ],
  },
  {
    title: "AI and Machine Learning",
    href: "/ai",
    icon: Brain,
    description:
      "Document extraction, ticket routing, forecasting, and internal copilots, connected to the systems you already run.",
    points: [
      "Built on your real data",
      "Deployed, monitored, versioned",
      "Measured in hours saved",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    icon: PhoneCall,
    description:
      "Free and short. You describe what is not working, we ask questions, and we say whether we can help and what the right next step is.",
  },
  {
    step: "02",
    title: "Technical consultation",
    icon: ClipboardCheck,
    description:
      "Paid, fixed-fee, and time-boxed. We go into the code, the infrastructure, and the numbers, and write up a recommendation you own.",
  },
  {
    step: "03",
    title: "Build",
    icon: Code2,
    description:
      "Delivered in slices you can actually use, rather than a single reveal at the end. You see working software as it lands.",
  },
  {
    step: "04",
    title: "Handover and measure",
    icon: LineChart,
    description:
      "Documentation, access, and runbooks so your team can take over, plus the number the work was supposed to move.",
  },
];

const faqs = [
  {
    question: "Which service do I actually need?",
    answer:
      "Most clients arrive with a symptom rather than a service: traffic that never converts, a team buried in manual work, a system that buckles under load. That is what the discovery call is for. Describe the problem and we will tell you which of these it maps to, or that it does not need us at all.",
  },
  {
    question:
      "What is the difference between the discovery call and the technical consultation?",
    answer:
      "The discovery call is free and short. The technical consultation is a paid, fixed-fee engagement where we go into the detail and produce a written recommendation you own, credited against the project if you go ahead. Everyone starts with the discovery call.",
  },
  {
    question: "Can you work with our existing team and systems?",
    answer:
      "Yes, and it is common. We work alongside in-house teams on architecture decisions, cloud and deployment practice, or specific builds, and we integrate with the tools you already pay for rather than replacing them by default.",
  },
  {
    question: "Can you improve what we have without rebuilding it?",
    answer:
      "Usually. Depending on the state of the system we can fix the parts that are costing you, improve performance, restructure the content, or rebuild only the sections that need it. A full rebuild is a last resort, not a starting position.",
  },
  {
    question: "Do you work with clients outside Lebanon?",
    answer:
      "Yes. We are based in Beirut and work with clients across Lebanon and the wider MENA region, including the Gulf. Most work runs remotely unless you would rather meet in person.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <JsonLd schema={faqSchema(faqs)} id="schema-faq" />
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
              Every service,
              <br />
              <span className="gradient-text">tied to a number</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mx-auto mb-10 max-w-3xl text-lg text-gray-400 md:text-xl"
            >
              Seven services across three pillars: scaling revenue, automating
              operations, and modernizing the technology underneath. Every
              engagement starts with a free discovery call.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link {...discoveryLinkProps} className="inline-block w-full sm:w-auto">
                <Button className="h-auto w-full sm:w-auto whitespace-normal rounded-full bg-gradient-to-r from-blue to-indigo px-6 sm:px-8 py-6 text-base sm:text-lg text-white shadow-lg shadow-blue/10 transition-all duration-300 hover:scale-[1.02] hover:opacity-90">
                  Book a discovery call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <a href="#services-grid" className="inline-block w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="h-auto w-full sm:w-auto whitespace-normal rounded-full border-blue/20 px-6 sm:px-8 py-6 text-base sm:text-lg text-white transition-all duration-300 hover:border-blue/30 hover:bg-dark-lighter"
                >
                  See all seven
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

              <div className="relative grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/5 bg-dark/50 p-8 md:p-10">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/10 bg-dark-lighter/60 px-4 py-2 text-sm text-blue-light">
                    <BarChart3 className="h-4 w-4" />
                    Three problems, seven answers
                  </div>

                  <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
                    Pick the problem,
                    <span className="gradient-text"> not the product</span>
                  </h2>

                  <p className="mb-8 max-w-2xl text-lg text-gray-400">
                    Nobody wakes up wanting an Odoo implementation. They want
                    the stock count to be right. Start from the problem and the
                    service that fits usually picks itself.
                  </p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-blue/10 bg-dark-lighter/60 p-5 transition-all duration-300 hover:border-blue/20 hover:bg-dark-lighter/80"
                      >
                        <div className="mb-2 text-3xl font-bold gradient-text">
                          {stat.value}
                        </div>
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

                  <div className="relative w-full max-w-md">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md"
                    >
                      <div className="mb-5 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-blue/10 px-3 py-1 text-sm text-blue-light">
                          Revenue
                        </span>
                        <span className="rounded-full bg-blue/10 px-3 py-1 text-sm text-blue-light">
                          Operations
                        </span>
                        <span className="rounded-full bg-blue/10 px-3 py-1 text-sm text-blue-light">
                          Technology
                        </span>
                      </div>

                      <h3 className="mb-4 text-2xl font-semibold leading-snug sm:text-3xl">
                        Every engagement states the metric it is accountable for
                      </h3>

                      <div className="space-y-3 text-gray-300">
                        {[
                          "Qualified leads per month, conversion rate",
                          "Hours saved per week, error rate",
                          "Uptime, load capacity, infrastructure cost",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-light" />
                            <p>{item}</p>
                          </div>
                        ))}
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
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue/20 bg-dark-lighter/60 px-5 py-2 text-sm text-blue-light">
              All services
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              What We <span className="gradient-text">Actually Do</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
              Seven services. Each one links to a page that says what it
              involves, how it runs, and what we measure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

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
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-blue/10 bg-dark-lighter/70 p-8 shadow-lg shadow-transparent transition-all duration-300 group-hover:-translate-y-3 group-hover:border-blue/20 group-hover:shadow-[0_18px_50px_rgba(8,15,30,0.35)]">
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-8 flex items-center justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue/10 bg-gradient-to-r from-blue/15 to-indigo/20">
                            <Icon className="h-6 w-6 text-blue-light" />
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-light" />
                        </div>

                        <h3 className="mb-4 text-2xl font-semibold">
                          {service.title}
                        </h3>
                        <p className="mb-6 leading-relaxed text-gray-400">
                          {service.description}
                        </p>

                        <div className="mb-8 space-y-3">
                          {service.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3 text-sm text-gray-300"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-light" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-blue-light">
                          Learn more
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0c1526_0%,#0a1321_100%)] py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue/20 bg-dark/60 px-5 py-2 text-sm text-blue-light">
              The three pillars
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Which problem are you{" "}
              <span className="gradient-text">actually solving</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
              Most clients arrive with one of these three. Some end up with all
              of them.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group h-full"
                >
                  <Link href={pillar.href} className="block h-full">
                    <div className="flex h-full flex-col rounded-[28px] border border-blue/10 bg-dark p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-blue/25">
                      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue/10 bg-gradient-to-r from-blue/15 to-indigo/20">
                        <Icon className="h-6 w-6 text-blue-light" />
                      </div>

                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-light">
                        {pillar.title}
                      </p>
                      <h3 className="mb-6 text-xl font-semibold italic text-white">
                        &ldquo;{pillar.quote}&rdquo;
                      </h3>

                      <p className="mt-auto border-t border-blue/10 pt-4 text-sm text-gray-400">
                        <span className="font-semibold text-blue-light">
                          Measured in:
                        </span>{" "}
                        {pillar.measured}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a1321_0%,#09121e_100%)] py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue/20 bg-dark-lighter/60 px-5 py-2 text-sm text-blue-light">
              Process
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              How Working With Us{" "}
              <span className="gradient-text">Actually Goes</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
              The same four steps whichever service you end up needing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative rounded-3xl bg-gradient-to-br from-blue/20 via-indigo/10 to-transparent p-[1px]"
                >
                  <div className="relative h-full min-h-[340px] overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(17,24,39,0.86),rgba(10,15,28,0.92))] p-8">
                    <div className="relative z-10">
                      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue/10 bg-gradient-to-r from-blue/15 to-indigo/20">
                        <Icon className="h-7 w-7 text-blue-light" />
                      </div>
                    
                      <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                      <p className="text-lg leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#09121e_0%,#0b1422_100%)] py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue/20 bg-dark/60 px-5 py-2 text-sm text-blue-light">
              FAQ
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Answers to Common <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <FAQAccordion />
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 gradient-bg -z-10 mx-4 rounded-3xl md:mx-12" />
        <div className="absolute inset-0 grid-pattern -z-10 mx-4 rounded-3xl opacity-10 md:mx-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 py-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Still not sure which one{" "}
            <span className="gradient-text">you need</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl">
            Describe the problem in a paragraph. We will tell you which of the
            seven it maps to, or that you do not need us yet.
          </p>
          <Link
            {...discoveryLinkProps}
            className="inline-block w-full sm:w-auto"
          >
            <Button className="group h-auto w-full whitespace-normal rounded-full bg-white px-6 py-6 text-base text-dark transition-transform duration-300 hover:scale-105 hover:bg-gray-100 sm:w-auto sm:px-8 sm:text-lg">
              Book a discovery call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

function FloatingOrb({
  className,
  size,
  delay,
}: {
  className: string;
  size: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-r from-blue/50 to-indigo/50 blur-[1px] ${className} ${size}`}
      animate={{ y: [0, -12, 0], opacity: [0.35, 0.8, 0.35] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function FloatingQuestion({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute hidden h-10 w-10 items-center justify-center rounded-full border border-blue/20 bg-dark-lighter/70 text-blue-light shadow-lg shadow-blue/10 backdrop-blur-md md:flex ${className}`}
      animate={{ y: [0, -14, 0], rotate: [0, 8, 0], opacity: [0.45, 0.9, 0.45] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <HelpCircle className="h-5 w-5" />
    </motion.div>
  );
}

function FloatingSymbol({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute hidden h-11 w-11 items-center justify-center rounded-2xl border border-indigo/20 bg-dark-lighter/70 text-indigo-300 shadow-lg shadow-indigo/10 backdrop-blur-md md:flex ${className}`}
      animate={{ y: [0, 12, 0], rotate: [0, -8, 0], opacity: [0.45, 0.85, 0.45] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      ✦
    </motion.div>
  );
}

function FAQAccordion() {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.question}
          className="rounded-2xl border border-blue/10 bg-dark/70 p-6"
        >
          <h3 className="mb-3 text-xl font-semibold">{faq.question}</h3>
          <p className="text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}