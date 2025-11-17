import { Phone, Mail, Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="h-9 w-9 grid place-items-center rounded-full bg-black text-white">
            <Leaf size={18} />
          </div>
          <div>
            <p className="font-semibold tracking-tight text-black leading-none">Grandiflora</p>
            <p className="text-xs text-black/60 leading-none">Garden Services</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
          <a className="hover:text-black transition" href="#services">Services</a>
          {/* Gallery removed per request */}
          {/* <a className="hover:text-black transition" href="#gallery">Gallery</a> */}
          <a className="hover:text-black transition" href="#about">About</a>
          <a className="hover:text-black transition" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:02041221600" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-black/10 hover:border-black/30 transition">
            <Phone size={16} />
            <span className="text-sm font-medium">020 4122 1600</span>
          </a>
          <a href="mailto:jessie@grandifloragardenservices.co.nz" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:opacity-90 transition">
            <Mail size={16} />
            <span className="text-sm font-medium">Email Jessie</span>
          </a>
        </div>
      </div>
    </header>
  );
}
