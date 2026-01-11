# Dharani Ravva - AI-Focused Developer Portfolio

## Design System

### Overview
A static, robotic, AI-inspired developer portfolio designed for a senior software engineer specializing in AI, ML, backend systems, and research-driven engineering.

### Design Philosophy
- **Minimal & Precise**: No unnecessary elements, every component serves a purpose
- **Robotic & Engineered**: Sharp edges, grid-based layouts, terminal aesthetics
- **High Contrast**: Maximum readability and professional appearance
- **Intentional Motion**: Subtle, controlled animations that feel engineered, not playful

---

## Color Palette

### Primary Colors
```css
--color-background: #000000    /* Pure black background */
--color-surface: #0a0a0a       /* Deep graphite surface */
--color-panel: #1a1a1a         /* Dark panels */
--color-border: #333333        /* Subtle borders */
```

### Text Colors
```css
--color-text-primary: #ffffff     /* White primary text */
--color-text-secondary: #a0a0a0   /* Light gray secondary text */
--color-text-muted: #666666       /* Muted gray text */
```

### Accent Colors
```css
--color-accent-blue: #00ffff    /* Electric blue/cyan - primary accent */
--color-accent-green: #00ff41   /* Neon green - success/active states */
--color-accent-dim: #004d4d     /* Dimmed blue for hover states */
```

---

## Typography

### Font Families
- **Monospace**: JetBrains Mono (for code, labels, system text)
- **Sans-serif**: Inter (for headings, body text)

### Font Hierarchy
```
H1: 4rem / 2.5rem (mobile) - Name, hero titles
H2: 2.5rem / 1.75rem (mobile) - Section titles
H3: 1.75rem / 1.5rem (mobile) - Subsection titles
H4: 1.25rem - Card titles
Body: 1rem - Paragraph text
```

### Usage Guidelines
- Use `.mono` class for terminal-style text
- Use `.text-accent` for cyan highlights
- Use `.text-green` for active/success states

---

## Components

### 1. Hero Section
- Full-screen minimal hero with animated grid background
- Terminal cursor animation
- Blinking cursor effect
- Dual CTA buttons (View Projects / Download Resume)
- Scroll indicator

### 2. About Section
- Spec-sheet style profile
- System identity panel
- Domain expertise with icons
- Mission statement
- Methodology list
- Focus areas tags

### 3. Skills Section
- Categorized capability matrix
- Terminal-style numbering
- Four categories: Programming, AI/ML, Cloud, Tools
- Terminal summary output

### 4. Projects Section
- Research artifact card design
- Project metadata (year, status, tech stack)
- Detailed description with numbered lists
- GitHub/Demo links
- Hover effects on borders

### 5. Experience Section
- Company timeline entry
- Role and duration
- Bullet-point achievements
- Technology tags
- Professional metrics

### 6. Achievements Section
- Award cards with verification badges
- Competition metadata
- Technical details
- Summary statistics grid

### 7. Education Section
- Academic credentials listing
- Relevant modules
- Status indicators (Current/Completed)
- Academic summary terminal output

### 8. Footer
- Contact links with icons (GitHub, LinkedIn, Email)
- System status indicator
- Copyright notice
- Tech stack badge

### 9. Navigation
- Scroll-triggered sticky nav
- Desktop: horizontal menu bar
- Mobile: hamburger menu with overlay
- Smooth scroll to sections

### 10. Scroll to Top
- Fixed bottom-right button
- Appears after 500px scroll
- Smooth animation

---

## Animation Guidelines

### Timing
```css
--transition-fast: 150ms
--transition-base: 300ms
--transition-slow: 500ms
```

### Available Animations
1. **Terminal Blink**: Cursor blinking effect (530ms interval)
2. **Pulse Subtle**: Gentle pulsing for backgrounds
3. **Data Flow**: Linear horizontal movement
4. **Hover States**: 300ms color/border transitions

### Best Practices
- Keep animations subtle and purposeful
- Avoid flashy or playful effects
- Use step-end for terminal-style animations
- Prefer border color changes over transforms

---

## Interaction Patterns

### Hover Effects
1. **Buttons**: Border color change, background fill
2. **Cards**: Border color shift to cyan
3. **Links**: Text color change to cyan
4. **Tags**: Border and text color change

