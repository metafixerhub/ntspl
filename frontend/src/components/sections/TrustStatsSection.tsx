"use client"

import { motion } from "framer-motion"

const stats = [
  { title: "AI-FIRST", description: "Technology Approach" },
  { title: "FULL-STACK", description: "Engineering" },
  { title: "PRODUCT", description: "Focused" },
  { title: "OPEN TO TALENT", description: "Join Our Team" },
]

export function TrustStatsSection() {
  return (
    <section className="py-12 border-y border-border bg-card/30 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 first:pt-0"
            >
              <h3 className="text-xl md:text-2xl font-bold tracking-widest text-primary mb-2">
                {stat.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
