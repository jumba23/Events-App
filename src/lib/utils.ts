import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import Notfound from "@/app/not-found";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

// This function is used to merge Tailwind CSS classes with the clsx utility.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// This function is used to pause the execution of the program for a specified amount of time.
// export async function sleep(ms: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// This function is used to fetch events from the API.
// unstable_cache is next/cache's function that allows you to cache the response for a specified amount of time.
export const getEvents = unstable_cache(async (city: string, page = 1) => {
  //PREVIOUSLY FETCHING DATA FROM API
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  {
    // This option allows the browser to cache the response for 5 minutes.
    // next: {
    //   revalidate: 300,
    // },
  }
  // );
  // const events: EventoEvent[] = await response.json();
  // console.log("Events :", events);
  //===============================================================================

  // NOW FETCHING DATA FROM DATABASE
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return {
    events,
    totalCount,
  };
});

export const getEvent = unstable_cache(async (slug: string) => {
  //PREVIOUSLY FETCHING DATA FROM API
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );

  // const event: EventoEvent = await response.json();
  // console.log("Single Event :", event);

  // NOW FETCHING DATA FROM DATABASE
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
