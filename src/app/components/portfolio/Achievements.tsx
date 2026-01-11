import { Trophy, CheckCircle2, Calendar } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      title: '1st Place – Oracle Hackathon 2025',
      date: '2025',
      type: 'COMPETITION',
      organization: 'Oracle Corporation',
      description:
        'Engineered full-stack application using Oracle APEX, SQL, Python, and ML algorithms. Demonstrated rapid prototyping and production-ready system design.',
      tech: ['Oracle APEX', 'SQL', 'Python', 'Machine Learning'],
      verified: true,
    },
    {
      title: 'Best Technical Innovation – WMHTIA HealthTech Hackathon 2025',
      date: '2025',
      type: 'INNOVATION',
      organization: 'West Midlands Health Tech Innovation Alliance',
      description:
        '3D medical imaging reconstruction system using PyTorch and Open3D. Real-time visualization with Three.js and FastAPI backend.',
      tech: ['PyTorch', 'Open3D', 'FastAPI', 'Next.js', 'Three.js'],
      verified: true,
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4 mono text-sm text-[#00ff41]">
            <Trophy size={18} />
            <span>{'>'} VERIFIED RECORDS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-[#00ffff]" />
        </div>

        {/* Achievements List */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="panel border border-[#333333] bg-[#0a0a0a] p-8 hover:border-[#00ffff] transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 border border-[#333333] bg-black">
                  <Trophy className="text-[#00ffff]" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="mono text-xs px-2 py-1 border border-[#333333] text-[#00ff41]">
                      {achievement.type}
                    </span>
                    <span className="mono text-xs text-[#666666] flex items-center gap-1">
                      <Calendar size={12} />
                      {achievement.date}
                    </span>
                    {achievement.verified && (
                      <span className="flex items-center gap-1 mono text-xs text-[#00ff41]">
                        <CheckCircle2 size={12} />
                        VERIFIED
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="mono text-sm text-[#666666]">{achievement.organization}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#a0a0a0] leading-relaxed mb-4">{achievement.description}</p>

              {/* Tech Stack */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="mono text-xs text-[#666666]">TECH:</span>
                {achievement.tech.map((tech) => (
                  <span
                    key={tech}
                    className="mono text-xs px-2 py-1 border border-[#333333] text-[#a0a0a0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="panel border border-[#333333] bg-black p-4 text-center">
            <p className="text-3xl font-bold text-[#00ffff] mono mb-1">2</p>
            <p className="text-xs mono text-[#666666]">HACKATHONS WON</p>
          </div>
          <div className="panel border border-[#333333] bg-black p-4 text-center">
            <p className="text-3xl font-bold text-[#00ffff] mono mb-1">1</p>
            <p className="text-xs mono text-[#666666]">1ST PLACE</p>
          </div>
          <div className="panel border border-[#333333] bg-black p-4 text-center">
            <p className="text-3xl font-bold text-[#00ffff] mono mb-1">1</p>
            <p className="text-xs mono text-[#666666]">INNOVATION AWARD</p>
          </div>
          <div className="panel border border-[#333333] bg-black p-4 text-center">
            <p className="text-3xl font-bold text-[#00ff41] mono mb-1">100%</p>
            <p className="text-xs mono text-[#666666]">VERIFIED</p>
          </div>
        </div>
      </div>
    </section>
  );
}
