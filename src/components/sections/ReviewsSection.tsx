"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const reviews = [
  {
    id: 1,
    quote: "Nurmasters completely transformed our data infrastructure. Their AI-first approach allowed us to launch features we didn't think were possible yet.",
    name: "Placeholder Name",
    role: "CTO",
    company: "Placeholder Enterprise",
    image: "/api/placeholder/100/100"
  },
  {
    id: 2,
    quote: "The engineering quality is exceptional. They don't just write code, they architect solutions that scale.",
    name: "Placeholder Name",
    role: "Product Manager",
    company: "Placeholder Startup",
    image: "/api/placeholder/100/100"
  },
  {
    id: 3,
    quote: "A rare combination of futuristic design and robust backend engineering. They delivered our platform ahead of schedule.",
    name: "Placeholder Name",
    role: "Founder",
    company: "Placeholder Tech",
    image: "/api/placeholder/100/100"
  }
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)

  return (
    <section id="reviews" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="What People Say." centered />

        <div className="max-w-4xl mx-auto mt-12 relative">
          {/* Quote Mark Decoration */}
          <div className="absolute -top-10 -left-10 opacity-5">
            <Quote className="w-32 h-32" />
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden min-h-[350px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center text-center"
              >
                <p className="text-xl md:text-3xl font-light leading-relaxed mb-10 text-foreground/90">
                  "{reviews[currentIndex].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="text-left">
                    <h4 className="font-bold">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {reviews[currentIndex].role} at <span className="text-foreground">{reviews[currentIndex].company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card hover:border-primary/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    i === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card hover:border-primary/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
