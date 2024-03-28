import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// This function is used to merge Tailwind CSS classes with the clsx utility.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
