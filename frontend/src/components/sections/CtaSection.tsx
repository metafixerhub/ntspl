"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-10 md:p-20 text-center max-w-4xl mx-auto shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Have an Idea? Let's Build It.
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            From the first concept to production-ready software, let's turn ambitious ideas into technology that works.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base" asChild>
              <Link href="/#contact">Start a Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base bg-background/50" asChild>
              <Link href="/#contact">Talk to Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
