import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundColor: "#231e59",
        backgroundImage: "url('/bgsite.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Navigation />
      <div className="pointer-events-none fixed inset-x-0 top-20 z-10 sm:top-24">
        <div className="mx-auto w-full max-w-6xl px-3 sm:px-4">
          <div className="relative aspect-[1937/1865] w-screen max-w-[1937px]">
            <img
              src="/bgtitle.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain"
            />
            <section
              aria-label="Seminar title"
              className="absolute left-[31.33%] top-[20.5%] max-w-[38rem] font-sans leading-tight text-white"
            >
              <h1 className="text-[7.2px] font-bold sm:text-[0.9rem]">
                Seminar Series in Greek Rhetoric, Law, and Society
              </h1>
              <p className="mt-1 text-[6.4px] font-normal sm:text-[0.8rem]">
                Organizer:{" "}
                <a
                  href="https://florida.academia.edu/IfigeneiaGiannadaki"
                  className="pointer-events-auto underline underline-offset-2"
                >
                  Ifigeneia Giannadaki
                </a>{" "}
                (University of Florida)
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="h-screen sm:h-[150vh]" />
    </div>
  );
}
