'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/lib/data';

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'gym', label: 'Gym & Fitness', category: 'Gym & Fitness Website' },
    { id: 'salon', label: 'Salon & Beauty', category: 'Salon & Beauty Website' },
    { id: 'restaurant', label: 'Restaurant', category: 'Restaurant Website' },
  ];

  const filteredProjects = portfolioData.filter((project) => {
    if (activeTab === 'all') return true;
    const tab = filterTabs.find((t) => t.id === activeTab);
    return project.category === tab?.category;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 md:py-32 flex flex-col flex-1 w-full">
      {/* Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-electric-violet font-display text-xs font-bold uppercase tracking-wider block mb-3">
          Our Portfolio
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Selected Creative Work
        </h1>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Explore our recent build rollouts. We engineer visual excellence with high-performance execution.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full font-display text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-electric-violet text-white shadow-lg shadow-electric-violet/25 scale-105'
                : 'bg-glass-bg border border-glass-border text-foreground hover:bg-glass-bg/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-card rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-xl flex flex-col h-[380px] sm:h-[450px]"
            >
              {/* Image Container */}
              <div className="relative w-full h-[65%] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.imageSrc}
                  alt={project.dataAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-electric-violet flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow bg-background/40">
                <div>
                  <span className="text-electric-violet font-display text-[10px] md:text-xs font-bold tracking-wider uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-electric-violet transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="text-xs text-muted-foreground mt-4 leading-relaxed line-clamp-2">
                  {project.dataAlt}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
