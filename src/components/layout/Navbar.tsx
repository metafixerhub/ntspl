"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/#products" },
  { name: "Working", href: "/#working" },
  { name: "Team", href: "/#team" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Certificates", href: "/#certificates" },
  { name: "Join the Team", href: "/#careers" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/70 backdrop-blur-md border-border shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="relative w-10 h-10 overflow-hidden rounded-md bg-white">
              {/* Note: The logo will be loaded from public/LOGO.png */}
              <img src="/LOGO.png" alt="Nurmasters Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wider leading-none">NURMASTERS</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                Technology Solutions Pvt Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary relative group",
                      pathname === link.href ? "text-primary" : "text-foreground/80"
                    )}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 ml-4 pl-4 border-l">
              <ThemeToggle />
              <Button>Start a Project</Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex xl:hidden items-center gap-4 z-50">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 border-b border-border/50 font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-8 mb-6">
              <p className="text-muted-foreground text-sm mb-4">
                Building intelligent products and modern digital experiences.
              </p>
              <Button className="w-full" size="lg">Start a Project</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
