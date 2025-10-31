"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Building, TrendingUp, DollarSign } from "lucide-react"

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState(0)

  const stories = [
    {
      company: "TechNova Solutions",
      industry: "Software Development",
      challenge:
        "Struggling with inefficient project management processes leading to missed deadlines and budget overruns.",
      solution:
        "Implemented a comprehensive workflow optimization strategy with integrated project management tools and standardized processes.",
      results: [
        { label: "Project Delivery Time", value: "-35%", icon: <TrendingUp /> },
        { label: "Resource Utilization", value: "+42%", icon: <Building /> },
        { label: "Operational Costs", value: "-28%", icon: <DollarSign /> },
      ],
      quote:
        "The operational improvements transformed our project delivery capabilities. We're now completing projects faster with fewer resources and higher client satisfaction.",
      person: "Sarah Johnson, CTO",
    },
    {
      company: "Global Retail Group",
      industry: "Retail & E-commerce",
      challenge:
        "Disjointed inventory management across multiple locations causing stockouts and excess inventory issues.",
      solution:
        "Developed an integrated inventory optimization system with real-time tracking and predictive analytics for demand forecasting.",
      results: [
        { label: "Inventory Accuracy", value: "+68%", icon: <TrendingUp /> },
        { label: "Stockout Incidents", value: "-75%", icon: <Building /> },
        { label: "Carrying Costs", value: "-32%", icon: <DollarSign /> },
      ],
      quote:
        "The new operational systems have revolutionized our inventory management. We've significantly reduced costs while improving product availability for our customers.",
      person: "Michael Chen, Operations Director",
    },
    {
      company: "HealthPlus Medical",
      industry: "Healthcare",
      challenge:
        "Inefficient patient scheduling and administrative processes creating long wait times and staff burnout.",
      solution:
        "Implemented a streamlined patient management system with automated scheduling and integrated electronic health records.",
      results: [
        { label: "Patient Wait Time", value: "-62%", icon: <TrendingUp /> },
        { label: "Administrative Hours", value: "-45%", icon: <Building /> },
        { label: "Patient Satisfaction", value: "+53%", icon: <DollarSign /> },
      ],
      quote:
        "The operational optimization has transformed our practice. Our staff can focus more on patient care rather than paperwork, and our patients appreciate the efficiency.",
      person: "Dr. Lisa Patel, Medical Director",
    },
  ]

  const nextStory = () => {
    setActiveStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
  }

  const prevStory = () => {
    setActiveStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo">Stories</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real-world examples of how our business operation optimization strategies have transformed organizations.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-lighter rounded-2xl overflow-hidden border border-white/5"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8">
                  <div className="inline-block px-3 py-1 bg-blue/10 rounded-full text-blue-light text-sm font-medium mb-4">
                    {stories[activeStory].industry}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{stories[activeStory].company}</h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-300">Challenge:</h4>
                    <p className="text-gray-400">{stories[activeStory].challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-300">Solution:</h4>
                    <p className="text-gray-400">{stories[activeStory].solution}</p>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-300">Results:</h4>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {stories[activeStory].results.map((result, index) => (
                      <div key={index} className="bg-dark rounded-xl p-4 border border-white/5">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center mr-2 text-blue">
                            {result.icon}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-blue-light">{result.value}</div>
                        <div className="text-xs text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/2 bg-dark p-8 flex flex-col justify-center">
                  <div className="bg-dark-lighter rounded-xl p-6 border border-white/5 mb-6">
                    <blockquote className="text-lg italic text-gray-300 mb-4">
                      "{stories[activeStory].quote}"
                    </blockquote>
                    <div className="font-semibold">{stories[activeStory].person}</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">
                      Case Study {activeStory + 1} of {stories.length}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={prevStory}
                        className="w-10 h-10 rounded-full bg-dark-lighter border border-white/5 flex items-center justify-center hover:bg-blue/10 hover:border-blue/20 transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextStory}
                        className="w-10 h-10 rounded-full bg-dark-lighter border border-white/5 flex items-center justify-center hover:bg-blue/10 hover:border-blue/20 transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

