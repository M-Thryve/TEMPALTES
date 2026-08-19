"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useBookingUrl } from "@/components/extensions";

type ScheduleTourProps = {
  intro?: string;
  url?: string;
  className?: string;
};

export default function ScheduleTour({ intro, url, className = "" }: ScheduleTourProps) {
  const bookingUrl = useBookingUrl(url);

  return (
    <section className={`bg-accent-500 py-16 ${className}`}>
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <h2 className="font-heading text-xl font-semibold text-white">
              Schedule a Facility Tour
            </h2>
            {intro && (
              <p className="mt-2 text-sm text-accent-100">{intro}</p>
            )}
          </div>
          {bookingUrl ? (
            <Button href={bookingUrl} variant="accent" size="md" className="border border-white/30 bg-white/10 text-white hover:bg-white/20">
              Book a Tour
            </Button>
          ) : (
            <Button href="/contact" variant="accent" size="md" className="border border-white/30 bg-white/10 text-white hover:bg-white/20">
              Contact Us
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
