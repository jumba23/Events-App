import H1 from "@/components/h1";
import { capitalize, getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

// ==================================== FETCHING DATA ====================================

// Even though we are fetching data in the page component in two places, React/Next.js will
// no fetch twice because it will cache the data after the first fetch. This is called mimoization.
// Mimimization is a technique used to cache the result of an expensive function call and return the

// =======================================================================================

// function that generates metadata for the page
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = params.slug;

  // fetch event data
  const event = await getEvent(slug);

  return {
    title: event.name,
  };
};

const EventPage = async ({ params }: Props) => {
  const slug = params.slug;

  // fetch event data
  const event = await getEvent(slug);

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

      <div className="text-center px-5 py-10 min-h-[75vh]">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
};

export default EventPage;

// utility components

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="mb-12">{children}</section>;
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl mb-8">{children}</h2>;
};

const SectionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </h3>
  );
};
