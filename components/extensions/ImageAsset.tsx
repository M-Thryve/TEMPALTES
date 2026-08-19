"use client";

import Image from "next/image";
import { useExtensions } from "./ExtensionProvider";

type ImageAssetProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function getImageSrc(
  src: string,
  config?: { enabled: boolean; cloud_name: string; folder: string }
): string {
  if (!config?.enabled || !config.cloud_name) return src;

  const cleanFolder = config.folder.replace(/^\/|\/$/g, "");
  const cleanSrc = src.replace(/^\//, "");

  return `https://res.cloudinary.com/${config.cloud_name}/image/upload/${cleanFolder}/${cleanSrc}`;
}

export default function ImageAsset({
  src,
  alt,
  fill = false,
  className = "",
  priority = false,
  sizes,
}: ImageAssetProps) {
  const ext = useExtensions();
  const resolvedSrc = getImageSrc(src, ext.cloudinary);

  if (fill) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={800}
      height={600}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
