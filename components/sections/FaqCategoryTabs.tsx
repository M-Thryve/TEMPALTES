"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type FaqCategoryItem = {
  category?: string;
  question: string;
  answer: string;
};

type FaqCategoryTabsProps = {
  items: FaqCategoryItem[];
  className?: string;
};

export default function FaqCategoryTabs({ items, className = "" }: FaqCategoryTabsProps) {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category).filter(Boolean)))] as string[];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="FAQs"
          heading="Frequently Asked Questions"
          description="Find answers to the most common questions about our services."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActive(cat);
                setOpenIndex(null);
              }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary-500 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200">
          {filtered.map((item, i) => (
            <div key={`${item.question}-${i}`} className="border-b border-neutral-200">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-heading text-sm font-semibold text-neutral-900">
                  {item.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
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
              {openIndex === i && (
                <div className="pb-5 text-sm leading-relaxed text-neutral-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-neutral-400">
              No questions in this category yet.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
