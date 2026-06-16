'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 md:py-32 flex flex-col flex-1 w-full">
      {/* Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-electric-violet font-display text-xs font-bold uppercase tracking-wider block mb-3">
          Contact Us
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Let&apos;s Build Something Great
        </h1>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Submit the form below or book a discovery call to review layout milestones and launch strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto w-full items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We generally respond to inquiries within 24 hours. Let us know how we can assist with your digital rollout.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-electric-violet/10 border border-electric-violet/20 flex items-center justify-center text-electric-violet flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold font-display uppercase tracking-wider text-foreground mb-1">Email</h4>
                <a href="mailto:hello@zokle.agency" className="text-sm text-muted-foreground hover:text-electric-violet transition-colors">
                  hello@zokle.agency
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-electric-violet/10 border border-electric-violet/20 flex items-center justify-center text-electric-violet flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold font-display uppercase tracking-wider text-foreground mb-1">Phone</h4>
                <a href="tel:+918807892068" className="text-sm text-muted-foreground hover:text-electric-violet transition-colors">
                  +91 8807892068
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-electric-violet/10 border border-electric-violet/20 flex items-center justify-center text-electric-violet flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold font-display uppercase tracking-wider text-foreground mb-1">Location</h4>
                <p className="text-sm text-muted-foreground">
                  Chennai, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
