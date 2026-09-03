import { Bot, LineChart, Code2, Cpu } from "lucide-react"

export const products = [
  {
    id: "prod-1",
    name: "Nexus AI Platform",
    category: "AI Product",
    description: "An experimental platform leveraging large language models to automate and optimize enterprise workflows securely.",
    status: "EXPERIMENTAL" as const,
    tags: ["Generative AI", "Python", "Next.js"],
    icon: Bot,
    color: "from-blue-500/20 to-blue-600/5",
    details: {
      problem: "Enterprises struggle to safely integrate LLMs into proprietary workflows.",
      solution: "A secure, private AI orchestrator that connects to internal APIs and data sources.",
      features: ["Custom model fine-tuning", "Secure data enclosures", "API integrations"],
      techStack: ["React", "Python", "PostgreSQL", "LangChain"],
      status: "Currently in internal experimental phase.",
      roadmap: ["Beta release Q4", "Enterprise API", "Multi-agent support"]
    }
  },
  {
    id: "prod-2",
    name: "Quantify",
    category: "Data & Analytics",
    description: "Real-time analytics engine processing high-volume event streams for SaaS applications.",
    status: "LIVE" as const,
    tags: ["Analytics", "Data Pipeline", "Node.js"],
    icon: LineChart,
    color: "from-violet-500/20 to-violet-600/5",
    details: {
      problem: "Current analytics solutions are too slow for real-time operational decisions.",
      solution: "A high-throughput event processing engine with sub-second query latency.",
      features: ["Real-time dashboards", "Custom event tracking", "Automated anomaly detection"],
      techStack: ["Next.js", "ClickHouse", "Kafka", "Node.js"],
      status: "Live in production with selected clients.",
      roadmap: ["Self-serve onboarding", "Predictive insights module"]
    }
  },
  {
    id: "prod-3",
    name: "DevForge",
    category: "Developer Tool",
    description: "Cloud-native development environment orchestrator for rapidly spinning up pre-configured workspaces.",
    status: "IN DEVELOPMENT" as const,
    tags: ["DevOps", "Cloud", "Go"],
    icon: Code2,
    color: "from-cyan-500/20 to-cyan-600/5",
    details: {
      problem: "Developer onboarding and local environment setup is fragile and time-consuming.",
      solution: "One-click cloud workspaces defined by code.",
      features: ["Containerized workspaces", "IDE integration", "Secret management"],
      techStack: ["Go", "Kubernetes", "React", "Docker"],
      status: "In active development. Alpha testing soon.",
      roadmap: ["Private beta", "VS Code extension", "Team sharing"]
    }
  },
  {
    id: "prod-4",
    name: "AutoOps",
    category: "Automation",
    description: "Intelligent infrastructure automation system that learns and resolves common server incidents.",
    status: "EXPERIMENTAL" as const,
    tags: ["Machine Learning", "Infrastructure", "Python"],
    icon: Cpu,
    color: "from-primary/20 to-secondary/5",
    details: {
      problem: "SREs spend too much time resolving repetitive alerts.",
      solution: "An ML-driven runbook executor that learns from past incidents.",
      features: ["Auto-remediation", "Incident post-mortems", "Slack integration"],
      techStack: ["Python", "TensorFlow", "Go", "AWS"],
      status: "Experimental research prototype.",
      roadmap: ["Proof of concept", "Initial AI training phase"]
    }
  }
]
