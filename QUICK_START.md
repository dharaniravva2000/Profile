# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
```
http://localhost:5173
```

---

## ⚡ Immediate Customizations

### Update Your Information

#### 1. **Name & Title** (5 min)
File: `/src/app/components/portfolio/Hero.tsx`
```tsx
<h1>Your Name</h1>
<h2>Your Title | Your Specialization</h2>
```

#### 2. **Contact Links** (5 min)
File: `/src/app/components/portfolio/Footer.tsx`
```tsx
{
  icon: Github,
  label: 'GitHub',
  href: 'https://github.com/yourusername',
  username: '@yourusername',
}
```

#### 3. **Projects** (10 min)
File: `/src/app/components/portfolio/Projects.tsx`
```tsx
{
  title: 'Your Project',
  year: '2026',
  status: 'Production',
  tech: ['Tech1', 'Tech2'],
  description: ['Point 1', 'Point 2'],
  links: { github: '#', demo: '#' }
}
```

#### 4. **About Section** (5 min)
File: `/src/app/components/portfolio/About.tsx`
- Update identity panel
- Modify mission statement
- Adjust focus areas

#### 5. **Skills** (5 min)
File: `/src/app/components/portfolio/Skills.tsx`
- Add/remove technologies
- Update categories

---

## 🎨 Common Customizations

### Change Accent Color
File: `/src/styles/theme.css`
```css
--color-accent-blue: #00ffff;  /* Your color */
```

### Update Resume Link
File: `/src/app/components/portfolio/Hero.tsx`
```tsx
<a href="/path-to-your-resume.pdf" download>
  Download Resume
</a>
```

### Modify Stats
File: `/src/app/components/portfolio/Stats.tsx`
```tsx
{
  icon: Icon,
  value: 'Your Value',
  label: 'YOUR LABEL',
  color: 'text-[#00ffff]',
}
```

---

## 📦 Build for Production

```bash
npm run build
```

Output: `dist/` folder ready to deploy

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in settings
3. Select `dist` folder as source

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
rm -rf node_modules
npm install
npm run build
```

### Styling Not Updating
1. Clear browser cache
2. Hard refresh (Cmd/Ctrl + Shift + R)
3. Restart dev server

---

## 📚 Need More Help?

- **Full Guide**: See `PORTFOLIO_GUIDE.md`
- **Design System**: See `DESIGN_SYSTEM.md`
- **Build Details**: See `BUILD_SUMMARY.md`
- **Main Docs**: See `README.md`

---

## ✅ Pre-Deployment Checklist

- [ ] Update name and title
- [ ] Add real contact links (GitHub, LinkedIn, Email)
- [ ] Replace placeholder projects with your work
- [ ] Update skills list
- [ ] Add your resume PDF
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Verify smooth scrolling
- [ ] Run production build
- [ ] Test production build locally

---

**Ready to Launch?**

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

Good luck! 🚀
