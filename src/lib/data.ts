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
    id: 'pulsefit',
    title: 'PulseFit Gym',
    category: 'Gym & Fitness Website',
    imageSrc: '/projects/pulsefit.png',
    dataAlt: 'A bold, high-energy website for a fitness studio featuring class schedules, trainer profiles, and an online membership signup flow.',
  },
  {
    id: 'lumiere',
    title: 'Lumière Salon',
    category: 'Salon & Beauty Website',
    imageSrc: '/projects/lumiere.png',
    dataAlt: 'An elegant, conversion-focused booking site for a beauty salon with service menus, gallery showcase, and integrated appointment scheduling.',
  },
  {
    id: 'copper-plate',
    title: 'The Copper Plate',
    category: 'Restaurant Website',
    imageSrc: '/projects/copperplate.png',
    dataAlt: 'A warm, visually rich restaurant website with digital menu, online table reservations, and location/hours info designed to drive foot traffic.',
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
  { id: 'stat-projects', value: 3, suffix: '+', label: 'Projects Completed' },
  { id: 'stat-satisfaction', value: 100, suffix: '%', label: 'Commitment to Quality' },
  { id: 'stat-experience', value: 1, suffix: '+', label: 'Years Building' },
  { id: 'stat-support', value: 24, suffix: '/7', label: 'Support Available' },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'plan-starter',
    name: 'Starter',
    price: '₹2,999',
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
    price: '₹5,999',
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
    answer: 'Most projects take 2-4 weeks from discovery to launch, depending on scope and complexity.',
  },
  {
    id: 'faq-2',
    question: 'Do you offer monthly maintenance packages?',
    answer: 'Yes, we offer ongoing maintenance and support packages to keep your site updated, secure, and performing well.',
  },
  {
    id: 'faq-3',
    question: 'Can you assist us with complete rebranding?',
    answer: 'Yes, we can help with visual branding, messaging, and a full website redesign as part of a rebrand.',
  },
  {
    id: 'faq-4',
    question: 'What framework do you build on?',
    answer: 'We build primarily with Next.js, React, and Tailwind CSS for fast, modern, scalable websites.',
  },
];
