import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPropsPage = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};
// function that generates metadata for the page
export const generateMetadata = ({ params }: Props): Metadata => {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
};

// zod validation schema for page number
const pageNumberSchema = z.coerce.number().int().positive().optional();

const EventsPage = async ({ params, searchParams }: EventsPropsPage) => {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
