"use client";

import { usePathname } from "next/navigation";

const visiblePaths = new Set(["/registration", "/news"]);

export default function IconBand() {
  const pathname = usePathname();

  if (!visiblePaths.has(pathname)) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 top-20 z-20 hidden w-12 opacity-50 md:block"
      style={{
        right: "max(1rem, calc((100vw - 72rem) / 2 + 1rem))",
        backgroundImage: "url('/iconbig.png')",
        backgroundPosition: "top center",
        backgroundRepeat: "repeat-y",
        backgroundSize: "3rem auto",
      }}
    />
  );
}
