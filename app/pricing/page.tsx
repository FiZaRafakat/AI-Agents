"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      features: [
        "Basic AI assistance",
        "5 AI queries per day",
        "Standard response time",
        "Email support",
        "Basic analytics",
      ],
    },
    {
      name: "Pro",
      price: "99",
      popular: true,
      features: [
        "Advanced AI features",
        "Unlimited AI queries",
        "Priority response time",
        "24/7 priority support",
        "Advanced analytics",
        "Custom AI training",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      price: "299",
      features: [
        "Full AI suite access",
        "Unlimited everything",
        "Instant response time",
        "Dedicated support team",
        "Custom solutions",
        "Advanced security",
        "SLA guarantee",
        "White-label options",
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
            Simple,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Transparent
            </span>{" "}
            Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-xl bg-card border ${
                plan.popular
                  ? "border-primary/50 shadow-lg shadow-primary/20"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="text-sm text-primary mb-4 font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-2">
                Can I switch plans anytime?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="text-left p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for
                enterprise customers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}