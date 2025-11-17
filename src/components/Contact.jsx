export default function Contact() {
  return (
    <section id="contact" className="bg-white text-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-black/10 p-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Get in Touch</h2>
          <p className="mt-3 text-black/70 max-w-prose mx-auto">
            For bookings and enquiries, email Jessie directly or call now.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:jessie@grandifloragardenservices.co.nz" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:opacity-90 transition font-medium">
              Email jessie@grandifloragardenservices.co.nz
            </a>
            <a href="tel:02041221600" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 hover:border-black/30 transition font-medium">
              Call 020 4122 1600
            </a>
          </div>
          <p className="mt-4 text-xs text-black/60">
            Servicing the wider South Auckland region.
          </p>
        </div>
      </div>
    </section>
  );
}
