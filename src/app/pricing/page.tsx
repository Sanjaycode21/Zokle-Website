'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { pricingPlans } from '@/lib/data';

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 md:py-32 flex flex-col flex-1 w-full">
      {/* Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-electric-violet font-display text-xs font-bold uppercase tracking-wider block mb-3">
          Pricing
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Clear, Transparent Plans
        </h1>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Select the option matching your rollout budget and required digital features.
        </p>
      </div>

      {/* Pricing cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto w-full">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass-card p-8 md:p-10 rounded-3xl flex flex-col relative ${
              plan.isPopular
                ? 'border-electric-violet ring-1 ring-electric-violet/40 shadow-xl shadow-electric-violet/5 scale-105 z-10'
                : 'z-0'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-violet text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-display shadow-md shadow-electric-violet/20">
                Most Popular
              </div>
            )}
            <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-foreground">
              {plan.name}
            </h3>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-3xl md:text-4xl font-extrabold text-foreground">{plan.price}</span>
              {plan.frequency && (
                <span className="text-xs text-muted-foreground font-semibold">/{plan.frequency}</span>
              )}
            </div>
            
            {/* Features list */}
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-xs md:text-sm text-foreground/80">
                  <span className="w-5 h-5 rounded-full bg-electric-violet/10 border border-electric-violet/20 text-electric-violet flex items-center justify-center flex-shrink-0">
                    <Check size={12} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`w-full py-4 rounded-xl font-display font-bold text-sm text-center transition-all ${
                plan.isPopular
                  ? 'bg-electric-violet text-white glow-button shadow-md'
                  : 'bg-glass-bg border border-glass-border hover:bg-glass-bg/80 text-foreground'
              }`}
            >
              {plan.ctaText}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
