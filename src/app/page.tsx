'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ThreeIcosahedron from '@/components/ThreeIcosahedron';
import TechMarquee from '@/components/TechMarquee';
import ServiceBento from '@/components/ServiceBento';
import PortfolioStack from '@/components/PortfolioStack';
import Timeline from '@/components/Timeline';
import StatsSection from '@/components/StatsSection';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

export default function Home() {
  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.1 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Zokle Agency",
    "url": "https://zokle.agency",
    "logo": "https://zokle.agency/images/logo.png",
    "image": "https://zokle.agency/images/cover.jpg",
    "description": "Premium web design and development agency specializing in Next.js, custom e-commerce stores, and high-performance SEO results.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94107",
      "addressCountry": "US"
    },
    "telephone": "+1-555-123-4567",
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/zokle.agency",
      "https://linkedin.com/company/zokle",
      "https://twitter.com/zokle"
    ]
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-73px)] pt-16 md:pt-24 mb-16">
        
        {/* Left column: Text Content */}
        <motion.div
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          <motion.div
            variants={childVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-bg text-electric-violet font-display text-xs font-bold uppercase tracking-wider mb-6"
          >
            Design & Development Agency
          </motion.div>

          <motion.h1
            variants={childVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-foreground leading-[1.1] tracking-tight mb-6"
          >
            We Build <span className="text-electric-violet">Websites</span> That Grow Your Business
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="font-body text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            High-performance, visual-first digital experiences engineered to turn visitors into paying customers. Precision code for modern companies.
          </motion.p>

          <motion.div variants={childVariants} className="flex flex-wrap gap-4 mb-12 w-full sm:w-auto">
            <Link
              href="/contact"
              className="bg-electric-violet text-white px-8 py-4.5 rounded-full font-display text-base font-bold text-center glow-button shadow-lg shadow-electric-violet/10 w-full sm:w-auto"
            >
              Book a Free Call
            </Link>
            <Link
              href="/work"
              className="border border-glass-border hover:border-foreground/20 bg-glass-bg text-foreground px-8 py-4.5 rounded-full font-display text-base font-bold text-center transition-all duration-300 w-full sm:w-auto hover:bg-glass-bg/80"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Strip */}
          <motion.div variants={childVariants} className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Client Avatar 1"
                className="w-9 h-9 rounded-full border-2 border-background object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Client Avatar 2"
                className="w-9 h-9 rounded-full border-2 border-background object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Client Avatar 3"
                className="w-9 h-9 rounded-full border-2 border-background object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
              />
              <div className="w-9 h-9 rounded-full border-2 border-background bg-glass-bg text-foreground flex items-center justify-center text-xs font-bold">
                +50
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-semibold">
              Trusted by 50+ local businesses worldwide
            </p>
          </motion.div>
        </motion.div>

        {/* Right column: 3D Visualizer Mesh */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-5 w-full relative flex items-center justify-center z-0"
        >
          <ThreeIcosahedron />
          {/* Subtle background glow effect behind Three.js */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-electric-violet/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </motion.div>
      </section>

      {/* Tech marquee strip */}
      <TechMarquee />

      {/* Services overview bento grid */}
      <ServiceBento />

      {/* 3D stacked portfolio preview */}
      <PortfolioStack />

      {/* Timeline Roadmap */}
      <Timeline />

      {/* Scroll countup stats */}
      <StatsSection />

      {/* Accordion FAQ */}
      <FAQAccordion />

      {/* Call to action section */}
      <CTASection />
    </div>
  );
}
