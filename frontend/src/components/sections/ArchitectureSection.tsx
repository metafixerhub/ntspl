"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { User, Layout, Blocks, Server, Database, Cloud, Bot, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

type ViewMode = "FRONTEND" | "BACKEND" | "FULL"

export function ArchitectureSection() {
  const [viewMode, setViewMode] = React.useState<ViewMode>("FULL")

  return (
    <section className="py-24 relative overflow-hidden bg-card/5">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Inside the Engineering." centered />

        <div className="flex justify-center mb-12">
          <div className="bg-background border border-border p-1 rounded-lg inline-flex">
            <Button
              variant={viewMode === "FRONTEND" ? "default" : "ghost"}
              onClick={() => setViewMode("FRONTEND")}
              size="sm"
            >
              Frontend View
            </Button>
            <Button
              variant={viewMode === "BACKEND" ? "default" : "ghost"}
              onClick={() => setViewMode("BACKEND")}
              size="sm"
            >
              Backend View
            </Button>
            <Button
              variant={viewMode === "FULL" ? "default" : "ghost"}
              onClick={() => setViewMode("FULL")}
              size="sm"
            >
              Full Architecture
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          
          {/* FRONTEND Description */}
          <div className={cn(
            "flex-1 transition-opacity duration-300",
            (viewMode === "FRONTEND" || viewMode === "FULL") ? "opacity-100" : "opacity-30"
          )}>
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Layout className="w-5 h-5 text-primary" /> Frontend
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4 font-medium">
                <li>UI/UX</li>
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Responsive Design</li>
                <li>Component Systems</li>
                <li>Accessibility</li>
              </ul>
              <p className="text-sm">
                The frontend layer transforms complex technology into intuitive, fast, and accessible user experiences.
              </p>
            </div>
          </div>

          {/* DIAGRAM */}
          <div className="flex-[1.5] w-full flex flex-col items-center justify-center gap-2 py-4">
            
            <Node icon={User} label="USER" active={true} />
            <ConnectingLine active={viewMode === "FRONTEND" || viewMode === "FULL"} />
            
            <Node 
              icon={Layout} 
              label="FRONTEND" 
              active={viewMode === "FRONTEND" || viewMode === "FULL"} 
              color="border-primary text-primary shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            />
            <ConnectingLine active={viewMode === "FULL"} />
            
            <Node 
              icon={Blocks} 
              label="API / APPLICATION LAYER" 
              active={viewMode === "FULL"} 
            />
            <ConnectingLine active={viewMode === "BACKEND" || viewMode === "FULL"} />
            
            <Node 
              icon={Server} 
              label="BACKEND" 
              active={viewMode === "BACKEND" || viewMode === "FULL"}
              color="border-secondary text-secondary shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            />
            <ConnectingLine active={viewMode === "BACKEND" || viewMode === "FULL"} />
            
            <div className={cn(
              "flex gap-4 p-4 rounded-xl border border-dashed transition-all duration-300",
              (viewMode === "BACKEND" || viewMode === "FULL") ? "border-border bg-background" : "border-border/20 opacity-30"
            )}>
              <Node icon={Database} label="DATABASE" active={viewMode === "BACKEND" || viewMode === "FULL"} small />
              <Node icon={Bot} label="AI SERVICES" active={viewMode === "BACKEND" || viewMode === "FULL"} small />
              <Node icon={Cloud} label="CLOUD" active={viewMode === "BACKEND" || viewMode === "FULL"} small />
            </div>

          </div>

          {/* BACKEND Description */}
          <div className={cn(
            "flex-1 transition-opacity duration-300",
            (viewMode === "BACKEND" || viewMode === "FULL") ? "opacity-100" : "opacity-30"
          )}>
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-secondary" /> Backend
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4 font-medium">
                <li>REST & GraphQL APIs</li>
                <li>Authentication</li>
                <li>Databases</li>
                <li>Business Logic</li>
                <li>AI Services</li>
                <li>Cloud Infrastructure</li>
              </ul>
              <p className="text-sm">
                The backend powers the systems behind the experience—from APIs and data to authentication, automation, and intelligent services.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Node({ icon: Icon, label, active, color = "border-border text-foreground", small = false }: any) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center bg-card transition-all duration-500",
      small ? "w-24 h-20 rounded-lg" : "w-64 h-16 rounded-xl",
      "border",
      active ? color : "border-border/30 text-foreground/30",
      active && !color.includes('shadow') ? "shadow-sm border-border text-foreground" : ""
    )}>
      <div className="flex items-center gap-3">
        <Icon className={cn("transition-colors", small ? "w-5 h-5 mb-1" : "w-5 h-5")} />
        {!small && <span className="font-bold tracking-widest text-sm">{label}</span>}
      </div>
      {small && <span className="font-bold tracking-wider text-[10px] text-center px-1 leading-tight">{label}</span>}
    </div>
  )
}

function ConnectingLine({ active }: { active: boolean }) {
  return (
    <div className="h-8 flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: active ? [0, 10, 20] : 0, 
          opacity: active ? [0, 1, 0] : 0.1 
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="text-primary/70"
      >
        <ArrowDown className="w-4 h-4" />
      </motion.div>
      <div className={cn("w-px h-full border-l border-dashed", active ? "border-primary/30" : "border-border/20")} />
    </div>
  )
}
