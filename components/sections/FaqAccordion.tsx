"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type FaqItem = {
  category?: string;
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-sm font-semibold text-neutral-900">
          {item.question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-neutral-600">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="FAQs"
          heading="Frequently Asked Questions"
          description="Find answers to the most common questions about our warehousing services."
        />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-neutral-200">
          {items.map((item) => (
            <FaqRow key={item.question} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
