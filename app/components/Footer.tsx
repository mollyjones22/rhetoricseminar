export default function Footer() {
  return (
    <footer className="bg-[#021263] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: sponsors */}
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <span className="text-sm font-semibold text-white">
            Generously sponsored by:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <img
              src="/harvard_logo.jpg"
              alt="Harvard University"
              className="h-20 object-contain sm:h-24"
            />
            <img
              src="/ISHR_logo.jpg"
              alt="Institute for Strategy, Politics & Security"
              className="h-20 object-contain sm:h-24"
            />
          </div>
        </div>

        {/* Right: UF logo */}
        <div className="flex items-center">
          <img
            src="/uf_logo.png"
            alt="University of Florida"
            className="h-20 object-contain sm:h-24"
          />
        </div>
      </div>
    </footer>
  );
}
