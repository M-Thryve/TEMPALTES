import PageHero from "@/components/sections/PageHero";
import StatsStrip from "@/components/sections/StatsStrip";
import GalleryGrid from "@/components/sections/GalleryGrid";
import SpecGrid from "@/components/sections/SpecGrid";
import SecurityStrip from "@/components/sections/SecurityStrip";
import Location from "@/components/sections/Location";
import CtaBand from "@/components/sections/CtaBand";
import { facilitiesData } from "@/content/data/facilities";

export default function FacilitiesPage() {
  return (
    <>
      <PageHero {...facilitiesData.hero} />
      <StatsStrip items={facilitiesData.stats} />
      <GalleryGrid items={facilitiesData.gallery} />
      <SpecGrid items={facilitiesData.specs} />
      <SecurityStrip items={facilitiesData.security} />
      <Location items={facilitiesData.location.items} tour_url={facilitiesData.location.tour_url} />
      <CtaBand cta={facilitiesData.cta} />
    </>
  );
}
