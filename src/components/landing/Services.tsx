import { MonitorSmartphone, Blocks, Gamepad } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Cross Platform App Development",
    color: "bg-[#906798]",
  },
  {
    icon: Blocks,
    title: "Blockchain Development",
    color: "bg-[#C0B7E8]",
  },
  {
    icon: Gamepad,
    title: "Game Development",
    color: "bg-[#3F3D56]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-l-bg relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-l-heading mb-4">
            My Services
          </h2>
          <p className="text-l-text max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-3xl border border-l-card-border bg-l-card hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-l-heading mb-3">
                {service.title}
              </h3>
              <p className="text-l-text text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justo vulputate, bibendum sodales
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
