import type { Metadata } from "next";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Seminar in Greek Rhetoric, Law, and Society",
    template: "%s | Seminar in Greek Rhetoric, Law, and Society",
  },
  description:
    "Seminar in Greek Rhetoric, Law, and Society - Fall 2026. University of Florida.",
  openGraph: {
    title: "Seminar in Greek Rhetoric, Law, and Society",
    description: "Seminar in Greek Rhetoric, Law, and Society - Fall 2026",
    type: "website",
    locale: "el_GR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="antialiased">
      <body className="flex min-h-screen flex-col bg-white text-black">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
