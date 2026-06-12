import type { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "News",
};

const posters = [
  { title: "Spring 2025", href: "/spring2025poster.pdf" },
  { title: "Spring 2023", href: "/spring2023poster.pdf" },
  { title: "Fall 2021", href: "/fall2021poster.pdf" },
];

export default function NewsPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 py-10 text-base leading-relaxed sm:px-16 sm:text-lg">
        <h1 className="mb-8 text-xl font-bold sm:text-2xl">
          Public engagement and impact
        </h1>

        <section className="max-w-4xl">
          <h2 className="mb-4 text-lg font-bold sm:text-xl">
            Seminar Series in Greek Rhetoric, Law, and Society, Spring 2025
          </h2>
          <p className="mb-3">
            Seminar in Greek Rhetoric, Law, and Society (Spring 2025), UF and
            International Society for the History of Rhetoric
          </p>
          <p className="mb-5">
            Organizer:{" "}
            <a
              href="https://florida.academia.edu/IfigeneiaGiannadaki"
              className="text-[#021263] underline hover:text-black"
            >
              Ifigeneia Giannadaki
            </a>{" "}
            (University of Florida)
          </p>
          <p>
            The fourth seminar in Greek Rhetoric, Law, and Society, organized by
            Ifigeneia Giannadaki (UF), was held virtually in March and April
            2025 and featured four international speakers, based in Greece,
            Canada and the US. The event was generously sponsored by a
            competitive grant by the International Society for the History of
            Rhetoric (ISHR) and attracted an international audience of attendees
            from over 14 countries in North America, Europe, Asia and Africa
            (including Italy, Greece, France, Switzerland, Norway, Canada,
            Poland, The Netherlands, Ghana, the UK, the US, Canada). The seminar
            participants represented over 18 HE institutions internationally
            (including, University College London, Royal Holloway, University of
            London; Princeton University, Columbia University, University of
            Koln, Sewanee, Simon Frazer, University of Crete; University of
            Athens; University of the Peloponnese; University of Manchester;
            University of Bari). The seminar papers were followed by lively
            discussions and debate over the original themes explored. More
            details are available{" "}
            <a
              href="https://classics.ufl.edu/center-for-greek-studies/2026/seminar-in-greek-rhetoric-law-and-society-spring-2025/"
              className="text-[#021263] underline hover:text-black"
            >
              here
            </a>
            .
          </p>
        </section>

        <section className="mt-12 max-w-4xl">
          <h2 className="mb-4 text-lg font-bold sm:text-xl">
            Past posters of the seminar series
          </h2>
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {posters.map((poster) => (
              <li
                key={poster.href}
                className="flex items-center justify-between gap-4 py-3"
              >
                <span>{poster.title}</span>
                <a
                  href={poster.href}
                  className="shrink-0 text-[#021263] underline hover:text-black"
                  download
                >
                  Download PDF
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
