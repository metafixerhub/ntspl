"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { MotionCard } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ExternalLink, X, Award } from "lucide-react"

const certificates = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect",
    org: "Amazon Web Services",
    date: "2025",
    credentialId: "AWS-12345-XXX",
    image: "/api/placeholder/600/400"
  },
  {
    id: "cert-2",
    title: "Google Cloud Professional Data Engineer",
    org: "Google Cloud",
    date: "2024",
    credentialId: "GCP-98765-YYY",
    image: "/api/placeholder/600/400"
  },
  {
    id: "cert-3",
    title: "Deep Learning Specialization",
    org: "DeepLearning.AI",
    date: "2023",
    credentialId: "DLAI-55555-ZZZ",
    image: "/api/placeholder/600/400"
  }
]

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = React.useState<typeof certificates[0] | null>(null)

  return (
    <section id="certificates" className="py-24 relative bg-card/10 border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Proof of Learning & Achievement." subtitle="Continuous improvement through certified expertise." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certificates.map((cert, index) => (
            <MotionCard
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="p-2">
                <div className="w-full h-48 bg-muted rounded-lg overflow-hidden relative border border-border">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
              <div className="p-6 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cert.org}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 leading-tight">{cert.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                  <span className="text-xs text-primary group-hover:underline">View Details</span>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-border bg-muted/20">
                <h3 className="font-semibold px-2">Certificate Details</h3>
                <button onClick={() => setSelectedCert(null)} className="p-2 hover:bg-background rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 bg-muted/10 flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full h-auto rounded-xl border border-border shadow-md"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedCert.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {selectedCert.org}</span>
                    <span>Issued: {selectedCert.date}</span>
                    {selectedCert.credentialId && (
                      <span className="font-mono bg-muted px-2 py-0.5 rounded text-xs text-foreground">ID: {selectedCert.credentialId}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4 w-full md:w-auto">
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium hover:bg-primary/90 transition-colors">
                    Verify Credential <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
