import type { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Seminars",
};

interface Seminar {
  presenter: string;
  topic: string;
  date: string;
  videoUrl: string;
}

const seminars: Seminar[] = [
  { presenter: "", topic: "", date: "", videoUrl: "#" },
  { presenter: "", topic: "", date: "", videoUrl: "#" },
];

const columns = [
  { key: "presenter" as const, label: "Presenter" },
  { key: "topic" as const, label: "Topic" },
  { key: "date" as const, label: "Date" },
  { key: "videoUrl" as const, label: "Video" },
];

export default function SeminarsPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 py-10 text-base sm:px-16 sm:text-lg">
        <h2 className="mb-8 text-xl font-bold sm:text-2xl">Seminars</h2>

        {/* Desktop table */}
        <div className="mt-8 hidden w-full sm:block">
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-5 border-b-2 border-[#231e59] py-2.5 font-bold">
            <div>Presenter</div>
            <div>Topic</div>
            <div>Date</div>
            <div>Video</div>
          </div>

          {seminars.map((seminar, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-5 border-b border-gray-200 py-2.5"
            >
              <div>{seminar.presenter || "\u00A0"}</div>
              <div>{seminar.topic || "\u00A0"}</div>
              <div>{seminar.date || "\u00A0"}</div>
              <div>
                {seminar.videoUrl && seminar.videoUrl !== "#" && (
                  <a
                    href={seminar.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#231e59] underline hover:text-black"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="mt-8 flex flex-col gap-4 sm:hidden">
          {seminars.map((seminar, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 p-4"
            >
              {columns.map((col) => (
                <div key={col.key} className="flex justify-between border-b border-gray-200 py-2 last:border-b-0">
                  <span className="font-bold">{col.label}</span>
                  <span className="text-right">
                    {col.key === "videoUrl" ? (
                      seminar.videoUrl && seminar.videoUrl !== "#" ? (
                        <a
                          href={seminar.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#231e59] underline hover:text-black"
                        >
                          YouTube
                        </a>
                      ) : (
                        "\u00A0"
                      )
                    ) : (
                      seminar[col.key] || "\u00A0"
                    )}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
