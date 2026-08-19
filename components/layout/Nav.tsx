"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";
import WarehouseMark from "./WarehouseMark";

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-0 shadow-navbar">
      <nav
        className="container-page flex h-18 items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          {site.logo ? (
            <Image
              src={site.logo}
              alt={`${site.companyName} logo`}
              width={36}
              height={36}
              className="rounded object-contain"
              priority
            />
          ) : (
            <span className="flex h-9 w-9 items-center justify-center rounded bg-accent-500">
              <WarehouseMark />
            </span>
          )}
          <span className="font-heading text-sm font-bold leading-tight text-primary-800">
            {site.companyName}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {site.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary-50 text-primary-500"
                  : "text-neutral-700 hover:text-primary-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={site.headerCta.href}
            className="ml-3 rounded-md bg-accent-500 px-5 py-2 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            {site.headerCta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded p-2 text-primary-800 transition-colors hover:bg-neutral-100 lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-neutral-0 px-4 pb-4 lg:hidden">
          {site.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded px-4 py-3 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary-50 text-primary-500"
                  : "text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={site.headerCta.href}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md bg-accent-500 px-4 py-3 text-center font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            {site.headerCta.label}
          </Link>
        </div>
      )}
    </header>
  );
}
