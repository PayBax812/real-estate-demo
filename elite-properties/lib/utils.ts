import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  }
  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(0)} Lakh`;
  }
  return `₹${price.toLocaleString("en-IN")}`;
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const msg = message || "Hi, I'm interested in property consultation. Please share more details.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

export function getFrameSrc(index: number): string {
  const padded = String(index).padStart(5, "0");
  return `/frames/${padded}.png`;
}