### Click Interactions
1. **Smooth scroll** to sections
2. **External links** open in new tab
3. **Download** resume PDF

### Mobile Considerations
- Hamburger menu for navigation
- Touch-friendly button sizes (min 48x48px)
- Reduced spacing on small screens
- Stacked layouts for narrow viewports

---

## Content Guidelines

### Tone of Voice
- **Confident & Direct**: No unnecessary modifiers
- **Technical & Precise**: Use exact terminology
- **Engineer-to-Engineer**: Assume technical audience
- **No Marketing Fluff**: Focus on capabilities and results

### Writing Style
- Short, declarative sentences
- Active voice preferred
- Bullet points for lists
- Metrics where applicable
- No emojis or casual language

### Content Structure
```
[Problem/Context] → [Technical Solution] → [Measurable Result]
```

Example:
"Optimized database queries and implemented caching strategies, achieving 30% improvement in application response time."

---

## File Structure

```
src/
├── app/
│   ├── App.tsx                          # Main app component
│   └── components/
│       └── portfolio/
│           ├── Hero.tsx                 # Hero section
│           ├── About.tsx                # About/Profile
│           ├── Skills.tsx               # Technical skills
│           ├── Projects.tsx             # Project showcase
│           ├── Experience.tsx           # Work history
│           ├── Achievements.tsx         # Awards/Recognition
│           ├── Education.tsx            # Academic background
│           ├── Footer.tsx               # Contact/Footer
│           ├── PortfolioNav.tsx         # Navigation
│           └── ScrollToTop.tsx          # Scroll button
└── styles/
    ├── fonts.css                        # Font imports
    ├── theme.css                        # Design system
    ├── tailwind.css                     # Tailwind entry
    └── index.css                        # Global styles
```

---

## Customization

### Adding New Projects
Edit `/src/app/components/portfolio/Projects.tsx`:
```typescript
{
  title: 'Project Name',
  year: '2026',
  status: 'Production' | 'Research',
  tech: ['Tech1', 'Tech2'],
  description: ['Point 1', 'Point 2'],
  links: { github: '#', demo: '#' }
}
```

### Updating Skills
Edit `/src/app/components/portfolio/Skills.tsx`:
```typescript
{
  icon: IconComponent,
  title: 'CATEGORY_NAME',
  skills: ['Skill1', 'Skill2']
}
```

### Changing Color Accents
Edit `/src/styles/theme.css`:
```css
--color-accent-blue: #00ffff;   /* Primary accent */
--color-accent-green: #00ff41;  /* Secondary accent */
```

---

## Performance Optimizations

1. **Lazy Loading**: Images loaded on demand
2. **Minimal Dependencies**: Only essential packages
3. **CSS Variables**: Fast theme switching capability
4. **Smooth Scroll**: Native CSS smooth scrolling
5. **Optimized Fonts**: Google Fonts with display=swap

---

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios (WCAG AAA)
- Focus visible states
- Screen reader friendly structure

---

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Deployment Checklist

- [ ] Update personal information (name, email, GitHub, LinkedIn)
- [ ] Add real project details and links
- [ ] Replace placeholder resume link
- [ ] Add actual contact email
- [ ] Test responsive design on mobile devices
- [ ] Verify all links work
- [ ] Test smooth scrolling on all browsers
- [ ] Optimize images and assets
- [ ] Add meta tags for SEO
- [ ] Set up analytics (optional)

---

## SEO Recommendations

Add to HTML head:
```html
<title>Dharani Ravva - AI-Focused Software Engineer</title>
<meta name="description" content="AI-focused software engineer specializing in machine learning, backend systems, and research-driven engineering.">
<meta name="keywords" content="AI Engineer, Machine Learning, Software Engineer, Backend Developer">
<meta property="og:title" content="Dharani Ravva - Portfolio">
<meta property="og:description" content="AI-focused software engineer portfolio">
```

---

## License & Credits

Built with:
- React 18.3.1
- TypeScript
- Tailwind CSS 4.1
- Lucide React (icons)
- Vite (build tool)

Design System: Custom AI-inspired robotic theme
Typography: JetBrains Mono, Inter
