import H1 from "@/components/h1";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

const EventPage = async ({ params }: EventPageProps) => {
  const slug = params.slug;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await response.json();
  console.log("Single Event :", event);

  return (
    <main>
      <section className="relative  overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-with: 1280) 100vw, 1280px"
          className="object-cover blur-3xl z-0"
          priority
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {/* display date in day name comma name of the month and then day number of month */}
              {/* example: Friday, July 12 */}
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 bg-blur text-lg capitalize mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="text-center px-5 py-16 min-h-[75vh]">
        <section className="mb-12">
          <h2 className="text-2xl mb-8">About this event</h2>
          <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
            {event.description}
          </p>
        </section>
        <section>
          <h2 className="text-2xl mb-8">Location</h2>
          <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
            {event.location}
          </p>
        </section>
      </div>
    </main>
  );
};

export default EventPage;
