"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import ParticlesBackground from "@/components/particles-background";


export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
              The Future of AI
              <br />
              Is Here
            </h1>
            <div className="h-12 mb-8 text-xl sm:text-2xl text-muted-foreground">
              <Typewriter
                options={{
                  strings: [
                    "Advanced Natural Language Processing",
                    "Real-time AI Assistance",
                    "Intelligent Automation",
                    "Smart Decision Making",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/ai">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">
                  Learn More
                  <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="Advanced AI"
              description="State-of-the-art artificial intelligence powered by cutting-edge technology"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Real-time Processing"
              description="Lightning-fast processing for immediate results and insights"
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Smart Automation"
              description="Intelligent automation that learns and adapts to your needs"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}