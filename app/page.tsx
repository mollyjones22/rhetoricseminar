import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#231e59",
        backgroundImage: "url('/bgsite.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Navigation variant="dark" />
      <div className="h-screen sm:h-[150vh]" />
    </div>
  );
}
