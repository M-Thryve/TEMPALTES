"use client";

import { useExtensions } from "./ExtensionProvider";

type BookingLinkProps = {
  fallback_url?: string;
  children: React.ReactNode;
  className?: string;
};

export function useBookingUrl(fallback?: string): string | undefined {
  const ext = useExtensions();

  if (ext.calendly.enabled && ext.calendly.tour_booking_url) {
    return ext.calendly.tour_booking_url;
  }

  if (ext.google_calendar.enabled && ext.google_calendar.tour_booking_url) {
    return ext.google_calendar.tour_booking_url;
  }

  return fallback;
}

export default function BookingLink({
  fallback_url,
  children,
  className = "",
}: BookingLinkProps) {
  const url = useBookingUrl(fallback_url);

  if (!url) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
