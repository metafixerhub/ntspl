"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { X, ArrowRight, CheckCircle2 } from "lucide-react"

const roles = [
  { id: 1, title: "Frontend Developer", type: "Full-time", location: "Remote", status: "OPEN" },
  { id: 2, title: "AI Developer", type: "Full-time", location: "Hybrid", status: "OPEN" },
  { id: 3, title: "Backend Developer", type: "Full-time", location: "Remote", status: "COMING SOON" },
  { id: 4, title: "UI/UX Designer", type: "Contract", location: "Remote", status: "CLOSED" },
]

export function CareersSection() {
  const [applyRole, setApplyRole] = React.useState<string | null>(null)
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setApplyRole(null)
    }, 3000)
  }

  return (
    <section id="careers" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start">
          
          <div className="w-full md:w-1/3">
            <SectionHeading 
              title="Build With Us." 
              subtitle="We are looking for curious builders, developers, designers, researchers, and problem-solvers who want to learn, experiment, and create meaningful technology." 
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group hover:border-primary/50 transition-colors shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{role.type}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{role.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Badge variant={
                    role.status === "OPEN" ? "default" :
                    role.status === "COMING SOON" ? "secondary" : "outline"
                  }>
                    {role.status}
                  </Badge>
                  
                  <Button 
                    variant="ghost" 
                    className="ml-auto sm:ml-0 gap-2 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30"
                    disabled={role.status !== "OPEN"}
                    onClick={() => setApplyRole(role.title)}
                  >
                    Apply <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {applyRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !submitted && setApplyRole(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              <div className="flex justify-between items-center p-6 border-b border-border bg-muted/20">
                <div>
                  <h3 className="font-bold text-xl">Application Form</h3>
                  <p className="text-sm text-primary">Applying for: {applyRole}</p>
                </div>
                {!submitted && (
                  <button onClick={() => setApplyRole(null)} className="p-2 hover:bg-background rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6" />
                    <h2 className="text-2xl font-bold mb-2">Application Received</h2>
                    <p className="text-muted-foreground">Thank you for your interest. We will review your application and get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input required type="text" className="bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors" placeholder="Jane Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Email</label>
                        <input required type="email" className="bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors" placeholder="jane@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Portfolio / Website</label>
                        <input type="url" className="bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors" placeholder="https://" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">GitHub / LinkedIn</label>
                        <input type="url" className="bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors" placeholder="https://" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium">Why do you want to join?</label>
                      <textarea required rows={4} className="bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about yourself and why you'd be a great fit..." />
                    </div>

                    <div className="flex justify-end gap-4 mt-4 border-t border-border pt-6">
                      <Button type="button" variant="ghost" onClick={() => setApplyRole(null)}>Cancel</Button>
                      <Button type="submit">Submit Application</Button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
