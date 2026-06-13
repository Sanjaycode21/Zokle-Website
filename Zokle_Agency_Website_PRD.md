# Project Requirement Document (PRD)
## Zokle — Web Design & Development Agency Portfolio Website

---

## 1. Project Overview

**Project Name:** Zokle Agency Website
**Type:** Agency Portfolio / Marketing Website
**Goal:** Build a modern, interactive, conversion-focused portfolio website for Zokle — an agency that builds websites for businesses. The site should showcase work, build trust, and drive leads (clients booking calls / sending inquiries).

**Tech Stack:**
- Framework: Next.js latest (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion (for scroll reveals, hover interactions, page transitions)
- Icons: Lucide React
- Forms: React Hook Form + Zod validation
- Email/Form handling: Resend / EmailJS / Formspree (any one)
- Deployment: Vercel
- Fonts: Next/Font (Google Fonts — e.g., Inter / Sora / Space Grotesk for headings)

---

## 2. Target Audience

- Small and medium businesses (gyms, salons, restaurants, real estate, clinics, e-commerce brands, coaching centre, etc) looking for a website/web app.
- Startups needing landing pages or full product websites.
- Decision makers: business owners, marketing managers — non-technical users who care about visual quality, speed of delivery, and ROI.

---

## 3. Design Requirements

### 3.1 General Design Principles
- Modern, bold, "creative agency" feel — not generic/templated.
- Dark theme primary (with optional light mode toggle) — premium, tech-forward aesthetic.
- Heavy use of micro-interactions: hover effects, cursor-follow elements, smooth scroll, scroll-triggered animations.
- Custom cursor (optional) for desktop.
- Bento-grid layouts for services/work sections.
- Generous whitespace, large bold typography, gradient accents.

### 3.2 Responsiveness
- Fully responsive: Mobile (320px+), Tablet (768px+), Desktop (1024px+, 1440px+).
- Mobile-first development approach.
- Touch-friendly tap targets (min 44x44px) on mobile/tablet.
- Hamburger menu with full-screen overlay navigation on mobile.

### 3.3 Color Palette (Suggested)
- Primary background: Near-black (#0A0A0A / #111111)
- Accent color: Electric blue / Lime green / Violet (pick one signature accent — e.g., #6366F1 or #ADFF2F)
- Text: White (#FFFFFF) / Muted gray (#A1A1AA)
- Cards/Surfaces: Dark gray (#1A1A1A / #1E1E1E) with subtle border (#27272A)

### 3.4 Typography
- Headings: Bold, large-scale (Sora, Space Grotesk, or Clash Display)
- Body: Inter / Manrope for readability
- Use variable font weights for hierarchy

---

## 4. Site Structure & Pages

### 4.1 Navbar (Global, Sticky)
- Logo (Zokle)
- Nav links: Home, Services, Work/Portfolio, About, Pricing, Contact
- CTA Button: "Book a Call" / "Get a Free Quote" (prominent, accent color)
- Mobile: Hamburger → full-screen animated menu
- Sticky on scroll with background blur effect

### 4.2 Home Page (`/`)

1. **Hero Section**
   - Big bold headline (e.g., "We Build Websites That Grow Businesses")
   - Subheading describing services
   - Primary CTA: "Get Started" / "Book a Free Consultation"
   - Secondary CTA: "View Our Work"
   - Animated background (gradient mesh, particles, or 3D element)
   - Trust indicators: client logos / "Trusted by X+ businesses"

2. **Services Overview Section**
   - Grid/Bento layout of services:
     - Website Design & Development
     - E-commerce Solutions
     - Landing Pages
     - SEO & Performance Optimization
     - Branding & UI/UX Design
     - Maintenance & Support
   - Hover animations revealing details/icons

3. **Featured Work / Portfolio Preview**
   - Showcase 3-6 featured projects (cards with image, title, category, link)
   - "View Full Portfolio" CTA leading to `/work`
   - Hover effect: image zoom/reveal project details

4. **Process / How We Work Section**
   - Step-by-step timeline (Discovery → Design → Development → Launch → Support)
   - Animated on scroll (numbers, icons, connecting lines)

5. **Why Choose Us / Stats Section**
   - Key stats with animated counters (Projects Delivered, Client Satisfaction %, Years Active, Avg. Delivery Time)

6. **Testimonials Section**
   - Carousel/slider of client reviews with name, business, photo/avatar, rating

7. **Pricing Preview (Optional)**
   - 3-tier pricing cards (Starter, Growth, Premium) with key features
   - CTA: "Get Custom Quote"

8. **FAQ Section**
   - Accordion-style common questions (timeline, cost, process, revisions, support)

9. **Final CTA / Call to Action Section**
   - Large banner: "Ready to Grow Your Business Online?"
   - CTA Button: "Book a Free Call" / "Start Your Project"

10. **Footer**
    - Logo + tagline
    - Quick links (Services, Work, About, Contact)
    - Social media icons (Instagram, LinkedIn, Twitter/X, Behance)
    - Contact info (email, phone, location)
    - Newsletter signup (optional)
    - Copyright

### 4.3 Services Page (`/services`)
- Detailed breakdown of each service with descriptions, deliverables, and "what's included"
- Each service has its own card/section with icon, description, and CTA

### 4.4 Portfolio/Work Page (`/work`)
- Grid of all projects with filter/category tabs (e.g., Gym, Salon, Restaurant, E-commerce, Corporate)
- Each project card: thumbnail, title, category, "View Project" link
- Hover: preview animation
- Individual project detail pages (`/work/[slug]`) — optional, showing case study (problem, solution, tech used, live link, screenshots)

### 4.5 About Page (`/about`)
- Agency story/mission
- Team section (if applicable) — member cards with photo, name, role
- Values/approach section
- Stats/achievements

### 4.6 Pricing Page (`/pricing`)
- Detailed pricing tiers/packages
- Feature comparison table
- FAQ specific to pricing/payment

### 4.7 Contact Page (`/contact`)
- Contact form: Name, Email, Phone, Business Type, Project Details, Budget Range (Select)
- Form validation with success/error states
- Direct contact info: Email, Phone, WhatsApp link
- Embedded map (optional, if physical location relevant)
- Social links
- Calendly/booking widget embed (optional, for "Book a Call" CTA)

---

## 5. Key Features & Functional Requirements

| Feature | Description |
|---|---|
| Responsive Design | Mobile, tablet, desktop breakpoints fully tested |
| Sticky Navbar with CTA | Always-visible "Book a Call"/"Get Quote" button |
| Smooth Scroll | Page-wide smooth scrolling behavior |
| Scroll Animations | Fade-in, slide-up, stagger animations using Framer Motion |
| Interactive Hover States | Cards, buttons, links with creative hover effects |
| Portfolio Filter | Category-based filtering on work page |
| Testimonial Carousel | Auto-scroll/manual slider |
| Contact Form | Validated, functional form with email delivery |
| Animated Counters | For stats section (on scroll into view) |
| FAQ Accordion | Expandable/collapsible Q&A |
| Dark/Light Mode Toggle | Optional but recommended |
| SEO Optimization | Meta tags, Open Graph tags, sitemap.xml, robots.txt via Next.js latest metadata API |
| Page Loading Animation | Optional preloader/intro animation |
| 404 Page | Custom-designed error page |
| Performance | Optimized images (next/image), lazy loading, Lighthouse score 90+ |
| Accessibility | Semantic HTML, ARIA labels, keyboard navigation, color contrast compliance |

---

## 6. CTA Strategy

Primary CTAs throughout the site should consistently drive toward:
1. **"Book a Free Call"** — links to Calendly/booking page or contact form
2. **"Get a Free Quote"** — links to contact form with project details
3. **"View Our Work"** — links to portfolio page

CTAs should appear in: Navbar, Hero, mid-page (after services/portfolio), and final section before footer.

---

## 7. Non-Functional Requirements

- **Performance:** Page load < 2.5s, optimized assets, code-splitting via Next.js latest
- **SEO:** Server-side rendering (Next.js latest default), structured metadata per page, sitemap, robots.txt
- **Browser Support:** Latest 2 versions of Chrome, Firefox, Safari, Edge
- **Hosting:** Vercel (recommended for Next.js latest)
- **Analytics:** Google Analytics / Vercel Analytics integration
- **Scalability:** Component-based architecture for easy addition of new portfolio items/services

---

## 8. Folder Structure (Suggested for Next.js latest App Router)

```
/app
  /page.tsx                 → Home
  /services/page.tsx
  /work/page.tsx
  /work/[slug]/page.tsx
  /about/page.tsx
  /pricing/page.tsx
  /contact/page.tsx
  /layout.tsx
  /globals.css
/components
  /Navbar.tsx
  /Footer.tsx
  /Hero.tsx
  /ServiceCard.tsx
  /ProjectCard.tsx
  /TestimonialCarousel.tsx
  /StatsCounter.tsx
  /FAQAccordion.tsx
  /CTASection.tsx
  /ContactForm.tsx
/lib
  /data.ts                  → services, projects, testimonials data
  /utils.ts
/public
  /images
  /icons
```

---

## 9. Deliverables

1. Fully responsive Next.js latest website (all pages above)
2. Reusable component library
3. Functional contact form with email notifications
4. SEO-ready metadata across all pages
5. Deployment-ready build (Vercel config)
6. Source code with clean folder structure & comments

---

## 10. Future Enhancements (Phase 2 — Optional)

- Blog section for SEO content
- Client login/dashboard for project tracking
- Multi-language support
- CMS integration (Sanity/Contentful) for easy content updates
- Live chat widget integration
