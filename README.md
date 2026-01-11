# Dharani Ravva - AI-Focused Software Engineer Portfolio

A static, robotic, AI-inspired developer portfolio designed for a senior software engineer specializing in artificial intelligence, machine learning, backend systems, and research-driven engineering.

## 🎯 Design Philosophy

This portfolio embodies the precision and intelligence of modern AI systems through:

- **Minimal & Precise**: Every element serves a purpose - no unnecessary decoration
- **Robotic Aesthetics**: Terminal-inspired UI, monospace fonts, sharp edges
- **High Contrast**: Pure black backgrounds with electric blue and neon green accents
- **Engineered Motion**: Subtle, intentional animations that feel robotic, not playful
- **Technical Focus**: Direct, confident language aimed at technical audiences

## 🎨 Design System

### Color Palette

```
Background:  #000000 (Pure Black)
Surface:     #0a0a0a (Deep Graphite)
Panel:       #1a1a1a (Dark Panel)
Border:      #333333 (Subtle Gray)

Text Primary:   #ffffff (White)
Text Secondary: #a0a0a0 (Light Gray)
Text Muted:     #666666 (Dark Gray)

Accent Blue:  #00ffff (Electric Cyan)
Accent Green: #00ff41 (Neon Green)
```

### Typography

- **Monospace**: JetBrains Mono (terminal, labels, code)
- **Sans-serif**: Inter (headings, body text)

### Component Library

All components follow a strict design system:
- Sharp edges (no border-radius)
- Grid-based layouts
- Terminal-style metadata
- Controlled hover states
- Minimal animations

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                          # Main application
│   └── components/
│       └── portfolio/
│           ├── Hero.tsx                 # Full-screen hero section
│           ├── About.tsx                # Engineer profile
│           ├── Skills.tsx               # Technical capabilities
│           ├── Projects.tsx             # Project showcase
│           ├── Experience.tsx           # Work history
│           ├── Achievements.tsx         # Awards & recognition
│           ├── Education.tsx            # Academic credentials
│           ├── Stats.tsx                # Portfolio statistics
│           ├── Footer.tsx               # Contact & links
│           ├── PortfolioNav.tsx         # Navigation
│           └── ScrollToTop.tsx          # Scroll button
└── styles/
    ├── fonts.css                        # Font imports
    ├── theme.css                        # Design system
    ├── tailwind.css                     # Tailwind entry
    └── index.css                        # Global styles
```

## 🚀 Features

### ✅ Implemented Sections

1. **Hero Section**
   - Animated grid background
   - Terminal cursor blink effect
   - Dual CTA buttons
   - Corner accent borders

2. **Stats Dashboard**
   - Key metrics at a glance
   - Hover animations
   - Icon-based visualization

3. **About Section**
   - Spec-sheet style profile
   - Domain expertise breakdown
   - Mission & methodology
   - Focus areas tags

4. **Skills Matrix**
   - Categorized technical stack
   - Terminal-style numbering
   - Version summary output

5. **Projects Showcase**
   - Research artifact card design
   - Technical metadata
   - GitHub/Demo links
   - Detailed descriptions

6. **Experience Timeline**
   - Professional work history
   - Achievement-focused bullets
   - Technology tags
   - Metrics and results

7. **Achievements**
   - Verified award cards
   - Competition metadata
   - Statistics grid
   - Technical details

8. **Education**
   - Academic credentials
   - Relevant coursework
   - Status indicators

9. **Navigation**
   - Scroll-triggered sticky nav
   - Mobile hamburger menu
   - Smooth scroll to sections

10. **Footer**
    - Contact links (GitHub, LinkedIn, Email)
    - System status indicator
    - Tech stack badge

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: JetBrains Mono, Inter

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎨 Customization Guide

### Update Personal Information

**Contact Links** (`/src/app/components/portfolio/Footer.tsx`):
```typescript
const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/your-username',
    username: '@your-username',
  },
  // Update LinkedIn and Email similarly
];
```

### Add New Projects

**Projects** (`/src/app/components/portfolio/Projects.tsx`):
```typescript
{
  title: 'Your Project Name',
  year: '2026',
  status: 'Production', // or 'Research'
  tech: ['Tech1', 'Tech2', 'Tech3'],
  description: [
    'Key point 1',
    'Key point 2',
    'Measurable result',
  ],
  links: {
    github: 'https://github.com/...',
    demo: 'https://demo.com',
  },
}
```

### Modify Color Scheme

**Theme** (`/src/styles/theme.css`):
```css
:root {
  --color-accent-blue: #00ffff;   /* Change primary accent */
  --color-accent-green: #00ff41;  /* Change secondary accent */
}
```

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoints**: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Touch-friendly**: Minimum 48x48px interactive elements
- **Adaptive layouts**: Grid → Stack on mobile

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on all interactive elements
- Keyboard navigation support
- High contrast ratios (WCAG AAA)
- Focus visible states
- Screen reader friendly

## 🎯 Performance

- Minimal dependencies
- CSS variables for theming
- Native smooth scrolling
- Optimized fonts (display: swap)
- Lazy state management

## 📊 SEO Optimization

The portfolio includes comprehensive meta tags:
- Title and description
- Open Graph tags
- Twitter cards
- Structured keywords
- Author metadata

## 📖 Documentation

- `PORTFOLIO_GUIDE.md` - Complete usage guide
- `DESIGN_SYSTEM.md` - Design system reference
- `README.md` - This file

## 🔧 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Guidelines

### Writing Tone
- **Confident & Direct**: No unnecessary modifiers
- **Technical & Precise**: Use exact terminology
- **Engineer-to-Engineer**: Assume technical audience
- **Results-Focused**: Include metrics and outcomes

### Content Formula
```
[Problem/Context] → [Technical Solution] → [Measurable Result]
```

Example:
> "Optimized database queries and implemented caching strategies, achieving 30% improvement in application response time."

## 🎨 Design Patterns

### Card Structure
```tsx
<div className="border border-[#333333] bg-[#0a0a0a] p-8 hover:border-[#00ffff]">
  {/* Content */}
</div>
```

### Section Header
```tsx
<div className="flex items-center gap-3 mono text-sm text-[#00ff41]">
  <Icon size={18} />
  <span>{'>'} SECTION_TITLE</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold">Section Name</h2>
<div className="w-24 h-1 bg-[#00ffff]" />
```

## 🚀 Deployment

### Pre-deployment Checklist

- [ ] Update personal information
- [ ] Add real project links
- [ ] Replace placeholder resume
- [ ] Update contact details
- [ ] Test on multiple devices
- [ ] Verify all links work
- [ ] Test smooth scrolling
- [ ] Optimize assets
- [ ] Add analytics (optional)

### Build Command
```bash
npm run build
```

Output directory: `dist/`

## 📄 License

© 2026 Dharani Ravva. All rights reserved.

## 🙏 Acknowledgments

Built with precision. Engineered for performance.

---

**Portfolio Type**: Static Developer Portfolio  
**Design Language**: AI-Inspired, Robotic, Minimal  
**Target Audience**: Technical Recruiters, Engineering Managers, Fellow Engineers  
**Purpose**: Showcase AI/ML engineering expertise and production-ready systems
# Profile
