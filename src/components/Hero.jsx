import { Mail, Phone } from "lucide-react";

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
            <a href="mailto:jessie@grandifloragardenservices.co.nz" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:opacity-90 transition font-medium">
              <Mail size={18} /> Email Jessie
            </a>
            <a href="tel:02041221600" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 hover:border-black/30 transition font-medium">
              <Phone size={18} /> 020 4122 1600
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
          {/* Intentionally left without imagery to keep a clean, monochrome focus on contact actions */}
          <div className="rounded-2xl border border-black/10 p-8">
            <p className="text-xl font-medium">Ready when you are.</p>
            <p className="mt-2 text-black/70">Email or call to schedule hedge trimming or regular garden care.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:jessie@grandifloragardenservices.co.nz" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:opacity-90 transition text-sm font-medium">
                <Mail size={16} /> Email Jessie
              </a>
              <a href="tel:02041221600" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:border-black/30 transition text-sm font-medium">
                <Phone size={16} /> 020 4122 1600
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
