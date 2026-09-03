"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Database, Layout, Server, Cloud, Bot, Code, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="glass" className="mb-6 px-4 py-1.5 text-sm uppercase tracking-widest text-primary">
                AI • SOFTWARE • INNOVATION
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Building the <br className="hidden md:block" />
              <span className="text-gradient">Technology</span> <br className="hidden md:block" />
              Behind Tomorrow.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            >
              We design intelligent products, engineer powerful software, and turn ambitious ideas into scalable digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                <Link href="/#products">Explore Our Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                <Link href="/#careers">Join the Team</Link>
              </Button>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs text-muted-foreground uppercase tracking-widest mt-8 font-semibold"
            >
              AI • Web Development • Software Engineering • Automation
            </motion.p>
          </div>

          {/* Visualization Core */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-square hidden md:flex items-center justify-center">
            <CoreVisualization />
          </div>
        </div>
      </div>
    </section>
  )
}

function CoreVisualization() {
  const nodes = [
    { icon: Bot, label: "AI", angle: 0 },
    { icon: Layout, label: "Frontend", angle: 51 },
    { icon: Server, label: "Backend", angle: 102 },
    { icon: Code, label: "APIs", angle: 154 },
    { icon: Cloud, label: "Cloud", angle: 205 },
    { icon: Cpu, label: "Automation", angle: 257 },
    { icon: Database, label: "Data", angle: 308 },
  ]

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        animate={{ 
          boxShadow: ["0 0 20px rgba(59,130,246,0.5)", "0 0 60px rgba(59,130,246,0.8)", "0 0 20px rgba(59,130,246,0.5)"]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 rounded-full bg-background border border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center z-20 backdrop-blur-xl"
      >
        <Bot className="w-10 h-10 text-primary" />
      </motion.div>

      {/* Rotating Nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-primary/20 z-10"
      >
        {nodes.map((node, i) => {
          const radius = 160 // half of 320px
          const x = radius * Math.cos((node.angle * Math.PI) / 180)
          const y = radius * Math.sin((node.angle * Math.PI) / 180)
          
          return (
            <motion.div
              key={node.label}
              className="absolute w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg"
              style={{
                left: '50%',
                top: '50%',
                x: x - 24, // subtract half width
                y: y - 24, // subtract half height
              }}
              // Counter-rotate so icons stay upright
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <node.icon className="w-5 h-5 text-muted-foreground" />
              
              {/* Node Label Tooltip */}
              <div className="absolute -top-8 whitespace-nowrap bg-background border border-border px-2 py-1 rounded text-[10px] font-medium opacity-0 hover:opacity-100 transition-opacity">
                {node.label}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="line-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </radialGradient>
        </defs>
        {nodes.map((node, i) => {
          const radius = 160
          const x = 200 + radius * Math.cos((node.angle * Math.PI) / 180)
          const y = 200 + radius * Math.sin((node.angle * Math.PI) / 180)
          return (
            <line
              key={`line-${i}`}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          )
        })}
      </svg>
    </div>
  )
}
