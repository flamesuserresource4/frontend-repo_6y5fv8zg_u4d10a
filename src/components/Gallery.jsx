export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1616628188502-bc19b871f8fb?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567598508481-65985588c1e9?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1629213052301-be54d851d729?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="bg-white text-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Recent Work</h2>
        <p className="mt-3 text-black/70 max-w-prose">A glimpse of trimmed hedges and maintained gardens.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl border border-black/10">
              <img src={src} alt="Hedge and garden" className="h-full w-full object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
