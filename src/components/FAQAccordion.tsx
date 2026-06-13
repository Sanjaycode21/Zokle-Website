'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData } from '@/lib/data';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 md:px-12 mb-20 md:mb-32" id="faq">
      {/* Title */}
      <div className="text-center mb-12 md:mb-16">
        <span className="text-electric-violet font-display text-xs font-bold uppercase tracking-wider block mb-3">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Common Questions
        </h2>
      </div>

      {/* Accordion list */}
      <div className="space-y-4">
        {faqData.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? 'border-electric-violet/40 bg-glass-bg shadow-lg shadow-electric-violet/5'
                  : 'border-glass-border bg-glass-bg/50 hover:border-glass-border/80'
              }`}
            >
              {/* Question summary */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-6 flex justify-between items-center cursor-pointer select-none"
              >
                <span className="font-display text-base md:text-lg font-bold text-foreground">
                  {faq.question}
                </span>
                <span
                  className={`text-muted-foreground transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-electric-violet' : ''
                  }`}
                >
                  <ChevronDown size={20} />
                </span>
              </button>

              {/* Answer content with Framer Motion height animation */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
