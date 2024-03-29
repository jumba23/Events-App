import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// This function is used to merge Tailwind CSS classes with the clsx utility.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// This function is used to pause the execution of the program for a specified amount of time.
export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
