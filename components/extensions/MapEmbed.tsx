"use client";

import { useExtensions } from "./ExtensionProvider";

type MapEmbedProps = {
  fallback_url?: string;
  address?: string;
  className?: string;
};

export default function MapEmbed({
  fallback_url,
  address,
  className = "",
}: MapEmbedProps) {
  const ext = useExtensions();

  const embedUrl =
    ext.google_maps.enabled && ext.google_maps.google_maps_embed_url
      ? ext.google_maps.google_maps_embed_url
      : fallback_url;

  if (!embedUrl) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-16 text-neutral-400 ${className}`}
      >
        <p className="text-sm">
          Google Maps integration — configure the google_maps extension or
          provide a fallback_url
        </p>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-xl border border-neutral-200 ${className}`}
    >
      <iframe
        src={embedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={address ? `Map of ${address}` : "Warehouse location map"}
      />
    </div>
  );
}
