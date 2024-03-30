import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";

type EventsListProps = {
  city: string;
  page: number;
};

const EventsList = async ({ city, page }: EventsListProps) => {
  // await sleep(2000);
  const events = await getEvents(city, page);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
