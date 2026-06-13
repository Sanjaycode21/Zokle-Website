'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { processRoadmap } from '@/lib/data';

export default function Timeline() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32" id="process">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-electric-violet font-display text-xs font-bold uppercase tracking-wider block mb-3">
          Our Method
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          The Roadmap to Success
        </h2>
      </div>

      <div className="relative py-8">
        {/* Progress connecting line for desktop */}
        <div className="absolute top-[80px] left-[5%] right-[5%] h-[2px] bg-glass-border hidden lg:block z-0" />
        
        {/* Grid steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
        >
          {processRoadmap.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="flex flex-col items-start lg:items-start group"
            >
              {/* Step indicator circle */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display text-xl font-bold mb-6 transition-all duration-500 shadow-md ${
                  index === 0
                    ? 'bg-electric-violet text-white shadow-electric-violet/25'
                    : 'bg-glass-bg border border-glass-border text-foreground group-hover:bg-electric-violet group-hover:text-white group-hover:border-electric-violet group-hover:shadow-electric-violet/25'
                }`}
              >
                {step.number}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-extrabold mb-3 text-foreground group-hover:text-electric-violet transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
