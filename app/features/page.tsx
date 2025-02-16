"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  ChartBar,
  Code2,
  FileText,
  Globe,
  Lock,
  MessageSquare,
  Search,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Advanced AI Models",
      description:
        "State-of-the-art machine learning models trained on diverse datasets",
      category: "Core Technology",
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "Natural Language Processing",
      description:
        "Advanced language understanding and generation for human-like interactions",
      category: "Core Technology",
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "Semantic Search",
      description:
        "Context-aware search capabilities for accurate information retrieval",
      category: "Search & Analysis",
    },
    {
      icon: <ChartBar className="h-12 w-12" />,
      title: "Advanced Analytics",
      description: "Deep insights and pattern recognition from complex datasets",
      category: "Search & Analysis",
    },
    {
      icon: <Code2 className="h-12 w-12" />,
      title: "Code Generation",
      description: "Automated code generation and optimization for developers",
      category: "Development",
    },
    {
      icon: <Bot className="h-12 w-12" />,
      title: "Custom AI Agents",
      description: "Specialized AI agents trained for specific tasks and domains",
      category: "Development",
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Document Analysis",
      description: "Intelligent processing and understanding of documents",
      category: "Content",
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Creative Generation",
      description: "AI-powered content creation and creative assistance",
      category: "Content",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Enterprise Security",
      description: "Advanced security measures for enterprise deployments",
      category: "Security",
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Data Privacy",
      description: "Strong data protection and privacy compliance",
      category: "Security",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Global Scale",
      description: "Worldwide infrastructure for low-latency access",
      category: "Infrastructure",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Real-time Processing",
      description: "Instant processing and response capabilities",
      category: "Infrastructure",
    },
  ];

  const categories = Array.from(
    new Set(features.map((feature) => feature.category))
  );

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Powerful{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Features
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover our comprehensive suite of AI capabilities
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="text-2xl font-bold mb-8"
            >
              {category}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features
                .filter((feature) => feature.category === category)
                .map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + index * 0.1,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="mb-4 text-primary">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}