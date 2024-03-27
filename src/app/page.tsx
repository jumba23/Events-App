import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold italic underline text-[#a4f839]">
          {" "}
          10,000 events
        </span>{" "}
        around you
      </p>

      <form className="w-full sm:w-[580px]">
        <input
          className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition hover:ring-2 focus:ring-2 focus:bg-white/10"
          placeholder="Enter your location"
          spellCheck={false}
        />
        <button>Search</button>
      </form>

      <section>
        <p>Popular:</p>
        <div>
          <Link href="/events/austin"></Link>
          <Link href="/events/seattle"></Link>
        </div>
      </section>
    </main>
  );
}
