'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Search, Zap, MousePointerClick } from 'lucide-react';
import { servicesData } from '@/lib/data';

// Map string icon names to Lucide components
const iconMap: { [key: string]: React.ComponentType<{ size: number; className?: string }> } = {
  web: Monitor,
  shopping_cart: ShoppingCart,
  search: Search,
  speed: Zap,
  ads_click: MousePointerClick,
};

export default function ServiceBento() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32" id="services">
      {/* Title */}
      <div className="mb-12 md:mb-16">
        <span className="text-electric-violet font-display text-xs font-bold uppercase tracking-wider block mb-3">
          Capabilities
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          What We Do
        </h2>
      </div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {servicesData.map((service) => {
          const IconComponent = iconMap[service.iconName] || Monitor;
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`${service.gridSpan} col-span-12 glass-card p-8 md:p-10 rounded-2xl flex flex-col justify-between group min-h-[220px] md:min-h-[260px]`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-electric-violet/10 border border-electric-violet/20 flex items-center justify-center text-electric-violet mb-6 group-hover:scale-110 group-hover:bg-electric-violet group-hover:text-white transition-all duration-300">
                  <IconComponent size={24} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl group-hover:text-foreground/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
