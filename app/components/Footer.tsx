export default function Footer() {
  return (
    <footer className="bg-[#021263] px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left: sponsors */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:items-start">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/90 sm:text-sm">
            Generously sponsored by
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex h-16 w-32 items-center justify-center sm:h-20 sm:w-40 md:h-24 md:w-48">
              <img
                src="/harvard_logo.jpg"
                alt="Harvard University"
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex h-16 w-32 items-center justify-center sm:h-20 sm:w-40 md:h-24 md:w-48">
              <img
                src="/ISHR_logo.jpg"
                alt="Institute for Strategy, Politics & Security"
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right: UF logo */}
        <div className="flex h-16 w-32 items-center justify-center sm:h-20 sm:w-40 md:h-24 md:w-48">
          <img
            src="/uf_logo.png"
            alt="University of Florida"
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
