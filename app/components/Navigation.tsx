"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/registration", label: "Registration" },
  { href: "/seminars", label: "Seminars" },
  { href: "/poster", label: "Poster" },
  { href: "/news", label: "News" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
        {/* Desktop links */}
        <div className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg no-underline transition-colors duration-300 ${
                pathname === link.href
                  ? "font-semibold text-[#231e59]"
                  : "text-black hover:text-[#231e59]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col items-center justify-center gap-[5px] sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-6 bg-black transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-gray-200 px-6 py-4 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-lg no-underline transition-colors duration-300 ${
                pathname === link.href
                  ? "font-semibold text-[#231e59]"
                  : "text-black hover:text-[#231e59]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
