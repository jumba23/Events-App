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
      <section className="relative h-[361px] overflow-hidden">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-with: 1280) 100vw, 1280px"
          className="object-cover blur-3xl"
          priority
        />
        <div>
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />
        </div>
      </section>
    </main>
  );
};

export default EventPage;
