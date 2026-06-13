'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/lib/data';

export default function PortfolioStack() {
  const [indices, setIndices] = useState([0, 1, 2]);
  const [isHovered, setIsHovered] = useState(false);
  const autoCycleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const rotateStack = (direction: 'next' | 'prev') => {
    setIndices((prev) => {
      const next = [...prev];
      if (direction === 'next') {
        const first = next.shift()!;
        next.push(first);
      } else {
        const last = next.pop()!;
        next.unshift(last);
      }
      return next;
    });
  };

  // Auto-cycle stack cards every 5 seconds (only when not hovered)
  useEffect(() => {
    if (isHovered) {
      if (autoCycleTimerRef.current) clearInterval(autoCycleTimerRef.current);
      return;
    }

    autoCycleTimerRef.current = setInterval(() => {
      rotateStack('next');
    }, 5000);

    return () => {
      if (autoCycleTimerRef.current) clearInterval(autoCycleTimerRef.current);
    };
  }, [isHovered]);

  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32 overflow-hidden"
      id="portfolio"
    >
      {/* Title & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
        <div>
          <span className="text-electric-violet font-display text-xs font-bold uppercase tracking-wider block mb-3">
            Selected Work
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Featured Projects
          </h2>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <button
            onClick={() => rotateStack('prev')}
            aria-label="Previous Project"
            className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center hover:bg-electric-violet hover:text-white transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => rotateStack('next')}
            aria-label="Next Project"
            className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center hover:bg-electric-violet hover:text-white transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* 3D Stack Container */}
      <div
        className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center"
        style={{ perspective: '2000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {portfolioData.map((project, idx) => {
          // Find the order index in the rotated indices array
          const orderIndex = indices.indexOf(idx);
          const totalItems = portfolioData.length;
          const zIndex = totalItems - orderIndex;

          // Determine fanning variables based on orderIndex
          let transform = '';
          let opacity = 1;
          let pointerEvents: 'auto' | 'none' = 'auto';

          if (orderIndex === 0) {
            transform = 'translate3d(0px, 0px, 0px) rotateX(0deg) scale(1)';
            opacity = 1;
            pointerEvents = 'auto';
          } else if (orderIndex === 1) {
            transform = 'translate3d(0px, -40px, -100px) rotateX(5deg) scale(0.95)';
            opacity = 0.85;
            pointerEvents = 'none';
          } else {
            transform = 'translate3d(0px, -80px, -200px) rotateX(10deg) scale(0.9)';
            opacity = 0.55;
            pointerEvents = 'none';
          }

          return (
            <div
              key={project.id}
              className="portfolio-stack-item absolute inset-0 w-full rounded-2xl md:rounded-3xl overflow-hidden glass-card cursor-pointer group shadow-2xl"
              style={{
                zIndex,
                transform,
                opacity,
                pointerEvents,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onClick={() => {
                if (orderIndex > 0) {
                  // Click a background card to bring it forward
                  if (orderIndex === 1) rotateStack('next');
                  else rotateStack('prev');
                }
              }}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.imageSrc}
                alt={project.dataAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient & Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 md:p-12 flex flex-col justify-end">
                <span className="text-electric-violet font-display text-xs md:text-sm font-bold tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-extrabold text-white mb-2 leading-none">
                  {project.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Portfolio Button */}
      <div className="text-center mt-12 md:mt-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 border border-glass-border hover:border-electric-violet bg-glass-bg text-foreground px-8 py-4 rounded-full font-display font-semibold transition-all duration-300 hover:scale-105 hover:bg-electric-violet/10"
        >
          View Full Portfolio
        </Link>
      </div>
    </section>
  );
}
