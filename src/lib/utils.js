import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const checkScreenSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    setScreenSize("mobile");
  } else if (width < 1024) {
    setScreenSize("tablet");
  } else if (width < 1440) {
    setScreenSize("desktop");
  } else {
    setScreenSize("large");
  }
};
