"use client"

import { motion } from "framer-motion"
import { BarChart3, Workflow, TrendingUp, Clock, Layers, Zap } from "lucide-react"

export default function CapabilityContent() {
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
            Business Operation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo">Optimization</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive optimization services designed to streamline
            processes, reduce inefficiencies, and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue/10 to-indigo/10 p-1 rounded-2xl">
              <div className="bg-dark rounded-2xl p-6 md:p-8 border border-white/5">
                <h3 className="text-2xl font-bold mb-6">How We Transform Your Operations</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                      <BarChart3 className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Comprehensive Analysis</h4>
                      <p className="text-gray-400">
                        We conduct a thorough assessment of your current operations, identifying bottlenecks,
                        inefficiencies, and areas for improvement.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                      <Workflow className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Custom Strategy Development</h4>
                      <p className="text-gray-400">
                        Our experts develop a tailored optimization strategy aligned with your business goals, industry
                        standards, and growth objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Implementation & Integration</h4>
                      <p className="text-gray-400">
                        We implement optimized workflows, systems, and processes with minimal disruption to your ongoing
                        operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Continuous Improvement</h4>
                      <p className="text-gray-400">
                        Our ongoing monitoring and refinement ensure your operations continue to evolve and improve as
                        your business grows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-dark rounded-2xl p-6 md:p-8 border border-white/5">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dark-lighter rounded-xl p-5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-5 h-5 text-blue" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Increased Efficiency</h4>
                  <p className="text-gray-400">
                    Streamlined workflows and optimized processes reduce waste and maximize resource utilization.
                  </p>
                </div>

                <div className="bg-dark-lighter rounded-xl p-5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5 text-blue" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Cost Reduction</h4>
                  <p className="text-gray-400">
                    Identify and eliminate unnecessary expenses while optimizing resource allocation.
                  </p>
                </div>

                <div className="bg-dark-lighter rounded-xl p-5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-blue" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Enhanced Productivity</h4>
                  <p className="text-gray-400">
                    Empower your team with optimized workflows and tools to accomplish more with less effort.
                  </p>
                </div>

                <div className="bg-dark-lighter rounded-xl p-5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-5 h-5 text-blue" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Data-Driven Decisions</h4>
                  <p className="text-gray-400">
                    Leverage operational insights to make informed strategic decisions that drive growth.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-5 bg-gradient-to-r from-blue/10 to-indigo/10 rounded-xl">
                <p className="text-lg font-medium">
                  Our clients typically see a <span className="text-blue-light font-bold">30-45%</span> improvement in
                  operational efficiency within the first 6 months.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

