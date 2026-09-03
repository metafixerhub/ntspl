"use client"

import * as React from "react"
import { useAuth } from "@/context/AuthContext"
import { motion } from "framer-motion"
import { FolderKanban, Clock, ArrowRight, MessageSquare, Activity } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function DashboardPage() {
  const { user } = useAuth()
  
  const stats = [
    { label: "Active Projects", value: "0", icon: FolderKanban, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Pending Inquiries", value: "1", icon: MessageSquare, color: "text-amber-500", bg: "bg-amber-500/10" },
    { label: "Hours Logged", value: "0h", icon: Clock, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Activity className="w-64 h-64 text-primary" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">
            Welcome back, {user?.displayName?.split(" ")[0] || "User"}! 👋
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Here's an overview of your projects and recent activity. We're excited to continue building the future together.
          </p>
          <div className="mt-8 flex gap-4">
            <Button>
              Start New Project
            </Button>
            <Button variant="outline">
              View Analytics
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg}`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Activity & Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Projects</h3>
            <Link href="/dashboard/projects" className="text-sm text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-border rounded-lg bg-muted/30">
            <FolderKanban className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
            <p className="font-medium">No active projects yet</p>
            <p className="text-sm text-muted-foreground mt-1 mb-4">Start a new project to see it here.</p>
            <Button variant="secondary" size="sm">Create Project</Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Activity Timeline</h3>
          </div>
          
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-border pb-6">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-card" />
              <p className="text-sm font-medium">Account Created</p>
              <p className="text-xs text-muted-foreground mt-1">Just now</p>
              <p className="text-sm text-muted-foreground mt-2">
                Welcome to Nurmasters Technology Solutions. Your profile has been successfully configured.
              </p>
            </div>
            <div className="relative pl-6 border-l-2 border-border border-transparent">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-muted ring-4 ring-card" />
              <p className="text-sm font-medium text-muted-foreground">Waiting for first project</p>
              <p className="text-xs text-muted-foreground mt-1">Pending</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
