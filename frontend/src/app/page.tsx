import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PageWrapper } from "@/components/layout/PageWrapper"

import { HeroSection } from "@/components/sections/HeroSection"
import { TrustStatsSection } from "@/components/sections/TrustStatsSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ProductsSection } from "@/components/sections/ProductsSection"
import { WorkingPipelineSection } from "@/components/sections/WorkingPipelineSection"
import { ArchitectureSection } from "@/components/sections/ArchitectureSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { TeamSection } from "@/components/sections/TeamSection"
import { ReviewsSection } from "@/components/sections/ReviewsSection"
import { CertificatesSection } from "@/components/sections/CertificatesSection"
import { CareersSection } from "@/components/sections/CareersSection"
import { CtaSection } from "@/components/sections/CtaSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="flex flex-col min-h-screen">
          <HeroSection />
          <TrustStatsSection />
          <AboutSection />
          <ProductsSection />
          <WorkingPipelineSection />
          <ArchitectureSection />
          <TechStackSection />
          <TeamSection />
          <ReviewsSection />
          <CertificatesSection />
          <CareersSection />
          <CtaSection />
          <ContactSection />
        </main>
      </PageWrapper>
      <Footer />
    </>
  )
}
