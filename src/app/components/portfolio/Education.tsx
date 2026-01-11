import { GraduationCap, BookOpen } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'MSc Computer Science',
      institution: 'Birmingham City University',
      location: 'Birmingham, United Kingdom',
      period: '2025 – 2026',
      status: 'Current',
      modules: [
        'Artificial Intelligence',
        'Machine Learning',
        'Big Data Analytics',
        'Cloud Computing',
        'Advanced Algorithms',
        'Distributed Systems',
      ],
    },
    {
      degree: 'B.Tech Electronics & Communication Engineering',
      institution: 'Malla Reddy Institute of Technology and Science',
      location: 'Hyderabad, India',
      period: '2018 – 2022',
      status: 'Completed',
      modules: ['Digital Signal Processing', 'Data Structures', 'Computer Networks', 'MATLAB'],
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 px-6 bg-black/70 backdrop-blur-[2px]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4 mono text-sm text-[#00ff41]">
            <GraduationCap size={18} />
            <span>{'>'} ACADEMIC CREDENTIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-[#00ffff]" />
        </div>

        {/* Education Entries */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="panel border border-[#333333] bg-black p-8 hover:border-[#00ffff] transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="mono text-xs px-2 py-1 border border-[#333333] text-[#666666]">
                      EDU_{String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`mono text-xs px-2 py-1 border ${
                        edu.status === 'Current'
                          ? 'border-[#00ff41] text-[#00ff41]'
                          : 'border-[#333333] text-[#666666]'
                      }`}
                    >
                      {edu.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-lg text-[#00ffff] mb-1">{edu.institution}</p>
                  <p className="text-sm text-[#666666] mb-1">{edu.location}</p>
                  <p className="mono text-sm text-[#666666]">{edu.period}</p>
                </div>
              </div>

              {/* Relevant Modules */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="text-[#00ffff]" size={16} />
                  <span className="mono text-xs text-[#666666]">RELEVANT MODULES:</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {edu.modules.map((module) => (
                    <div key={module} className="flex items-start gap-2">
                      <span className="mono text-[#00ff41] text-xs mt-1">▸</span>
                      <span className="text-sm text-[#a0a0a0]">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Focus Summary */}
        <div className="panel mt-12 border border-[#333333] bg-black p-6 mono text-sm">
          <div className="text-[#00ff41] mb-3">$ education --summary</div>
          <div className="text-[#a0a0a0] space-y-1">
            <p>
              <span className="text-white">Total Degrees:</span> 2
            </p>
            <p>
              <span className="text-white">Specialization:</span> Computer Science & AI
            </p>
            <p>
              <span className="text-white">Research Focus:</span> Machine Learning, Big Data, Cloud
              Systems
            </p>
            <p>
              <span className="text-white">Status:</span>{' '}
              <span className="text-[#00ff41]">Actively Researching</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
