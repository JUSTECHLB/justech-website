"use client"

import { motion } from "framer-motion"
import { Clock, DollarSign, LineChart, Users, Zap, BarChart, Layers, Shield } from "lucide-react"

export default function CoreBenefits() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-blue" />,
      title: "Time Efficiency",
      description:
        "Reduce time spent on repetitive tasks by implementing automated workflows and streamlined processes.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-blue" />,
      title: "Cost Reduction",
      description: "Identify and eliminate unnecessary expenses and resource waste through data-driven optimization.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-blue" />,
      title: "Performance Tracking",
      description: "Monitor key performance indicators with real-time dashboards to make informed business decisions.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue" />,
      title: "Team Productivity",
      description: "Enhance collaboration and communication between departments with integrated systems.",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue" />,
      title: "Process Acceleration",
      description: "Speed up critical business processes through strategic automation and workflow optimization.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue" />,
      title: "Data-Driven Insights",
      description: "Leverage advanced analytics to uncover operational bottlenecks and improvement opportunities.",
    },
    {
      icon: <Layers className="h-6 w-6 text-blue" />,
      title: "Scalable Systems",
      description: "Build flexible operational frameworks that grow with your business without adding complexity.",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue" />,
      title: "Risk Mitigation",
      description:
        "Identify potential operational risks and implement preventative measures to ensure business continuity.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Benefits of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo">
              Operational Optimization
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive approach to business operation optimization delivers measurable improvements across your
            entire organization.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-dark p-6 rounded-xl border border-white/5 hover:border-blue/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue/5"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

