"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import { ImageAsset } from "@/components/extensions";

type HeroStat = {
  num: string;
  label: string;
};

type HeroCta = {
  label: string;
  href: string;
};

export type HeroProps = {
  heading: string;
  description: string;
  image?: string;
  cta?: HeroCta;
  stats?: HeroStat[];
  className?: string;
};

export default function Hero({
  heading,
  description,
  image,
  cta,
  stats,
  className = "",
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-neutral-900 py-24 sm:py-32 ${className}`}
    >
      {image && (
        <div className="absolute inset-0">
          <ImageAsset
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/85 via-primary-800/70 to-neutral-900/60" />
        </div>
      )}

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <Typography as="display" className="text-white">
            {heading}
          </Typography>
          <Typography as="body-lg" className="mt-6 text-neutral-200">
            {description}
          </Typography>
          {cta && (
            <div className="mt-8">
              <Button href={cta.href} variant="accent" size="lg">
                {cta.label}
              </Button>
            </div>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/15 pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl font-bold text-white">
                  {stat.num}
                </div>
                <div className="mt-1 text-sm text-neutral-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
