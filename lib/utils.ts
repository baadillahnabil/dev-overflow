import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { techMap } from "@/constants/techMap"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDevIconClassName = (name: string) => {
  const normalized = name.replace(/[ .]/g, "").toLowerCase()

  return techMap[normalized]
    ? `${techMap[normalized]} colored`
    : `devicon-devicon-plain`
}
