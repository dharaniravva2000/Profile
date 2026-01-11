# AI-Inspired Developer Portfolio - Design System

## Quick Reference Guide

### 🎨 Color System

#### Background Layers
```
#000000  →  Pure Black (main background)
#0a0a0a  →  Deep Graphite (surface)
#1a1a1a  →  Dark Panel (cards)
#333333  →  Border Gray
```

#### Text Hierarchy
```
#ffffff  →  Primary Text (headings, important content)
#a0a0a0  →  Secondary Text (body, descriptions)
#666666  →  Muted Text (labels, meta)
```

#### Accent Colors
```
#00ffff  →  Electric Blue (primary accent, links, hover)
#00ff41  →  Neon Green (active states, success)
#004d4d  →  Dim Blue (hover backgrounds)
```

---

### 📝 Typography Scale

```
HERO NAME:     text-6xl md:text-7xl lg:text-8xl  (96-64-48px)
SECTION H2:    text-4xl md:text-5xl              (40-32px)
PROJECT H3:    text-2xl md:text-3xl              (30-24px)
CARD TITLE:    text-xl md:text-2xl               (24-20px)
BODY TEXT:     text-base                         (16px)
LABELS:        text-sm mono                      (14px)
METADATA:      text-xs mono                      (12px)
```

---

### 🔲 Component Patterns

#### Card Structure
```tsx
<div className="border border-[#333333] bg-[#0a0a0a] p-8 hover:border-[#00ffff]">
  {/* Content */}
</div>
```

#### Section Header
```tsx
<div className="flex items-center gap-3 mono text-sm text-[#00ff41]">
  <Icon size={18} />
  <span>{'>'} SECTION_TITLE</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold mb-4">Section Name</h2>
<div className="w-24 h-1 bg-[#00ffff]" />
```

#### Terminal Text
```tsx
<p className="mono text-sm text-[#00ff41]">$ command --flag</p>
```

#### Tag/Badge
```tsx
<span className="mono text-xs px-2 py-1 border border-[#333333] text-[#a0a0a0]">
  TAG_NAME
</span>
```

#### Button Primary
```tsx
<button className="px-8 py-3 border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black">
  Action
</button>
```

#### Button Secondary
```tsx
<button className="px-8 py-3 border border-[#666666] text-white hover:border-white hover:bg-white hover:text-black">
  Action
</button>
```

---

### 📐 Spacing System

```
Padding:
  p-6   →  1.5rem (24px) - Standard card padding
  p-8   →  2rem (32px) - Large card padding
  p-4   →  1rem (16px) - Small components

Gaps:
  gap-2 →  0.5rem (8px) - Tag spacing
  gap-3 →  0.75rem (12px) - Icon + text
  gap-4 →  1rem (16px) - List items
  gap-6 →  1.5rem (24px) - Sections
  gap-8 →  2rem (32px) - Major sections

Margins:
  mb-4  →  1rem (16px) - Paragraph spacing
  mb-6  →  1.5rem (24px) - Subsection spacing
  mb-12 →  3rem (48px) - Component spacing
  mb-16 →  4rem (64px) - Section header spacing
```

---

### 🎯 Icon Guidelines

**Size Standards:**
- Section headers: `size={18}`
- Card headers: `size={20-24}`
- Buttons/Links: `size={18}`
- Inline icons: `size={16}`

**Color Usage:**
- Primary icons: `text-[#00ffff]`
- Active states: `text-[#00ff41]`
- Muted icons: `text-[#666666]`
- Hover states: `group-hover:text-[#00ffff]`

---

### ⚡ Animation Patterns

#### Hover Transitions
```tsx
// Border color change (300ms)
className="transition-colors duration-300 hover:border-[#00ffff]"

// Text color change (200ms)
className="transition-colors duration-200 hover:text-[#00ffff]"

// Background fill (300ms)
className="transition-all duration-300 hover:bg-[#00ffff] hover:text-black"
```

#### Scroll Animations
```tsx
// Fade in from bottom
className="transition-all duration-300 opacity-0 translate-y-4"
// Active state:
className="transition-all duration-300 opacity-100 translate-y-0"

// Slide from top
className="transition-transform duration-300 -translate-y-full"
// Active state:
className="transition-transform duration-300 translate-y-0"
```

---

### 📱 Responsive Breakpoints

```
sm:  640px   - Small tablets
md:  768px   - Tablets
lg:  1024px  - Small desktops
xl:  1280px  - Large desktops
```

**Common Patterns:**
```tsx
// Stack on mobile, grid on desktop
className="grid md:grid-cols-2 gap-6"

// Hide on mobile, show on desktop
className="hidden md:block"

// Show on mobile, hide on desktop
className="md:hidden"

// Responsive text
className="text-base md:text-lg lg:text-xl"
```

