"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 relative bg-card/10">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionHeading title="Start a Project." subtitle="Tell us about your idea, and we'll help you build it." centered />

        <div className="mt-12">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-border rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px] shadow-lg"
            >
              <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Inquiry Sent Successfully</h3>
              <p className="text-muted-foreground text-lg max-w-md">
                Thank you for reaching out to Nurmasters. Our engineering team will review your project details and contact you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Name</label>
                  <input required type="text" className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Email</label>
                  <input required type="email" className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Company</label>
                <input type="text" className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Your Company Name" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Project Type</label>
                  <select required className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="" disabled selected>Select an option</option>
                    <option value="ai">AI Product</option>
                    <option value="web">Web Application</option>
                    <option value="software">Software Development</option>
                    <option value="automation">Automation</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Budget Range</label>
                  <select required className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="" disabled selected>Select budget</option>
                    <option value="small">Under $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="large">$50,000 - $100,000</option>
                    <option value="enterprise">$100,000+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Message / Project Details</label>
                <textarea required rows={5} className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Describe your idea, requirements, and timeline..." />
              </div>

              <Button type="submit" size="lg" className="w-full mt-4 h-12 text-base" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
