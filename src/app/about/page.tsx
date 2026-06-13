'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, Award, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Eye,
      title: 'Visual Excellence',
      desc: 'We design pixel-perfect layouts that wow users at first glance, keeping brand identities premium and creative.',
    },
    {
      icon: Sparkles,
      title: 'Micro-Interactions',
      desc: 'Fluid scroll reveals, cursor displacements, and elastic physics transitions that make applications feel alive.',
    },
    {
      icon: Award,
      title: 'Core Performance',
      desc: 'Building on Next.js, React, and TypeScript to deliver blazing-fast page loads and top SEO compliance scores.',
    },
    {
      icon: Shield,
      title: 'Client ROI',
      desc: 'Conversion-driven layouts and form funnels that turn simple web traffic into qualified customer pipelines.',
    },
  ];

  const teamMembers = [
    {
      name: 'Elena Rostova',
      role: 'Principal UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Sanjay Patel',
      role: 'Lead Full-Stack Engineer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Marcus Vance',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 md:py-32 flex flex-col flex-1 w-full">
      {/* Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-electric-violet font-display text-xs font-bold uppercase tracking-wider block mb-3">
          About Zokle
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          The Agency Behind the Pixels
        </h1>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Zokle is a premium web design and development agency. We engineer responsive, visual-first platforms that turn visitors into loyal customers.
        </p>
      </div>

      {/* Grid of Values */}
      <div className="mb-24">
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-12 text-center">
          Our Core Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-electric-violet/10 border border-electric-violet/20 flex items-center justify-center text-electric-violet mb-6">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {val.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Team profiles */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-12 text-center">
          Meet the Specialists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center text-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full border border-glass-border object-cover mb-6 shadow-md"
              />
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-xs text-muted-foreground font-semibold">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
