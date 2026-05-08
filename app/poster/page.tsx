import type { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Poster",
};

export default function PosterPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 py-10 text-base sm:px-16 sm:text-lg">
        <h2 className="mb-8 text-xl font-bold sm:text-2xl">Poster</h2>

        <div className="mx-auto max-w-4xl">
          <img
            src="/poster2026.png"
            alt="Seminar Poster 2026"
            loading="lazy"
            className="w-full rounded-lg"
          />

          <div className="mt-8 text-center">
            <a
              href="/poster2026.png"
              download
              className="inline-block rounded-lg bg-[#231e59] px-6 py-3 text-base font-bold text-white no-underline transition-colors duration-300 hover:bg-black"
            >
              Download Poster
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
