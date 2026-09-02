import Link from "next/link"
import { Globe, Link as LinkIcon, Star, MessageCircle, Video } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8 overflow-hidden rounded-md bg-white">
                <img src="/LOGO.png" alt="Nurmasters Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-lg tracking-wider">NURMASTERS</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building intelligent products and modern digital experiences.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Star className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Video className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/#working" className="hover:text-primary transition-colors">Working</Link></li>
              <li><Link href="/#team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="/#reviews" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link href="/#certificates" className="hover:text-primary transition-colors">Certificates</Link></li>
              <li><Link href="/#careers" className="hover:text-primary transition-colors">Join the Team</Link></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-semibold mb-6">Technology</h4>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">AI & Generative AI</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Frontend Engineering</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Backend Engineering</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Automation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cloud Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold mb-6">Start Building</h4>
            <p className="text-muted-foreground mb-4">Ready to turn your idea into technology?</p>
            <Link href="/#contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Nurmasters Technology Solutions Private Limited.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
