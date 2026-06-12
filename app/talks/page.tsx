import type { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Talks",
};

interface Talk {
  presenter: string;
  topic: string;
  date: string;
  calendarDate: string;
}

const talks: Talk[] = [
  {
    presenter: "Adele Scafuro (Brown University)",
    topic:
      "Returning confiscated land to exiles: reconciliation, arbitration, court judgment and SEG 36.750 and 751, the Mytilene decree(s)",
    date: "October 6, 12 noon ET",
    calendarDate: "20261006",
  },
  {
    presenter: "Kostas Apostolakis (University of Crete)",
    topic: "Law, Rhetoric and Comedy in Fourth-century Athens",
    date: "October 13, 12 noon ET",
    calendarDate: "20261013",
  },
  {
    presenter: "Marios Mammatas (University of Crete)",
    topic: "Constructing moral character in Against Macartatus",
    date: "October 20, 12 noon ET",
    calendarDate: "20261020",
  },
  {
    presenter: "Allison Glazebrook (Brock University)",
    topic: "Female Social Networks: Reframing Lysias 1",
    date: "October 27, 12 noon ET",
    calendarDate: "20261027",
  },
  {
    presenter: "Craig Cooper (University of Lethbridge)",
    topic: "The Comedic in Hyperides",
    date: "November 3, 12 noon ET",
    calendarDate: "20261103",
  },
];

const columns = [
  { key: "presenter" as const, label: "Presenter" },
  { key: "topic" as const, label: "Topic" },
  { key: "date" as const, label: "Date" },
];

function escapeCalendarText(text: string) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function getCalendarHref(talk: Talk) {
  const title = `Seminar in Greek Rhetoric: ${talk.topic}`;
  const description = `${talk.presenter}\n${talk.date}`;
  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Seminar in Greek Rhetoric//Talks//EN",
    "BEGIN:VEVENT",
    `UID:${talk.calendarDate}-${talk.presenter
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}@rhetoricseminar`,
    `DTSTART;TZID=America/New_York:${talk.calendarDate}T120000`,
    `DTEND;TZID=America/New_York:${talk.calendarDate}T130000`,
    `SUMMARY:${escapeCalendarText(title)}`,
    `DESCRIPTION:${escapeCalendarText(description)}`,
    "LOCATION:Zoom",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(calendar)}`;
}

function getCalendarFilename(talk: Talk) {
  const slug = talk.topic.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `${talk.calendarDate}-${slug}.ics`;
}

export default function TalksPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 py-10 text-base sm:px-16 sm:text-lg">
        <h2 className="mb-8 text-xl font-bold sm:text-2xl">Talks</h2>

        {/* Desktop table */}
        <div className="mt-8 hidden w-full sm:block">
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-5 border-b-2 border-[#231e59] py-2.5 font-bold">
            <div>Presenter</div>
            <div>Topic</div>
            <div>Date</div>
          </div>

          {talks.map((talk, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_2fr_1fr] gap-5 border-b border-gray-200 py-2.5"
            >
              <div>{talk.presenter || "\u00A0"}</div>
              <div>{talk.topic || "\u00A0"}</div>
              <div className="flex flex-col items-start gap-2">
                <span>{talk.date || "\u00A0"}</span>
                <a
                  href={getCalendarHref(talk)}
                  download={getCalendarFilename(talk)}
                  className="inline-block rounded-md border border-[#021263] px-2.5 py-1 text-sm font-semibold text-[#021263] no-underline transition-colors duration-200 hover:bg-[#021263] hover:text-white"
                >
                  Add to calendar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="mt-8 flex flex-col gap-4 sm:hidden">
          {talks.map((talk, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              {columns.map((col) => (
                <div
                  key={col.key}
                  className="flex justify-between border-b border-gray-200 py-2 last:border-b-0"
                >
                  <span className="font-bold">{col.label}</span>
                  {col.key === "date" ? (
                    <span className="flex flex-col items-end gap-2 text-right">
                      <span>{talk.date || "\u00A0"}</span>
                      <a
                        href={getCalendarHref(talk)}
                        download={getCalendarFilename(talk)}
                        className="inline-block rounded-md border border-[#021263] px-2.5 py-1 text-sm font-semibold text-[#021263] no-underline transition-colors duration-200 hover:bg-[#021263] hover:text-white"
                      >
                        Add to calendar
                      </a>
                    </span>
                  ) : (
                    <span className="text-right">
                      {talk[col.key] || "\u00A0"}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
