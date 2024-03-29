import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent } from "./types";

// This function is used to merge Tailwind CSS classes with the clsx utility.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// This function is used to pause the execution of the program for a specified amount of time.
export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const getEvents = async (city: string) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      // This option allows the browser to cache the response for 5 minutes.
      // next: {
      //   revalidate: 300,
      // },
    }
  );

  const events: EventoEvent[] = await response.json();
  console.log("Events :", events);

  return events;
};
