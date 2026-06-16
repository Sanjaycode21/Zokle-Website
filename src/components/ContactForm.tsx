'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  businessType: z.string().min(1, { message: 'Please select your business type.' }),
  budgetRange: z.string().min(1, { message: 'Please select your budget range.' }),
  details: z.string().min(10, { message: 'Please provide at least 10 characters of description.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
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

  const businessTypes = [
    { value: 'gym', label: 'Gym / Fitness Studio' },
    { value: 'salon', label: 'Salon / Wellness Clinic' },
    { value: 'restaurant', label: 'Restaurant / Cafe' },
    { value: 'real-estate', label: 'Real Estate / Architecture' },
    { value: 'ecommerce', label: 'E-commerce Brand' },
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
            <div>
              <label htmlFor="businessType" className="block text-xs font-bold font-display uppercase tracking-wider mb-2 text-foreground/80">
                Business Type
              </label>
              <select
                id="businessType"
                {...register('businessType')}
                className={`w-full bg-glass-bg/50 border ${
                  errors.businessType ? 'border-red-500/50 focus:border-red-500' : 'border-glass-border focus:border-electric-violet'
                } rounded-xl px-4 py-3.5 text-sm text-foreground/80 outline-none transition-all`}
              >
                <option value="" disabled className="bg-background text-foreground/60">Select option</option>
                {businessTypes.map((type) => (
                  <option key={type.value} value={type.value} className="bg-background text-foreground">
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.businessType.message}</p>
              )}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budgetRange" className="block text-xs font-bold font-display uppercase tracking-wider mb-2 text-foreground/80">
              Project Budget Range
            </label>
            <select
              id="budgetRange"
              {...register('budgetRange')}
              className={`w-full bg-glass-bg/50 border ${
                errors.budgetRange ? 'border-red-500/50 focus:border-red-500' : 'border-glass-border focus:border-electric-violet'
              } rounded-xl px-4 py-3.5 text-sm text-foreground/80 outline-none transition-all`}
            >
              <option value="" disabled className="bg-background text-foreground/60">Select range</option>
              {budgetRanges.map((budget) => (
                <option key={budget.value} value={budget.value} className="bg-background text-foreground">
                  {budget.label}
                </option>
              ))}
            </select>
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
