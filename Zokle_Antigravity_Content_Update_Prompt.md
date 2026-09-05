# Antigravity Prompt — Update Zokle Website Content

Paste this into Antigravity. It assumes the Zokle Next.js website (from the Stitch-generated UI) is already in the codebase and just needs content/copy updated — no layout, component, animation, or styling changes.

---

Update the content/copy across the Zokle website codebase. Do not change any component structure, layout, JSX/CSS classes, animations, or styling — only edit text strings, data arrays, and placeholder content as specified below. If content is stored in a data file (e.g. `lib/data.ts` or similar), update it there; otherwise update directly in the relevant component files.

## 1. Hero Section
- Keep headline: "We Build **Websites** That Grow Your Business" (keep "Websites" as the accent-colored/highlighted word — do not change this)
- Replace subheadline text with: "We design and build fast, modern websites for local businesses — gyms, salons, restaurants, and more. Every project is crafted to turn visitors into paying customers."
- Keep CTA button labels as is: "Book a Free Call" and "View Our Work"
- Replace the trust line under the CTAs (currently "Trusted by 50+ local businesses worldwide") with: "Built for businesses that want to grow online" — and remove the "+50" avatar/counter badge since there are no clients yet (just remove the number, keep the small avatar group if it's hardcoded design, or remove entirely if it implies real client count)

## 2. Logo Loop / Tech Strip
No change — keep the existing tech logos (Next.js, React, TypeScript, Tailwind CSS, Vercel, Supabase) since this reflects the actual tech stack.

## 3. Services Section ("What We Do")
No change needed — keep existing six service cards (Website Design & Development, E-commerce Solutions, SEO & Marketing, Performance Tuning, Lead Generation Funnels, and the sixth card) as is.

## 4. Portfolio Section ("Featured Projects")
Replace the placeholder project data array with these 3 sample projects:

```js
const projects = [
  {
    title: "PulseFit Gym",
    category: "Gym & Fitness Website",
    description: "A bold, high-energy website for a fitness studio featuring class schedules, trainer profiles, and an online membership signup flow.",
    image: "/projects/pulsefit.png" // replace with actual screenshot path
  },
  {
    title: "Lumière Salon",
    category: "Salon & Beauty Website",
    description: "An elegant, conversion-focused booking site for a beauty salon with service menus, gallery showcase, and integrated appointment scheduling.",
    image: "/projects/lumiere.png" // replace with actual screenshot path
  },
  {
    title: "The Copper Plate",
    category: "Restaurant Website",
    description: "A warm, visually rich restaurant website with digital menu, online table reservations, and location/hours info designed to drive foot traffic.",
    image: "/projects/copperplate.png" // replace with actual screenshot path
  }
];
```

Note: I'll provide the actual screenshot images for these 3 sample projects separately — use the array above as the data structure and wire up the image paths once I upload them. For now, use placeholder/mockup images if no image is found at the given path so the build doesn't break.

## 5. Process Section ("The Roadmap to Success")
No change — keep existing four steps (01 Discovery, 02 Design, 03 Develop, 04 Launch) as is.

## 6. Stats Section
Update the stat numbers to reflect an early-stage agency (currently inflated placeholder numbers):
- "150+ Projects Delivered" → "3+ Projects Completed"
- "98% Client Satisfaction" → "100% Commitment to Quality"
- Third stat (years/experience) → "1+ Years Building"
- "24/7" → "24/7 Support Available"

## 7. FAQ Section ("Common Questions")
Keep the four existing questions, update/add the answer content (currently empty or placeholder) for each:
1. "How long does a typical project take?" → "Most projects take 2-4 weeks from discovery to launch, depending on scope and complexity."
2. "Do you offer monthly maintenance packages?" → "Yes, we offer ongoing maintenance and support packages to keep your site updated, secure, and performing well."
3. "Can you assist us with complete rebranding?" → "Yes, we can help with visual branding, messaging, and a full website redesign as part of a rebrand."
4. "What framework do you build on?" → "We build primarily with Next.js, React, and Tailwind CSS for fast, modern, scalable websites."

## 8. Final CTA Section
- Keep headline: "Ready to Grow Your Business Online?"
- Replace subtext with: "Let's build a website that works as hard as you do. Get a free consultation and see how Zokle can help your business stand out."
- Keep CTA button: "Start Your Project Today"

## 9. Footer
- Keep logo "Zokle."
- Replace tagline with: "We design and build high-performance websites that help local businesses grow online."
- Keep Services links: Web Design, Development, E-commerce, SEO & Speed
- Keep Company links: Portfolio, About Us, Pricing, Careers (remove "Careers" link if not actively hiring — keep otherwise)
- Keep newsletter copy: "Subscribe to our newsletter for high-performing design strategies"
- Contact info — keep current placeholder values for now (I'll update these later with real details):
  - Email: hello@zokle.agency
  - Phone: +1 (555) 123-4567
  - Location: San Francisco, CA
- Keep copyright: "© 2026 Zokle Agency. All rights reserved."

## 10. Contact Page
No content change needed — keep heading "Let's Build Something Great", subtext, "Get in Touch" block (with placeholder email/phone/location), and all form fields exactly as they are. Form field labels and structure stay unchanged.

---

Important: only modify text content, copy strings, and the projects data array as described. Do not touch component logic, animation code (GSAP/Framer Motion configs), Tailwind classes, color tokens, or the dark/light mode implementation.