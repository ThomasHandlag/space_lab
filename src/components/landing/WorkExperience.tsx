import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "KTech, Da Nang",
    role: "Full Stack Developer",
    period: "July 2025 - October 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "AudiLab, Singapore",
    role: "Tool Developer",
    period: "February 2025 - July 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "Space Jam, Da Nang",
    role: "Solo Developer",
    period: "October 2025 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
];

export default function WorkExperience() {
  return (
    <section id="resume" className="py-24 bg-l-bg-alt relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-l-heading mb-4">
            My Work Experience
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-5.5 top-1 w-4.5 h-4.5 rounded-full border-4 border-primary bg-l-bg z-10" />

                {/* Icon */}
                <div className="absolute left-0 top-0 w-4.5 h-4.5" />

                <div className="bg-l-card rounded-2xl p-6 shadow-sm border border-l-card-border hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-l-heading">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium text-sm flex items-center gap-2">
                        <Briefcase size={14} />
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-l-muted bg-l-muted-bg px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-l-text text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
