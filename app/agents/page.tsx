"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Code,
  FileText,
  Image,
  MessageSquare,
  Pencil,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgentsPage() {
  const agents = [
    {
      icon: <MessageSquare className="h-12 w-12" />,
      name: "Conversation Agent",
      description:
        "Engage in natural conversations with advanced language understanding",
      capabilities: [
        "Natural language processing",
        "Context awareness",
        "Personality adaptation",
        "Multi-language support",
      ],
    },
    {
      icon: <Code className="h-12 w-12" />,
      name: "Code Assistant",
      description:
        "Intelligent coding assistance with real-time suggestions and debugging",
      capabilities: [
        "Code generation",
        "Bug detection",
        "Code optimization",
        "Multiple language support",
      ],
    },
    {
      icon: <Brain className="h-12 w-12" />,
      name: "Research Assistant",
      description:
        "Comprehensive research support with data analysis and insights",
      capabilities: [
        "Data analysis",
        "Pattern recognition",
        "Literature review",
        "Citation management",
      ],
    },
    {
      icon: <Image className="h-12 w-12" />,
      name: "Creative Assistant",
      description: "AI-powered creative content generation and design assistance",
      capabilities: [
        "Image generation",
        "Design suggestions",
        "Style transfer",
        "Layout optimization",
      ],
    },
    {
      icon: <FileText className="h-12 w-12" />,
      name: "Document Processor",
      description: "Intelligent document analysis and information extraction",
      capabilities: [
        "Text extraction",
        "Document classification",
        "Summary generation",
        "Format conversion",
      ],
    },
    {
      icon: <Search className="h-12 w-12" />,
      name: "Search Agent",
      description: "Advanced search capabilities with semantic understanding",
      capabilities: [
        "Semantic search",
        "Relevance ranking",
        "Query understanding",
        "Content filtering",
      ],
    },
    {
      icon: <Bot className="h-12 w-12" />,
      name: "Task Automation",
      description: "Automated task execution and workflow optimization",
      capabilities: [
        "Process automation",
        "Workflow optimization",
        "Task scheduling",
        "Error handling",
      ],
    },
    {
      icon: <Pencil className="h-12 w-12" />,
      name: "Content Writer",
      description: "Professional content generation for various purposes",
      capabilities: [
        "Article writing",
        "Content optimization",
        "Style adaptation",
        "SEO optimization",
      ],
    },
  ];

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
            Meet Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              AI Agents
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Specialized AI agents designed for your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-xl bg-card border border-border group-hover:border-primary/50 transition-colors h-full flex flex-col">
                <div className="mb-4 text-primary">{agent.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
                <p className="text-muted-foreground mb-4">{agent.description}</p>
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2">Capabilities:</h4>
                  <ul className="space-y-2">
                    {agent.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Try Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}