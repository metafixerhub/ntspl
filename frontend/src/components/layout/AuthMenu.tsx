"use client"

import * as React from "react"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/Button"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { AuthModal } from "@/components/ui/AuthModal"
import { LogOut, User as UserIcon, LayoutDashboard } from "lucide-react"
import Link from "next/link"

export function AuthMenu() {
  const { user, loading, signOut } = useAuth()
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  if (loading) {
    return (
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="w-20 h-9 bg-muted rounded animate-pulse" />
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        {user ? (
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-full hover:bg-muted transition-colors">
              {user.photoURL ? (
                <img src={user.photoURL} alt="User avatar" className="w-6 h-6 rounded-full" />
              ) : (
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <UserIcon className="w-3.5 h-3.5" />
                </div>
              )}
              <span className="text-sm font-medium max-w-[100px] truncate">
                {user.displayName || user.email}
              </span>
            </button>

            {/* Dropdown menu */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-2 group-hover:translate-y-0">
              <div className="p-2 flex flex-col gap-1">
                <div className="px-3 py-2 border-b border-border mb-1">
                  <p className="text-sm font-medium truncate">{user.displayName}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors text-left"
                >
                  <LayoutDashboard className="w-4 h-4 text-muted-foreground" />
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-md transition-colors text-left"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </button>
            <Button>Start a Project</Button>
          </div>
        )}
      </div>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
