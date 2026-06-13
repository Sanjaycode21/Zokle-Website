'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Search, Zap, MousePointerClick, Check } from 'lucide-react';
import { servicesData } from '@/lib/data';

const iconMap: { [key: string]: React.ComponentType<{ size: number; className?: string }> } = {
  web: Monitor,
  shopping_cart: ShoppingCart,
  search: Search,
  speed: Zap,
  ads_click: MousePointerClick,
};

const serviceDeliverables: { [key: string]: string[] } = {
  'web-design': [
    'Custom UI/UX Prototypes',
    'Full Mobile Responsiveness',
    'Interactive Animations',
    'Custom Web Components',
  ],
  ecommerce: [
    'Shopping Cart Optimization',
    'Payment Gateway Setup',
    'Inventory Management Sync',
    'Conversion Funnel Audits',
  ],
  seo: [
    'On-Page Schema Formatting',
    'Keyword Optimization',
    'Sitemap Configurations',
    'Google Search Console Setup',
  ],
  performance: [
    'Page Speed Optimization',
    'Next.js Dynamic Splitting',
    'Image Format Compression',
    'CDN Deployments',
  ],
  'lead-gen': [
    'High-Converting Landing Pages',
    'A/B Testing Integrations',
    'Analytics Monitoring Tools',
    'Lead Hook Automations',
  ],
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 md:py-32 flex flex-col flex-1">
      {/* Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-electric-violet font-display text-xs font-bold uppercase tracking-wider block mb-3">
          Our Services
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          High-Impact Digital Capabilities
        </h1>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          We combine cutting-edge technology stacks with visual excellence to deliver products that grow businesses.
        </p>
      </div>

      {/* Services detailed list */}
      <div className="space-y-8 md:space-y-12">
        {servicesData.map((service, index) => {
          const Icon = iconMap[service.iconName] || Monitor;
          const deliverables = serviceDeliverables[service.id] || [];
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass-card p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Icon & Content */}
              <div className="lg:col-span-7">
                <div className="w-12 h-12 rounded-2xl bg-electric-violet/10 border border-electric-violet/20 flex items-center justify-center text-electric-violet mb-6">
                  <Icon size={24} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Right Column: Deliverables Checklist */}
              <div className="lg:col-span-5 bg-background/50 border border-glass-border p-6 md:p-8 rounded-2xl">
                <h3 className="text-xs font-bold font-display uppercase tracking-wider text-foreground mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs md:text-sm text-foreground/80">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check size={12} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
