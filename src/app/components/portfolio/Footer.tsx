import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      username: '@dharaniravva',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      username: '/dharani-ravva',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:dharani.ravva@example.com',
      username: 'dharani.ravva@example.com',
    },
  ];

  return (
    <footer className="py-16 px-6 border-t border-[#333333] bg-black/70 backdrop-blur-[2px]">
      <div className="max-w-5xl mx-auto">
        {/* Contact Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="panel flex items-center gap-4 p-4 border border-[#333333] bg-[#0a0a0a] hover:border-[#00ffff] hover:bg-black transition-all duration-300 group"
              >
                <Icon
                  className="text-[#666666] group-hover:text-[#00ffff] transition-colors duration-300"
                  size={24}
                />
                <div>
                  <p className="text-sm text-[#666666] mono">{link.label.toUpperCase()}</p>
                  <p className="text-[#a0a0a0] group-hover:text-white transition-colors duration-300">
                    {link.username}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Terminal Status */}
        <div className="panel border border-[#333333] bg-[#0a0a0a] p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mono text-sm">
            <div className="flex items-center gap-3 text-[#00ff41]">
              <Terminal size={16} />
              <span>SYSTEM STATUS: OPERATIONAL</span>
            </div>
            <div className="text-[#666666]">
              <span>LAST UPDATED: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="mono text-sm text-[#666666] mb-2">
            © {currentYear} Dharani Ravva. All rights reserved.
          </p>
          <p className="mono text-xs text-[#666666]">
            Built with precision. Engineered for performance.
          </p>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-8 flex items-center justify-center gap-2 mono text-xs text-[#666666]">
          <span>STACK:</span>
          <span className="px-2 py-1 border border-[#333333]">React</span>
          <span className="px-2 py-1 border border-[#333333]">TypeScript</span>
          <span className="px-2 py-1 border border-[#333333]">Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
