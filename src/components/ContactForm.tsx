'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle2, AlertTriangle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  businessType: z.string().min(1, { message: 'Please select your business type.' }),
  budgetRange: z.string().min(1, { message: 'Please select your budget range.' }),
  details: z.string().min(10, { message: 'Please provide at least 10 characters of description.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const businessTypes = [
  { value: 'gym', label: 'Gym / Fitness Studio' },
  { value: 'salon', label: 'Salon / Wellness Clinic' },
  { value: 'restaurant', label: 'Restaurant / Cafe' },
  { value: 'real-estate', label: 'Real Estate / Architecture' },
  { value: 'ai-backend', label: 'AI & Backend Integration' },
  { value: 'startup', label: 'SaaS / Tech Startup' },
  { value: 'coaching', label: 'Coaching Centre / Education' },
  { value: 'other', label: 'Other Business' },
];

const budgetRanges = [
  { value: 'under-2000', label: 'Under ₹1,999' },
  { value: '2000-5000', label: '₹2,000 - ₹5,000' },
  { value: '5000-15000', label: '₹5,000 - ₹15,000' },
  { value: 'above-15000', label: 'Above ₹15,000' },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openDropdown, setOpenDropdown] = useState<'business' | 'budget' | null>(null);

  const businessRef = useRef<HTMLDivElement | null>(null);
  const budgetRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      businessType: '',
      budgetRange: '',
      details: '',
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        openDropdown === 'business' &&
        businessRef.current &&
        !businessRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
      if (
        openDropdown === 'budget' &&
        budgetRef.current &&
        !budgetRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const businessType = watch('businessType');
  const budgetRange = watch('budgetRange');

  const selectedBusiness = businessTypes.find((t) => t.value === businessType);
  const selectedBudget = budgetRanges.find((b) => b.value === budgetRange);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="w-full bg-glass-bg border border-glass-border p-8 md:p-10 rounded-3xl relative overflow-hidden">
      {/* Outer glow accent */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-electric-violet/10 blur-[100px] rounded-full pointer-events-none" />

      {submitStatus === 'success' ? (
        <div className="text-center py-12 flex flex-col items-center justify-center">
          <CheckCircle2 size={56} className="text-emerald-500 mb-6 animate-bounce" />
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Inquiry Sent Successfully!</h3>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-8">
            Thank you for reaching out to Zokle. We will review your request and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="bg-electric-violet hover:bg-electric-violet/90 text-white font-display px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold font-display uppercase tracking-wider mb-2 text-foreground/80">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                placeholder="Aarav Sharma"
                className={`w-full bg-glass-bg/50 border ${
                  errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-glass-border focus:border-electric-violet'
                } rounded-xl px-4 py-3.5 text-sm text-foreground outline-none transition-all`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold font-display uppercase tracking-wider mb-2 text-foreground/80">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                placeholder="aarav@example.com"
                className={`w-full bg-glass-bg/50 border ${
                  errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-glass-border focus:border-electric-violet'
                } rounded-xl px-4 py-3.5 text-sm text-foreground outline-none transition-all`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold font-display uppercase tracking-wider mb-2 text-foreground/80">
                Phone Number <span className="text-muted-foreground/60 text-[10px]">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="+91 98765 43210"
                className="w-full bg-glass-bg/50 border border-glass-border focus:border-electric-violet rounded-xl px-4 py-3.5 text-sm text-foreground outline-none transition-all"
              />
            </div>

            {/* Business Type */}
            <div className="relative" ref={businessRef}>
              <label className="block text-xs font-bold font-display uppercase tracking-wider mb-2 text-foreground/80">
                Business Type
              </label>
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'business' ? null : 'business')}
                className={`w-full bg-glass-bg/50 border ${
                  errors.businessType ? 'border-red-500/50 focus:border-red-500' : 'border-glass-border focus:border-electric-violet'
                } rounded-xl px-4 py-3.5 text-sm text-foreground/80 outline-none transition-all flex justify-between items-center cursor-pointer`}
              >
                <span>{selectedBusiness ? selectedBusiness.label : 'Select option'}</span>
                <motion.span
                  animate={{ rotate: openDropdown === 'business' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-muted-foreground/70"
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>
              
              <input type="hidden" {...register('businessType')} />

              <AnimatePresence>
                {openDropdown === 'business' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 4, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute z-50 left-0 right-0 bg-background/95 border border-glass-border rounded-xl shadow-xl backdrop-blur-md overflow-hidden"
                  >
                    <div className="max-h-60 overflow-y-auto py-1">
                      {businessTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            setValue('businessType', type.value);
                            trigger('businessType');
                            setOpenDropdown(null);
                          }}
                          className={`w-full text-left px-4 py-3.5 text-sm transition-colors cursor-pointer flex items-center justify-between ${
                            businessType === type.value
                              ? 'bg-electric-violet/10 text-electric-violet font-semibold'
                              : 'text-foreground/80 hover:bg-glass-bg/80 hover:text-foreground'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {errors.businessType && (
                <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.businessType.message}</p>
              )}
            </div>
          </div>

          {/* Budget Range */}
          <div className="relative" ref={budgetRef}>
            <label className="block text-xs font-bold font-display uppercase tracking-wider mb-2 text-foreground/80">
              Project Budget Range
            </label>
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
              className={`w-full bg-glass-bg/50 border ${
                errors.budgetRange ? 'border-red-500/50 focus:border-red-500' : 'border-glass-border focus:border-electric-violet'
              } rounded-xl px-4 py-3.5 text-sm text-foreground/80 outline-none transition-all flex justify-between items-center cursor-pointer`}
            >
              <span>{selectedBudget ? selectedBudget.label : 'Select range'}</span>
              <motion.span
                animate={{ rotate: openDropdown === 'budget' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-muted-foreground/70"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <input type="hidden" {...register('budgetRange')} />

            <AnimatePresence>
              {openDropdown === 'budget' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 4, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute z-50 left-0 right-0 bg-background/95 border border-glass-border rounded-xl shadow-xl backdrop-blur-md overflow-hidden"
                >
                  <div className="max-h-60 overflow-y-auto py-1">
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget.value}
                        type="button"
                        onClick={() => {
                          setValue('budgetRange', budget.value);
                          trigger('budgetRange');
                          setOpenDropdown(null);
                        }}
                        className={`w-full text-left px-4 py-3.5 text-sm transition-colors cursor-pointer flex items-center justify-between ${
                          budgetRange === budget.value
                            ? 'bg-electric-violet/10 text-electric-violet font-semibold'
                            : 'text-foreground/80 hover:bg-glass-bg/80 hover:text-foreground'
                        }`}
                      >
                        {budget.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {errors.budgetRange && (
              <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.budgetRange.message}</p>
            )}
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="details" className="block text-xs font-bold font-display uppercase tracking-wider mb-2 text-foreground/80">
              Project Brief
            </label>
            <textarea
              id="details"
              rows={4}
              {...register('details')}
              placeholder="Tell us about the project goals, timelines, and requirements..."
              className={`w-full bg-glass-bg/50 border ${
                errors.details ? 'border-red-500/50 focus:border-red-500' : 'border-glass-border focus:border-electric-violet'
              } rounded-xl px-4 py-3.5 text-sm text-foreground outline-none transition-all resize-none`}
            />
            {errors.details && (
              <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.details.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-electric-violet hover:bg-electric-violet/90 disabled:bg-electric-violet/50 text-white font-display font-semibold transition-all duration-300 glow-button flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending Inquiry...
                </>
              ) : (
                'Send Inquiry'
              )}
            </button>
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium mt-4">
              <AlertTriangle size={16} />
              An error occurred while submitting the form. Please try again.
            </div>
          )}
        </form>
      )}
    </div>
  );
}
