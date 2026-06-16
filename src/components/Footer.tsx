'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-background border-t border-glass-border pt-20 pb-10 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
        
        {/* Brand & Description */}
        <div className="md:col-span-4 flex flex-col justify-start">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight text-foreground mb-6">
            Zokle<span className="text-electric-violet">.</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
            We design and build high-performance websites that help local businesses grow online.
          </p>
          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram Link"
              className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-foreground/70 hover:text-electric-violet hover:border-electric-violet transition-all"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn Link"
              className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-foreground/70 hover:text-electric-violet hover:border-electric-violet transition-all"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter Link"
              className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-foreground/70 hover:text-electric-violet hover:border-electric-violet transition-all"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div className="md:col-span-2">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">Services</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/services" className="hover:text-electric-violet transition-colors">Web Design</Link></li>
            <li><Link href="/services" className="hover:text-electric-violet transition-colors">Development</Link></li>
            <li><Link href="/services" className="hover:text-electric-violet transition-colors">E-commerce</Link></li>
            <li><Link href="/services" className="hover:text-electric-violet transition-colors">SEO & Speed</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="md:col-span-2">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/work" className="hover:text-electric-violet transition-colors">Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-electric-violet transition-colors">About Us</Link></li>
            <li><Link href="/pricing" className="hover:text-electric-violet transition-colors">Pricing</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">Newsletter</h4>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            Subscribe to our newsletter for high-performing design strategies.
          </p>
          <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full bg-glass-bg border border-glass-border text-foreground px-4 py-3 pr-12 rounded-xl text-sm outline-none focus:border-electric-violet transition-all"
            />
            <button
              type="submit"
              aria-label="Submit Newsletter"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-electric-violet hover:bg-electric-violet/90 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ArrowRight size={16} />
            </button>
          </form>
          {subscribed && (
            <p className="text-emerald-500 text-xs mt-2 transition-all">Successfully subscribed!</p>
          )}
        </div>

      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Zokle Agency. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-electric-violet transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-electric-violet transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
