import { Scissors, Leaf, Calendar, Sprout } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Hedge Trimming",
      desc: "Crisp, clean lines and perfectly shaped hedges to elevate your property.",
    },
    {
      icon: Leaf,
      title: "Garden Maintenance",
      desc: "Weeding, pruning, mulching, and seasonal tidy-ups to keep gardens thriving.",
    },
    {
      icon: Calendar,
      title: "Regular Upkeep",
      desc: "Scheduled visits to keep your garden immaculate all year round.",
    },
    {
      icon: Sprout,
      title: "Planting & Advice",
      desc: "New plantings, care tips, and planning for healthy, vibrant spaces.",
    },
  ];

  return (
    <section id="services" className="bg-white text-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h2>
        <p className="mt-3 text-black/70 max-w-prose">Professional care for hedges and gardens with a meticulous eye for detail.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 p-6 hover:shadow-sm transition">
              <div className="h-10 w-10 grid place-items-center rounded-full bg-black text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="text-sm text-black/70 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
