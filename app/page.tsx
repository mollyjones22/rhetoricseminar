import Link from "next/link";

const menuLinks = [
  { href: "/registration", label: "Registration" },
  { href: "/seminars", label: "Seminars" },
  { href: "/poster", label: "Poster" },
  { href: "/news", label: "News" },
];

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#231e59",
        backgroundImage: "url('/bgsite.png')",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <div className="inline-block rounded-2xl bg-white px-4 py-3 text-center shadow-[0_0_20px_6px_rgba(255,255,255,0.7),0_0_60px_15px_rgba(255,255,255,0.4)] sm:px-8 sm:py-4">
          <nav className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-0">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block px-4 text-xl text-black no-underline transition-colors duration-300 hover:text-[#231e59]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="h-screen sm:h-[150vh]" />
    </div>
  );
}
