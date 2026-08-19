"use client";

import Container from "@/components/ui/Container";
import { MapEmbed } from "@/components/extensions";

type GoogleMapsProps = {
  embed_url?: string;
  address?: string;
  className?: string;
};

export default function GoogleMaps({
  embed_url,
  address,
  className = "",
}: GoogleMapsProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <MapEmbed fallback_url={embed_url} address={address} />
      </Container>
    </section>
  );
}
