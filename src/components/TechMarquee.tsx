'use client';

import React from 'react';
import { Cpu, Code, Layers, Database, Cloud, Globe } from 'lucide-react';

const technologies = [
  { name: 'Next.js', icon: Cpu },
  { name: 'React', icon: Globe },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'Supabase', icon: Database },
  { name: 'Vercel', icon: Cloud },
  { name: 'TypeScript', icon: Code },
];

export default function TechMarquee() {
  // We double the list to ensure infinite scrolling is seamless
  const listItems = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative w-full overflow-hidden py-10 bg-glass-bg border-y border-glass-border mb-20 md:mb-32">
      {/* Edge gradient masks */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee row */}
      <div className="flex w-full select-none overflow-hidden">
        <div className="animate-marquee flex gap-12 md:gap-24 items-center whitespace-nowrap min-w-full">
          {listItems.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center gap-3 text-lg md:text-2xl font-bold font-display opacity-30 hover:opacity-100 hover:text-electric-violet hover:scale-105 transition-all duration-300 cursor-default"
              >
                <Icon size={24} className="stroke-[2.5]" />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
