"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { MotionCard, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ArrowRight, X } from "lucide-react"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = React.useState<typeof products[0] | null>(null)

  return (
    <section id="products" className="py-24 bg-card/10 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Technology We Build." subtitle="Products and tools engineered by Nurmasters." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {products.map((product, index) => (
            <MotionCard
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => setSelectedProduct(product)}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", product.color)} />
              
              <CardContent className="p-8 relative z-10 flex flex-col h-full min-h-[320px]">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm group-hover:border-primary/50 transition-colors">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Badge variant={
                    product.status === "LIVE" ? "default" :
                    product.status === "EXPERIMENTAL" ? "secondary" : "outline"
                  }>
                    {product.status}
                  </Badge>
                </div>

                <div className="mb-2">
                  <p className="text-sm font-medium text-primary mb-1 uppercase tracking-wider">{product.category}</p>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                </div>

                <p className="text-muted-foreground mb-8 flex-grow">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium bg-background border border-border px-2.5 py-1 rounded-md opacity-70 group-hover:opacity-100 transition-opacity">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors overflow-hidden relative">
                    <ArrowRight className="w-4 h-4 absolute -left-8 group-hover:left-2 transition-all duration-300" />
                    <ArrowRight className="w-4 h-4 absolute left-2 group-hover:left-8 transition-all duration-300" />
                  </div>
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-muted/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center">
                    <selectedProduct.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                    <p className="text-sm text-primary">{selectedProduct.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-background border border-transparent hover:border-border transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Overview</h4>
                      <p className="text-lg">{selectedProduct.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-background rounded-xl p-5 border border-border shadow-sm">
                        <h4 className="font-semibold text-red-400 mb-2">Problem</h4>
                        <p className="text-sm text-muted-foreground">{selectedProduct.details.problem}</p>
                      </div>
                      <div className="bg-background rounded-xl p-5 border border-border shadow-sm">
                        <h4 className="font-semibold text-emerald-400 mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{selectedProduct.details.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProduct.details.features.map(feature => (
                          <li key={feature} className="flex items-center gap-2 text-sm bg-muted/30 p-3 rounded-lg border border-border/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Status</h4>
                      <Badge className="mb-3">{selectedProduct.status}</Badge>
                      <p className="text-sm text-muted-foreground">{selectedProduct.details.status}</p>
                    </div>

                    <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.details.techStack.map(tech => (
                          <span key={tech} className="text-xs font-medium bg-muted px-2.5 py-1 rounded-md border border-border/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Roadmap</h4>
                      <ul className="space-y-3">
                        {selectedProduct.details.roadmap.map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm">
                            <span className="text-primary font-mono">{i + 1}.</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
