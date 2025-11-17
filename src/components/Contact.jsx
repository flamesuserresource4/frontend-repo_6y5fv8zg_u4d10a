import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${baseUrl}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Something went wrong");

      setStatus({ type: "success", message: data.message });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Failed to send" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white text-black py-20">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Get a Fast, Friendly Quote</h2>
          <p className="mt-3 text-black/70 max-w-prose">
            Tell us a little about your garden and we'll get back to you promptly.
            All enquiries go straight to jessie@grandifloragardenservices.co.nz.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div className="rounded-2xl border border-black/10 p-6">
              <p className="text-2xl font-semibold">5+ Years</p>
              <p className="text-black/70">Successfully maintaining gardens</p>
            </div>
            <div className="rounded-2xl border border-black/10 p-6">
              <p className="text-2xl font-semibold">800+ Clients</p>
              <p className="text-black/70">Across wider South Auckland</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label className="text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="text-sm font-medium">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="text-sm font-medium">Phone</label>
              <input name="phone" defaultValue="02041221600" className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="text-sm font-medium">Suburb</label>
              <input name="suburb" placeholder="Eg. Papakura" className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="col-span-2">
              <label className="text-sm font-medium">Service</label>
              <select name="service" className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                <option>Hedge Trimming</option>
                <option>Garden Maintenance</option>
                <option>Regular Upkeep</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="text-sm font-medium">Message</label>
              <textarea name="message" rows="5" className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Tell us about your garden..." />
            </div>
          </div>
          <button disabled={loading} className="mt-4 w-full rounded-md bg-black text-white py-3 font-medium hover:opacity-90 disabled:opacity-60">
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
          {status && (
            <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {status.message}
            </p>
          )}
          <p className="mt-4 text-xs text-black/60">
            Prefer to call? Reach Jessie on <a href="tel:02041221600" className="underline">020 4122 1600</a> or email <a href="mailto:jessie@grandifloragardenservices.co.nz" className="underline">jessie@grandifloragardenservices.co.nz</a>.
          </p>
        </form>
      </div>
    </section>
  );
}
