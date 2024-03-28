import { EventoEvent } from "@/lib/types";

type EventCardProps = {
  event: EventoEvent;
};

const EventCard = ({ event }: EventCardProps) => {
  return <section>{event.name}</section>;
};

export default EventCard;
