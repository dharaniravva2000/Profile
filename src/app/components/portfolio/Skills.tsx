import { Code2, Database, Cloud, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'PROGRAMMING',
      skills: ['Python', 'C++', 'Java', 'MATLAB', 'Go', 'SQL', 'JavaScript'],
    },
    {
      icon: Database,
      title: 'AI/ML & DATA',
      skills: [
        'TensorFlow',
        'PyTorch',
        'Keras',
        'OpenCV',
        'Hugging Face',
        'NumPy',
        'Pandas',
        'Scikit-learn',
        'XGBoost',
        'CatBoost',
        'SHAP',
        'BERT',
        'LSTM',
      ],
    },
    {
      icon: Cloud,
      title: 'CLOUD & DATABASE',
      skills: [
        'PostgreSQL',
        'GCP',
        'Vertex AI',
        'BigQuery',
        'Firebase',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      icon: Wrench,
      title: 'TOOLS & FRAMEWORKS',
      skills: [
        'Git',
        'GitHub',
        'GitLab',
        'Flask',
        'FastAPI',
        'React',
        'Next.js',
        'Jupyter',
        'Kaggle',
        'LaTeX',
        'Oracle APEX',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 bg-black/70 backdrop-blur-[2px]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4 mono text-sm text-[#00ff41]">
            <Code2 size={18} />
            <span>{'>'} CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Stack</h2>
          <div className="w-24 h-1 bg-[#00ffff]" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="panel border border-[#333333] bg-black p-6 hover:border-[#00ffff] transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-[#00ffff]" size={20} />
                  <h3 className="mono text-sm text-[#00ffff]">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, index) => (
                    <div key={skill} className="flex items-center gap-3 group">
                      <span className="mono text-xs text-[#666666] group-hover:text-[#00ff41] transition-colors duration-200">
                        [{String(index + 1).padStart(2, '0')}]
                      </span>
                      <span className="text-[#a0a0a0] group-hover:text-white transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Terminal-style Summary */}
        <div className="panel mt-12 border border-[#333333] bg-black p-6 mono text-sm">
          <div className="text-[#00ff41] mb-2">$ system --version</div>
          <div className="text-[#a0a0a0] space-y-1">
            <p>
              <span className="text-white">Total Languages:</span> 7
            </p>
            <p>
              <span className="text-white">ML Frameworks:</span> 13
            </p>
            <p>
              <span className="text-white">Cloud Platforms:</span> 1 (GCP)
            </p>
            <p>
              <span className="text-white">Status:</span>{' '}
              <span className="text-[#00ff41]">Production Ready</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
