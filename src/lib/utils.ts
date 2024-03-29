import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
