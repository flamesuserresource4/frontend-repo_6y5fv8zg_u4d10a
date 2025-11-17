export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-black/70">© {new Date().getFullYear()} Grandiflora Garden Services. All rights reserved.</p>
        <div className="text-sm">
          <a href="mailto:jessie@grandifloragardenservices.co.nz" className="hover:underline">jessie@grandifloragardenservices.co.nz</a>
          <span className="mx-2">•</span>
          <a href="tel:02041221600" className="hover:underline">020 4122 1600</a>
        </div>
      </div>
    </footer>
  );
}
