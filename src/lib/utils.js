import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function daysLeft(dateStr) {
  const targetDate = new Date(dateStr);
  const today = new Date();
  const timeDiff = targetDate.getTime() - today.getTime();
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}
