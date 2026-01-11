import { User, Cpu, Brain, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4 mono text-sm text-[#00ff41]">
            <User size={18} />
            <span>{'>'} SYSTEM PROFILE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Engineer Specification</h2>
          <div className="w-24 h-1 bg-[#00ffff]" />
        </div>

        {/* Profile Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Core Info */}
          <div className="space-y-6">
            <div className="panel border border-[#333333] p-6 bg-[#0a0a0a]">
              <h3 className="mono text-[#00ffff] mb-4 text-sm">IDENTITY</h3>
              <div className="space-y-2 text-[#a0a0a0]">
                <p>
                  <span className="mono text-white">Name:</span> Dharani Ravva
                </p>
                <p>
                  <span className="mono text-white">Role:</span> Software Engineer
                </p>
                <p>
                  <span className="mono text-white">Education:</span> MSc Computer Science
                </p>
                <p>
                  <span className="mono text-white">Institution:</span> Birmingham City University
                </p>
                <p>
                  <span className="mono text-white">Status:</span>{' '}
                  <span className="text-[#00ff41]">Active</span>
                </p>
              </div>
            </div>

            <div className="panel border border-[#333333] p-6 bg-[#0a0a0a]">
              <h3 className="mono text-[#00ffff] mb-4 text-sm">DOMAIN EXPERTISE</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Brain className="text-[#00ffff] mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-white font-medium">Artificial Intelligence</p>
                    <p className="text-sm text-[#a0a0a0]">
                      Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="text-[#00ffff] mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-white font-medium">Backend Systems</p>
                    <p className="text-sm text-[#a0a0a0]">
                      REST APIs, Microservices, Database Architecture, Cloud Infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="text-[#00ffff] mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-white font-medium">Research Engineering</p>
                    <p className="text-sm text-[#a0a0a0]">
                      Production ML Systems, Explainability, Model Optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Approach */}
          <div className="space-y-6">
            <div className="panel border border-[#333333] p-6 bg-[#0a0a0a]">
              <h3 className="mono text-[#00ffff] mb-4 text-sm">MISSION</h3>
              <p className="text-[#a0a0a0] leading-relaxed mb-4">
                Architect and deploy production-grade AI systems that solve real-world problems with
                precision, interpretability, and scale.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed">
                Bridge the gap between research innovation and engineering reliability. Every system
                deployed is optimized for performance, maintainability, and ethical operation.
              </p>
            </div>

            <div className="panel border border-[#333333] p-6 bg-[#0a0a0a]">
              <h3 className="mono text-[#00ffff] mb-4 text-sm">METHODOLOGY</h3>
              <ul className="space-y-3 text-[#a0a0a0]">
                <li className="flex items-start gap-3">
                  <span className="mono text-[#00ff41] flex-shrink-0">[1]</span>
                  <span>Data-driven decision making with rigorous validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono text-[#00ff41] flex-shrink-0">[2]</span>
                  <span>Model explainability and interpretability as core requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono text-[#00ff41] flex-shrink-0">[3]</span>
                  <span>Performance optimization at every layer of the stack</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono text-[#00ff41] flex-shrink-0">[4]</span>
                  <span>Production-first architecture with scalability by design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono text-[#00ff41] flex-shrink-0">[5]</span>
                  <span>Continuous integration of research advances into deployed systems</span>
                </li>
              </ul>
            </div>

            <div className="panel border border-[#333333] p-6 bg-[#0a0a0a]">
              <h3 className="mono text-[#00ffff] mb-4 text-sm">FOCUS AREAS</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Fraud Detection',
                  'Explainable AI',
                  'NLP Systems',
                  'Computer Vision',
                  'Time-Series Analysis',
                  'Risk Modeling',
                  'Production ML',
                  'Cloud Architecture',
                ].map((area) => (
                  <span
                    key={area}
                    className="mono text-xs px-3 py-1 border border-[#333333] text-[#a0a0a0] hover:border-[#00ffff] hover:text-[#00ffff] transition-colors duration-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
