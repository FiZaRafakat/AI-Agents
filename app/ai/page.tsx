"use client";

import { motion } from "framer-motion";
import { Brain, Code, Database, MessageSquare, Search, Sparkles } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function AIPage() {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Natural Language Processing",
      description: "Advanced language understanding and generation capabilities",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Self-improving algorithms that adapt to your needs",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Intelligent Search",
      description: "Context-aware search and information retrieval",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Code Generation",
      description: "Automated code generation and optimization",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analysis",
      description: "Deep insights from complex data sets",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Creative Generation",
      description: "AI-powered content and design creation",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Powered by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Advanced AI
            </span>
          </h1>
          <div className="h-12 text-xl sm:text-2xl text-muted-foreground">
            <Typewriter
              options={{
                strings: [
                  "Understanding human language...",
                  "Analyzing complex data...",
                  "Generating creative solutions...",
                  "Learning and adapting...",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card border border-border"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">See AI in Action</h2>
          <div className="bg-muted p-4 rounded-lg">
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
              <div className="h-4 bg-muted-foreground/20 rounded w-1/2"></div>
              <div className="h-4 bg-muted-foreground/20 rounded w-5/6"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}