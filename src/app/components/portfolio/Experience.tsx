import { Briefcase, ChevronRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 bg-black/70 backdrop-blur-[2px]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4 mono text-sm text-[#00ff41]">
            <Briefcase size={18} />
            <span>{'>'} PRODUCTION HISTORY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-[#00ffff]" />
        </div>

        {/* Experience Entry */}
        <div className="panel border border-[#333333] bg-black p-8">
          {/* Company & Role */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Cognizant Technology Solutions
                </h3>
                <p className="text-xl text-[#00ffff] mb-2">Software Engineer</p>
                <div className="mono text-sm text-[#666666]">
                  <span>Feb 2023 – Jun 2024</span>
                  <span className="mx-2">|</span>
                  <span>1 year 5 months</span>
                </div>
              </div>
              <div className="px-4 py-2 border border-[#333333] mono text-xs text-[#00ff41] self-start">
                FULL-TIME
              </div>
            </div>
          </div>

          {/* Responsibilities & Achievements */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ChevronRight className="text-[#00ffff] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-white font-medium mb-1">AI-Assisted Process Automation</p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Engineered computer vision pipeline using Python and OpenCV for automated document
                  processing, reducing manual intervention by 60%.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ChevronRight className="text-[#00ffff] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-white font-medium mb-1">Backend API Development</p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Architected and deployed RESTful APIs using Flask and PostgreSQL, handling 10K+
                  daily requests with 99.8% uptime.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ChevronRight className="text-[#00ffff] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-white font-medium mb-1">Performance Optimization</p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Optimized database queries and implemented caching strategies, achieving 30%
                  improvement in application response time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ChevronRight className="text-[#00ffff] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-white font-medium mb-1">Agile Development</p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Collaborated in cross-functional teams using Agile methodology, delivering 15+
                  production features across multiple sprints.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ChevronRight className="text-[#00ffff] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-white font-medium mb-1">Code Quality & Testing</p>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Maintained 85%+ code coverage with comprehensive unit and integration tests,
                  ensuring production stability.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Used */}
          <div className="mt-6 pt-6 border-t border-[#333333]">
            <p className="mono text-xs text-[#666666] mb-3">TECHNOLOGIES DEPLOYED:</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'OpenCV', 'Flask', 'PostgreSQL', 'Git', 'Docker', 'Agile', 'REST API'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="mono text-xs px-3 py-1 border border-[#333333] text-[#a0a0a0]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
