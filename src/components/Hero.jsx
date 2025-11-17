import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-black/60 mb-4">Wider South Auckland</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Elite Hedge Trimming & Garden Maintenance
          </h1>
          <p className="mt-6 text-black/70 text-lg max-w-prose">
            Meticulous hedges, healthy lawns, and immaculate gardens handled with prompt, friendly service. Over 5 years maintaining 800+ gardens across the region.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:opacity-90 transition font-medium">
              Get a Fast Quote <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 hover:border-black/30 transition font-medium">
              Our Services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-black/70">
            <div>
              <p className="text-2xl font-semibold text-black">5+</p>
              <p>Years of experience</p>
            </div>
            <div className="h-10 w-px bg-black/10" />
            <div>
              <p className="text-2xl font-semibold text-black">800+</p>
              <p>Happy clients</p>
            </div>
            <div className="h-10 w-px bg-black/10" />
            <div>
              <p className="text-2xl font-semibold text-black">Prompt</p>
              <p>Service you can trust</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1599916953768-92ef1295bd02?q=80&w=1600&auto=format&fit=crop"
              alt="Hedge trimming"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1592150621744-aca64f551e7b?q=80&w=800&auto=format&fit=crop"
                alt="Garden maintenance"
                className="h-28 w-44 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
