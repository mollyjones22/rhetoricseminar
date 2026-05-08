import type { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 py-10 text-base sm:px-16 sm:text-lg">
        <h2 className="mb-8 text-xl font-bold sm:text-2xl">News</h2>
        <p className="text-gray-500">Coming soon.</p>
      </main>
    </>
  );
}
