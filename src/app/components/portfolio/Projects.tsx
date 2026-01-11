import { Folder, ExternalLink, Github, Calendar, Cpu } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'AI-Powered Fraud Detection System',
      year: '2026',
      status: 'Production',
      tech: ['XGBoost', 'CatBoost', 'SHAP', 'Flask', 'React', 'PostgreSQL'],
      description: [
        'Explainable ML system for real-time e-commerce fraud detection',
        'Implemented threshold-aware decision framework with configurable risk controls',
        'SHAP integration for model interpretability and regulatory compliance',
        'Achieved 94% precision with 30% false positive reduction',
        'Production-ready API with <100ms inference latency',
      ],
      links: {
        github: '#',
        demo: '#',
      },
    },
    {
      title: 'Global Terrorism Prediction & Threat Analysis',
      year: '2025',
      status: 'Research',
      tech: ['LSTM', 'BERT', 'NLP', 'Time-Series', 'Python', 'TensorFlow', 'Dash'],
      description: [
        'Hybrid temporal-semantic model for geopolitical threat intelligence',
        'Combined LSTM sequence modeling with BERT-based text analysis',
        'Multi-modal feature extraction from structured and unstructured data',
        'Interactive dashboards for threat visualization and scenario analysis',
        'Published research methodology with reproducible results',
      ],
      links: {
        github: '#',
      },
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4 mono text-sm text-[#00ff41]">
            <Folder size={18} />
            <span>{'>'} ENGINEERING ARTIFACTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Projects</h2>
          <div className="w-24 h-1 bg-[#00ffff]" />
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="panel border border-[#333333] bg-[#0a0a0a] p-8 hover:border-[#00ffff] transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 mono text-xs text-[#666666]">
                    <span>PROJECT_{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-[#333333]">|</span>
                    <Calendar size={12} />
                    <span>{project.year}</span>
                    <span className="text-[#333333]">|</span>
                    <span
                      className={
                        project.status === 'Production' ? 'text-[#00ff41]' : 'text-[#00ffff]'
                      }
                    >
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="p-2 border border-[#333333] text-[#a0a0a0] hover:border-[#00ffff] hover:text-[#00ffff] transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="p-2 border border-[#333333] text-[#a0a0a0] hover:border-[#00ffff] hover:text-[#00ffff] transition-colors duration-200"
                      aria-label="View demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <Cpu className="text-[#00ffff]" size={16} />
                <span className="mono text-xs text-[#666666]">STACK:</span>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="mono text-xs px-2 py-1 border border-[#333333] text-[#a0a0a0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-2">
                {project.description.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mono text-xs text-[#00ff41] mt-1 flex-shrink-0">
                      [{idx + 1}]
                    </span>
                    <p className="text-[#a0a0a0] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#666666] text-[#a0a0a0] hover:border-[#00ffff] hover:text-[#00ffff] transition-all duration-300 mono text-sm"
          >
            <Github size={18} />
            <span>VIEW_ALL_REPOSITORIES</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
