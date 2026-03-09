const skills = [
  "User Research",
  "Blockchain Development",
  "Cross Platform Development",
  "UI/UX",
  "Audio Processing",
  "Web Development",
  "Game Development",
  "3D Design",
  "Game VFX, SFX",
];

export default function SkillsMarquee() {
  return (
    <section className="py-8 bg-l-dark overflow-hidden">
      <div className="relative flex">
        {/* First marquee track */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {skills.map((skill, i) => (
            <span
              key={`a-${i}`}
              className="text-white/80 text-lg font-medium px-4 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {skill}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap ml-8">
          {skills.map((skill, i) => (
            <span
              key={`b-${i}`}
              className="text-white/80 text-lg font-medium px-4 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