---

### 🔧 Utility Classes

```css
.mono              → JetBrains Mono font
.text-accent       → #00ffff color
.text-green        → #00ff41 color
.animate-pulse     → Tailwind default pulse
```

---

### 📋 Content Templates

#### Project Description Format
```
1. [Core functionality/purpose]
2. [Key technical achievement]
3. [Implementation detail]
4. [Performance metric]
5. [Production readiness indicator]
```

#### Achievement Format
```
Title: Award Name - Event Name Year
Type: COMPETITION | INNOVATION | RESEARCH
Organization: Issuing organization
Description: [Technical approach] → [Innovation] → [Result]
Tech: [Relevant technologies]
```

#### Experience Bullet Format
```
[Action Verb] + [Technical Detail] + [Measurable Result]

Example:
"Engineered computer vision pipeline using Python and OpenCV for automated document processing, reducing manual intervention by 60%."
```

---

### 🎨 Visual Hierarchy Rules

1. **Most Important** → White text, large size, bold
2. **Important** → Cyan accent, medium size
3. **Supporting** → Light gray, standard size
4. **Metadata** → Dark gray, mono font, small size

#### Example:
```tsx
<h3 className="text-2xl font-bold text-white">       {/* Most Important */}
  Project Title
</h3>
<p className="text-xl text-[#00ffff]">              {/* Important */}
  Role/Technology
</p>
<p className="text-[#a0a0a0]">                      {/* Supporting */}
  Description text
</p>
<span className="mono text-xs text-[#666666]">     {/* Metadata */}
  2024 | PRODUCTION
</span>
```

---

### ✅ Design Checklist

**Every Card Should Have:**
- [ ] Border: `border border-[#333333]`
- [ ] Background: `bg-[#0a0a0a]` or `bg-black`
- [ ] Padding: `p-6` or `p-8`
- [ ] Hover state: `hover:border-[#00ffff]`
- [ ] Transition: `transition-colors duration-300`

**Every Section Should Have:**
- [ ] Terminal-style header with icon
- [ ] Large title (H2)
- [ ] Cyan accent line (`w-24 h-1 bg-[#00ffff]`)
- [ ] Vertical spacing: `py-20 md:py-32`
- [ ] Container: `max-w-5xl mx-auto px-6`

**Every Interactive Element Should Have:**
- [ ] Hover state
- [ ] Transition animation
- [ ] Focus state (for accessibility)
- [ ] Proper semantic HTML

---

### 🚀 Performance Tips

1. **Use Tailwind classes** instead of custom CSS
2. **Minimize re-renders** with proper React hooks
3. **Lazy load images** if adding photos
4. **Keep bundle size small** - no unnecessary dependencies
5. **Use CSS variables** for theme values
6. **Optimize fonts** with font-display: swap

---

### 🎯 Key Differentiators

What makes this portfolio "engineered":

1. **Terminal aesthetics** (mono font, system prompts)
2. **Sharp edges** (no border-radius)
3. **Grid-based layouts** (structured, not organic)
4. **High contrast** (pure black/white)
5. **Minimal animation** (subtle, intentional)
6. **Technical language** (no marketing speak)
7. **Data-focused** (metrics, stats, facts)
8. **System-like UI** (borders, panels, terminals)

---

## Component Composition Examples

### Full Section Pattern
```tsx
<section id="section-name" className="py-20 md:py-32 px-6 bg-[#0a0a0a]">
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4 mono text-sm text-[#00ff41]">
        <Icon size={18} />
        <span>{'>'} SECTION_LABEL</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Section Title</h2>
      <div className="w-24 h-1 bg-[#00ffff]" />
    </div>

    {/* Content */}
    <div className="space-y-8">
      {/* Cards go here */}
    </div>
  </div>
</section>
```

### Card Pattern
```tsx
<div className="border border-[#333333] bg-black p-8 hover:border-[#00ffff] transition-colors duration-300">
  {/* Header */}
  <div className="flex items-center gap-3 mb-4">
    <Icon className="text-[#00ffff]" size={20} />
    <h3 className="text-2xl font-bold text-white">Card Title</h3>
  </div>
  
  {/* Content */}
  <p className="text-[#a0a0a0] mb-4">Description text</p>
  
  {/* Tags */}
  <div className="flex gap-2">
    <span className="mono text-xs px-2 py-1 border border-[#333333] text-[#a0a0a0]">
      TAG
    </span>
  </div>
</div>
```

This design system ensures consistency, professionalism, and that "engineered" feel throughout the portfolio.
