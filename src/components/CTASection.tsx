'use client';

import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
      <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden p-8 md:p-20 text-center glass-card border-none bg-gradient-to-br from-electric-violet/35 to-transparent shadow-2xl shadow-electric-violet/5">
        
        {/* Decorative ambient elements */}
        <div className="absolute inset-0 opacity-10 dot-grid-bg pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-electric-violet/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-electric-violet/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Join dozens of successful brands that have partnered with Zokle to scale their digital infrastructure and aesthetic dominance.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-foreground text-background dark:bg-white dark:text-electric-violet px-10 py-4.5 rounded-full font-display font-bold text-base md:text-lg glow-button shadow-xl transition-all"
          >
            Start Your Project Today
          </Link>
        </div>
      </div>
    </section>
  );
}
