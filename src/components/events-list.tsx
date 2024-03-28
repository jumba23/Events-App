import { EventoEvent } from "@/lib/types";

type EventListProps = {
  events: EventoEvent[];
};

const EventsList = ({ events }: EventListProps) => {
  return (
    <section>
      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </section>
  );
};

export default EventsList;
