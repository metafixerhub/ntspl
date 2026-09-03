"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Layout, Server, Bot, Cloud } from "lucide-react"

const techGroups = [
  {
    title: "FRONTEND",
    icon: Layout,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    techs: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "BACKEND",
    icon: Server,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    techs: ["Node.js", "Python", "REST APIs", "Databases", "Authentication"]
  },
  {
    title: "AI",
    icon: Bot,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    techs: ["Generative AI", "LLMs", "AI APIs", "Machine Learning", "Automation"]
  },
  {
    title: "INFRASTRUCTURE",
    icon: Cloud,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    techs: ["Cloud", "Git", "GitHub", "CI/CD", "Deployment"]
  }
]

export function TechStackSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Built With Modern Technology." centered />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${group.bgColor} ${group.color}`}>
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold tracking-widest uppercase text-sm">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-medium px-3 py-1.5 rounded-md border ${group.borderColor} bg-background text-foreground/80`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
