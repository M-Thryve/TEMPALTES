"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ImageAsset } from "@/components/extensions";

type GalleryItem = {
  image: string;
  alt: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
  className?: string;
};

export default function GalleryGrid({ items, className = "" }: GalleryGridProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Our Facility"
          heading="Inside Our Warehouse"
          description="A modern, climate-controlled facility designed for security and operational efficiency."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.alt}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[4/3]">
                <ImageAsset
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
