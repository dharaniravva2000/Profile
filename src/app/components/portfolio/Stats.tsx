import { TrendingUp, Code, Award, Briefcase } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Briefcase,
      value: '1.5+',
      label: 'YEARS EXPERIENCE',
      color: 'text-[#00ffff]',
    },
    {
      icon: Code,
      value: '15+',
      label: 'PROJECTS DEPLOYED',
      color: 'text-[#00ffff]',
    },
    {
      icon: Award,
      value: '2',
      label: 'HACKATHONS WON',
      color: 'text-[#00ff41]',
    },
    {
      icon: TrendingUp,
      value: '30%',
      label: 'PERFORMANCE GAINS',
      color: 'text-[#00ff41]',
    },
  ];

  return (
    <section className="py-16 px-6 border-y border-[#333333] bg-black/70 backdrop-blur-[2px]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="panel border border-[#333333] bg-[#0a0a0a] p-6 text-center hover:border-[#00ffff] transition-colors duration-300"
              >
                <Icon className="mx-auto mb-3 text-[#666666]" size={24} />
                <p className={`text-4xl font-bold mono mb-2 ${stat.color}`}>{stat.value}</p>
                <p className="mono text-xs text-[#666666]">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
