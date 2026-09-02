"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Wrench, FlaskConical, TrendingUp } from "lucide-react"

export function AboutSection() {
  const principles = [
    {
      icon: Wrench,
      title: "Build",
      description: "Turn ideas into working technology.",
    },
    {
      icon: FlaskConical,
      title: "Experiment",
      description: "Explore emerging tools and intelligent systems.",
    },
    {
      icon: TrendingUp,
      title: "Improve",
      description: "Continuously refine products, experiences, and engineering practices.",
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Technology With Purpose." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-16">
          {/* Left: Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-light leading-snug text-foreground/90">
              Nurmasters Technology Solutions Private Limited is focused on building modern software experiences and exploring the practical possibilities of artificial intelligence.
            </h3>
          </motion.div>

          {/* Right: Principles */}
          <div className="flex flex-col gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-2">{principle.title}</h4>
                  <p className="text-muted-foreground text-lg">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
