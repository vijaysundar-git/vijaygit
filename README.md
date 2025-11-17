# SJR Tech Service Landing Page

A modern, high-performance landing page for SJR Tech Service, a UK-based AI automation company.

## Features

- **Modern React Architecture**: Built with functional components and hooks
- **TailwindCSS Styling**: Utility-first CSS with custom theme
- **Framer Motion Animations**: Smooth, professional animations throughout
- **Responsive Design**: Optimized for all screen sizes
- **Performance Optimized**: Fast loading with Vite build system
- **SEO Friendly**: Semantic HTML and proper meta tags

## Tech Stack

- React 18+ (Functional components)
- Vite (Build tool)
- TailwindCSS (Styling)
- Framer Motion (Animations)
- Firebase Hosting (Deployment)

## Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment to Firebase

1. **Install Firebase CLI (if not already installed):**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase (if not already done):**
   ```bash
   firebase init hosting
   ```

4. **Build the project:**
   ```bash
   npm run build
   ```

5. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

## Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx          # Main hero with CTAs
│   ├── ServicesSection.jsx      # AI services showcase
│   ├── WhyChooseUsSection.jsx   # Benefits section
│   ├── WorkflowSection.jsx      # 4-step process
│   ├── TestimonialsSection.jsx  # Client testimonials
│   ├── FinalCTASection.jsx      # Final call-to-action
│   └── Footer.jsx               # Footer with contact info
├── App.jsx                      # Main app component
├── main.jsx                     # React entry point
└── index.css                    # Global styles
```

## Sections Overview

1. **Hero Section**: Eye-catching gradient background with main value proposition
2. **Services Section**: Three core AI services with icons and descriptions
3. **Why Choose Us**: Four key benefits of choosing SJR Tech Service
4. **Workflow Section**: Clear 4-step process visualization
5. **Testimonials**: Social proof from real UK business clients
6. **Final CTA**: Strong call-to-action to book strategy call
7. **Footer**: Contact information and additional links

## Customization

### Colors
The color scheme can be modified in `tailwind.config.js`:
- Primary colors (blues)
- Accent colors (purples)
- Custom gradients

### Content
All content is easily modifiable within each component file. Key areas to customize:
- Company name and branding
- Service descriptions
- Testimonial content
- Contact information

### Animations
Framer Motion animations are configured throughout. Adjust timing and effects in component files.

## Performance Features

- Lazy loading images
- Optimized animations
- Efficient CSS with Tailwind
- Fast Vite build system
- Smooth scrolling navigation

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Touch-friendly interactions

## Contact

For questions about this landing page:
- Email: vijay.sundaresan@sjrtchsrv.tech
- Phone: +44 7405 146240
- Website: [Your deployed URL]

---

Built with ❤️ for SJR Tech Service