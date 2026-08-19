import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import WarehouseMark from "./WarehouseMark";

export default function Footer() {
  return (
    <footer className="bg-secondary-500 text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              {site.logo ? (
                <Image
                  src={site.logo}
                  alt={`${site.companyName} logo`}
                  width={36}
                  height={36}
                  className="rounded object-contain"
                />
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded bg-accent-500">
                  <WarehouseMark />
                </span>
              )}
              <span className="font-heading text-sm font-bold text-white">
                {site.companyName}
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              {site.footer.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              {site.footer.socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded bg-white/10 text-xs font-bold text-white transition-colors hover:bg-accent-500"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white/50">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {site.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white/50">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {site.footer.serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white/50">
              Contact Us
            </h3>
            <address className="mt-5 not-italic">
              <p className="text-sm text-white/70">{site.footer.contact.address}</p>
              <p className="mt-3">
                <a
                  href={`tel:${site.footer.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="text-sm text-white/70 transition-colors hover:text-accent-400"
                >
                  {site.footer.contact.phone}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={`mailto:${site.footer.contact.email}`}
                  className="text-sm text-white/70 transition-colors hover:text-accent-400"
                >
                  {site.footer.contact.email}
                </a>
              </p>
              <p className="mt-3 text-sm text-white/50">{site.footer.contact.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {site.companyName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {site.footer.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-accent-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
