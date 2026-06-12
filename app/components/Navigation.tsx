"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/registration", label: "Registration" },
  { href: "/talks", label: "Talks" },
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
  const textColor = isDark ? "text-white" : "text-[#021263]";
  const accentColor = isDark ? "text-white" : "text-[#021263]";
  const borderColor = isDark ? "border-white/20" : "border-gray-200";
  const burgerBg = isDark ? "bg-white" : "bg-[#021263]";
  const panelBg = isDark ? "bg-[#231e59]" : "bg-white";
  const hoverBg = isDark ? "hover:bg-white/10" : "hover:bg-[#021263]/5";
  const activeBg = isDark ? "bg-white/10" : "bg-[#021263]/5";
  const underlineColor = isDark ? "bg-white" : "bg-[#021263]";

  return (
    <div
      className={`sticky top-0 z-40 ${
        isDark ? "bg-[#231e59]/85 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"
      } border-b ${borderColor}`}
    >
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-3 py-3 sm:px-4 sm:py-4">
        {/* Left: site title */}
        <Link
          href="/"
          className={`shrink-0 text-sm font-semibold leading-tight no-underline ${textColor} hover:opacity-80 sm:text-base md:text-lg`}
        >
          <span className="block">Seminar Series in</span>
          <span className="block">Greek Rhetoric, Law, and Society</span>
        </Link>

        {/* Right: inline links on desktop */}
        <nav className="hidden md:flex md:items-end md:gap-1 lg:gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-3 py-2 text-base no-underline transition-colors duration-200 lg:text-lg ${
                  isActive
                    ? `font-semibold ${accentColor} ${activeBg}`
                    : `${textColor} ${hoverBg}`
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-[2px] ${underlineColor}`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: burger button (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="flex shrink-0 flex-col items-center justify-center gap-[5px] p-2 md:hidden"
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

      {/* Mobile dropdown menu (right-aligned) */}
      {open && (
        <div
          className={`absolute right-0 top-full z-50 w-full ${panelBg} border-t ${borderColor} shadow-lg md:hidden`}
        >
          <div className="flex flex-col items-end gap-1 px-3 py-3 sm:px-4 sm:py-4">
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
