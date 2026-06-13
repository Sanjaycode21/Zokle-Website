export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  gridSpan: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  dataAlt: string;
}

export interface RoadmapStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  frequency: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design & Development',
    iconName: 'web',
    description: 'Bespoke, high-performance digital experiences tailored to your brand identity, optimized for maximum user experience and seamless conversions across all screens.',
    gridSpan: 'md:col-span-8',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    iconName: 'shopping_cart',
    description: 'Scalable, custom-engineered digital storefronts with checkout optimizations, robust payment gateways, and backend tool integrations.',
    gridSpan: 'md:col-span-4',
  },
  {
    id: 'seo',
    title: 'SEO & Marketing',
    iconName: 'search',
    description: 'Data-driven structural optimization strategies that boost search engine visibility, raise keyword rankings, and capture high-intent organic traffic.',
    gridSpan: 'md:col-span-4',
  },
  {
    id: 'performance',
    title: 'Performance Tuning',
    iconName: 'speed',
    description: 'Lightning-fast load time optimizations, asset compression, clean code refactoring, and server setups designed to push Core Web Vitals to 100.',
    gridSpan: 'md:col-span-4',
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation Funnels',
    iconName: 'ads_click',
    description: 'Tailored landing page experiences, split testing, and analytical monitoring setups that turn simple page impressions into qualified pipelines.',
    gridSpan: 'md:col-span-4',
  },
];

export const portfolioData: ProjectItem[] = [
  {
    id: 'vesper-luxe',
    title: 'Vesper Luxe Retail',
    category: 'E-COMMERCE',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyUu3TCvbUP65xdzHoyoC8FIVBoofYgr3NKdkhl2bS7YsRLtst-9EaTGICjNreErCTt_FF8FuDG1M7p_pgrBfuBchNGIT7m5zXTW2d-DGGEyunQ5xj0otlOecusyJ8QX0OHIcOKLyDEs-J6vMsF-XUhp07vFoCWix6JsRwBWyYX70KiUPQQWt2AG86QTnPIAk98vMF28dgbPhccqkW6M4p_CITRYWGTPKXEfMaXRsz1bN6hpPCs-uQUOUOoE0xEnF1G4RbLikgZWs',
    dataAlt: 'A professional dashboard design with dark mode aesthetic and vibrant purple accents.',
  },
  {
    id: 'nova-analytics',
    title: 'Nova Analytics',
    category: 'SAAS PLATFORM',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyNVe5raAC2F9iBefyHTqfGaW6s07Yyle7KNPUIgTsXdWNLgA1VPteK_u0qAQAUmKQPEolyShJUgQMwYEaPNONydxpX6ufMDCan6iy-33rYbqn9KPCHrEZRZlhIU1NztfDDWekVmbS16gYk2v796DTQrJhXxAyVvNqpIrPAXjFYpywHl2nsEuWGnEb7MvpYJlVNK--WDvjuep4zN8aaZyzFxYpPQYtkW2yeXIS_1pFCvach-MGgTKfQgLYxfq4P8a__VmmD60INhM',
    dataAlt: 'An innovative SaaS platform interface displayed on a sleek laptop screen.',
  },
  {
    id: 'apex-residences',
    title: 'Apex Residences',
    category: 'REAL ESTATE',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbdson-rYBeODg9S5DEhqZdiAJkcBIQWV-0n-0ROU6ID0xJiVh7Jwe-x7-FsZ7DG4XtWUFxN5f4TjbzznnUutfmPp8-5D-F0B7EiQ3I8qGjkdjjWW25ymN6OMrFcdouRtbYmA6gWy7Bh9RgF4UIyJjt1Vf8DWBtc-n2KDp2nBIE6W61JqnKZbN5c4qw_WqP-S9on-_VAExiyiFPdmzJ3TGeQH_jNVvgUwv92HKUKynAWz2P6lHvzvDrdJatHR8edGrAO62tJIIV6o',
    dataAlt: 'A high-end architectural portfolio website showcasing minimalist structures.',
  },
];

export const processRoadmap: RoadmapStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Discovery',
    description: 'We perform a deep dive analysis of your business target audience, commercial goals, and core system friction points to establish a solid execution blueprint.',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Design',
    description: 'Crafting responsive layout prototypes, visual branding guides, and wireframes focused heavily on interactive customer journeys.',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Develop',
    description: 'Engineered into pixel-perfect, clean, SEO-optimized, and lightning-fast software builds built on top of high-performance modern tech stacks.',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Launch',
    description: 'Performance debugging, domain deployment support, tracking configurations, and long-term optimization strategies to sustain digital scaling.',
  },
];

export const statsData: StatItem[] = [
  { id: 'stat-projects', value: 150, suffix: '+', label: 'Projects Completed' },
  { id: 'stat-satisfaction', value: 98, suffix: '%', label: 'Client Satisfaction' },
  { id: 'stat-awards', value: 12, suffix: '+', label: 'Industry Awards' },
  { id: 'stat-support', value: 24, suffix: '/7', label: 'Dedicated Support' },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'plan-starter',
    name: 'Starter',
    price: '$2,999',
    frequency: 'project',
    features: [
      '5-Page Responsive Design',
      'SEO Configurations',
      'CMS Content Integration',
      '1 Month Support Period',
      'Standard Interactive Effects',
    ],
    ctaText: 'Get Started',
  },
  {
    id: 'plan-growth',
    name: 'Growth',
    price: '$5,499',
    frequency: 'project',
    features: [
      'Everything in Starter Plan',
      'E-commerce Platform Integration',
      'Advanced Custom Animations',
      '3 Months Support Period',
      'Framer Motion Interactivity',
    ],
    isPopular: true,
    ctaText: 'Select Plan',
  },
  {
    id: 'plan-premium',
    name: 'Premium',
    price: 'Custom',
    frequency: '',
    features: [
      'Full Agency Branding Suite',
      'Complex Full-Stack Software Dev',
      'Generative AI Integrations',
      'Dedicated Maintenance Retainers',
      'Custom Three.js Integrations',
    ],
    ctaText: 'Contact Us',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a typical project take?',
    answer: 'Standard marketing websites typically scale between 4-6 weeks from initial research to deployment. More advanced E-commerce setups or SaaS products with complex logic take approximately 8-12 weeks.',
  },
  {
    id: 'faq-2',
    question: 'Do you offer monthly maintenance packages?',
    answer: 'Yes, we offer ongoing maintenance retainers that cover security updates, speed and performance tuning, core libraries upgrades, SEO strategy audits, and design refreshes.',
  },
  {
    id: 'faq-3',
    question: 'Can you assist us with complete rebranding?',
    answer: 'Absolutely. We regularly conduct full branding workshops, logo iterations, style and typography systems guidelines, and asset creation sessions prior to starting the development phase.',
  },
  {
    id: 'faq-4',
    question: 'What framework do you build on?',
    answer: 'We default to Next.js latest (App Router) with React, TypeScript, and Tailwind CSS. This combination delivers the highest page speeds, server-side rendering benefits, SEO scores, and overall security standard.',
  },
];
