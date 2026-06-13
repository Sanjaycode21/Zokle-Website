'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { statsData } from '@/lib/data';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    let animationFrameId: number;
    let startTime: number | null = null;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * end);
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 bg-glass-bg rounded-3xl border border-glass-border">
        {statsData.map((stat) => (
          <div key={stat.id} className="text-center px-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-electric-violet mb-3">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-xs md:text-sm font-display font-bold uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
