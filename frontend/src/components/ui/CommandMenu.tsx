"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Monitor, Terminal, User, Briefcase, Mail, LayoutDashboard, Settings } from "lucide-react"
import { useRouter } from "next/navigation"

type CommandItem = {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
  category: string;
}

const commandItems: CommandItem[] = [
  { id: "home", name: "Home", icon: <Monitor className="w-4 h-4" />, href: "/", category: "Navigation" },
  { id: "products", name: "Products", icon: <LayoutDashboard className="w-4 h-4" />, href: "/#products", category: "Navigation" },
  { id: "working", name: "Working Pipeline", icon: <Settings className="w-4 h-4" />, href: "/#working", category: "Navigation" },
  { id: "team", name: "Team", icon: <User className="w-4 h-4" />, href: "/#team", category: "Navigation" },
  { id: "careers", name: "Careers", icon: <Briefcase className="w-4 h-4" />, href: "/#careers", category: "Navigation" },
  { id: "contact", name: "Contact", icon: <Mail className="w-4 h-4" />, href: "/#contact", category: "Navigation" },
]

export function CommandMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filteredItems = commandItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (href: string) => {
    setIsOpen(false)
    setQuery("")
    router.push(href)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 hover:bg-muted border border-border rounded-md transition-colors w-64"
      >
        <Search className="w-4 h-4" />
        <span>Search documentation...</span>
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              <div className="flex items-center px-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground mr-3" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 h-14 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                  autoFocus
                />
                <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-1 rounded border border-border bg-muted px-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="py-14 px-4 text-center text-sm text-muted-foreground">
                    No results found for "{query}"
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2 mb-1">
                      Navigation
                    </div>
                    {filteredItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.href)}
                        className="flex items-center gap-3 w-full px-3 py-3 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group text-left"
                      >
                        <div className="text-muted-foreground group-hover:text-accent-foreground">
                          {item.icon}
                        </div>
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t border-border p-3 text-xs text-muted-foreground bg-muted/20 flex justify-between">
                <span>Use <kbd className="font-mono bg-muted border border-border rounded px-1">↑</kbd> <kbd className="font-mono bg-muted border border-border rounded px-1">↓</kbd> to navigate</span>
                <span><kbd className="font-mono bg-muted border border-border rounded px-1">Enter</kbd> to select</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
