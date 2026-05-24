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

interface NavigationProps {
  variant?: "light" | "dark";
}

export default function Navigation({ variant = "light" }: NavigationProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  const accentColor = isDark ? "text-white" : "text-[#231e59]";
  const borderColor = isDark ? "border-white/20" : "border-gray-200";
  const burgerBg = isDark ? "bg-white" : "bg-black";
  const containerBg = isDark ? "" : "bg-white";
  const panelBg = isDark ? "bg-[#231e59]" : "bg-white";
  const hoverBg = isDark ? "hover:bg-white/10" : "hover:bg-gray-50";
  const activeBg = isDark ? "bg-white/10" : "bg-gray-50";

  return (
    <div className={`relative ${containerBg} border-b ${borderColor}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        {/* Left: site title */}
        <Link
          href="/"
          className={`text-sm font-semibold leading-tight no-underline ${textColor} hover:opacity-80 sm:text-base md:text-lg`}
        >
          Seminar series in Greek rhetoric, law and society
        </Link>

        {/* Right: hamburger button (all screen sizes) */}
        <button
          onClick={() => setOpen(!open)}
          className="flex shrink-0 flex-col items-center justify-center gap-[5px] p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-6 ${burgerBg} transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 ${burgerBg} transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 ${burgerBg} transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown menu (right-aligned, all screen sizes) */}
      {open && (
        <div
          className={`absolute right-0 top-full z-50 w-full ${panelBg} border-t ${borderColor} shadow-lg sm:w-72 sm:rounded-bl-lg sm:border-l ${borderColor}`}
        >
          <div className="flex flex-col items-end gap-1 px-4 py-3 sm:px-6 sm:py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`w-full rounded px-3 py-2 text-right text-base no-underline transition-colors duration-200 sm:text-lg ${
                  pathname === link.href
                    ? `font-semibold ${accentColor} ${activeBg}`
                    : `${textColor} ${hoverBg}`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
