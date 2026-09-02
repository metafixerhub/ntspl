"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Search, PenTool, LayoutTemplate, Terminal, TestTube, Rocket, RefreshCw, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  { id: "01", name: "DISCOVER", icon: Search, desc: "Understand the problem, users, requirements, and goals." },
  { id: "02", name: "PLAN", icon: PenTool, desc: "Define architecture, technology, user experience, and development strategy." },
  { id: "03", name: "DESIGN", icon: LayoutTemplate, desc: "Create interfaces, interactions, prototypes, and product systems." },
  { id: "04", name: "BUILD", icon: Terminal, desc: "Develop the frontend, backend, APIs, AI systems, and infrastructure." },
  { id: "05", name: "TEST", icon: TestTube, desc: "Validate functionality, performance, security, and usability." },
  { id: "06", name: "LAUNCH", icon: Rocket, desc: "Deploy the product and prepare it for real users." },
  { id: "07", name: "IMPROVE", icon: RefreshCw, desc: "Monitor, learn, optimize, and continuously evolve the product." },
]

export function WorkingPipelineSection() {
  const [activeStep, setActiveStep] = React.useState(0)

  return (
    <section id="working" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="How We Turn Ideas Into Products." subtitle="Our engineering process from concept to production." centered />

        <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Timeline Selector */}
          <div className="w-full lg:w-1/3 flex flex-col relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border rounded-full hidden lg:block" />
            
            {steps.map((step, index) => {
              const isActive = index === activeStep
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "relative flex items-center gap-6 p-4 rounded-xl transition-all duration-300 w-full text-left group",
                    isActive ? "bg-card shadow-md border border-border" : "hover:bg-card/50 border border-transparent"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors z-10",
                    isActive ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-background border border-border text-muted-foreground group-hover:border-primary/50"
                  )}>
                    <span className="text-sm font-bold">{step.id}</span>
                  </div>
                  <span className={cn(
                    "text-lg font-semibold tracking-wide transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {step.name}
                  </span>
                  <ChevronRight className={cn(
                    "ml-auto w-5 h-5 transition-transform",
                    isActive ? "text-primary opacity-100" : "opacity-0 group-hover:opacity-50"
                  )} />
                </button>
              )
            })}
          </div>

          {/* Active Step Details */}
          <div className="w-full lg:w-2/3 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl min-h-[400px] flex flex-col justify-center relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
                
                {React.createElement(steps[activeStep].icon, {
                  className: "w-16 h-16 text-primary mb-8"
                })}
                
                <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
                  Step {steps[activeStep].id}
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {steps[activeStep].name}
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {steps[activeStep].desc}
                </p>

                <div className="mt-12 pt-8 border-t border-border/50 grid grid-cols-2 gap-4">
                  {/* Decorative placeholders for step-specific metrics/tools */}
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="h-2 w-12 bg-primary/20 rounded-full mb-2" />
                    <div className="h-2 w-full bg-muted rounded-full" />
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="h-2 w-16 bg-secondary/20 rounded-full mb-2" />
                    <div className="h-2 w-full bg-muted rounded-full" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
