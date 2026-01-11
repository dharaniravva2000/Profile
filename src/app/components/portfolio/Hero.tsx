import { useEffect, useState } from 'react';
import { ArrowDown, Terminal } from 'lucide-react';

export function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px 300px at 50% 0%, rgba(0, 255, 255, 0.18), transparent 70%), radial-gradient(500px 300px at 15% 100%, rgba(0, 255, 65, 0.14), transparent 70%)',
        }}
      />

      {/* Subtle Data Stream Animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent opacity-30 animate-pulse" />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00ffff] opacity-30" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#00ffff] opacity-30" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#00ffff] opacity-30" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00ffff] opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8 mono text-sm text-[#00ff41] opacity-80">
          <Terminal size={16} />
          <span>dharani@portfolio:~$</span>
          <span className={`inline-block w-2 h-4 bg-[#00ff41] ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Dharani Ravva
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#00ffff] mb-6 tracking-wide">
          AI-Focused Software Engineer | Backend & Machine Learning Systems
        </h2>

        {/* Mission Statement */}
        <p className="text-base md:text-lg text-[#a0a0a0] max-w-2xl mx-auto mb-12 leading-relaxed">
          Building intelligent, ethical, and scalable systems at the intersection of artificial
          intelligence and production engineering. Research-driven. Performance-optimized.
          Production-ready.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-3 bg-transparent border border-[#00ffff] text-[#00ffff] font-medium transition-all duration-300 hover:bg-[#00ffff] hover:text-black min-w-[200px]"
          >
            <span className="relative z-10">View Projects</span>
          </button>
          <a
            href="/resume.pdf"
            download
            className="group relative px-8 py-3 bg-transparent border border-[#666666] text-white font-medium transition-all duration-300 hover:border-white hover:bg-white hover:text-black min-w-[200px]"
          >
            <span className="relative z-10">Download Resume</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-[#666666] hover:text-[#00ffff] transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
