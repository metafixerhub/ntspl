"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { MotionCard } from "@/components/ui/Card"
import { Globe, Link as LinkIcon } from "lucide-react"
import { team } from "@/data/team"
import Link from "next/link"

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-card/10 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="People Behind the Technology." subtitle="A team of builders, researchers, and engineers." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <MotionCard
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden"
            >
              {/* Image Container with Zoom Effect */}
              <div className="w-full h-64 bg-muted overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-6 relative z-10 bg-card">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
                
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map(skill => (
                    <span key={skill} className="text-[10px] font-semibold uppercase tracking-wider bg-background border border-border px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-border/50 pt-4 mt-auto">
                  {member.links.github && (
                    <Link href={member.links.github} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Globe className="w-4 h-4" />
                    </Link>
                  )}
                  {member.links.linkedin && (
                    <Link href={member.links.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                      <LinkIcon className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
