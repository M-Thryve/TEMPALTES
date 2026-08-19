"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { useFormHandler } from "@/components/extensions";

type ContactFormProps = {
  intro?: string;
  className?: string;
};

export default function ContactForm({ intro, className = "" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { submitForm } = useFormHandler("contact");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    await submitForm(data);
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section className={`bg-neutral-50 py-24 ${className}`}>
      <Container>
        <div className="mx-auto max-w-2xl">
          {intro && (
            <p className="mb-8 text-center text-neutral-600">{intro}</p>
          )}
          {submitted ? (
            <div className="rounded-xl border border-accent-200 bg-accent-50 p-8 text-center">
              <h3 className="font-heading text-lg font-semibold text-accent-700">
                Message Sent
              </h3>
              <p className="mt-2 text-sm text-accent-600">
                Thank you for reaching out. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md bg-primary-500 px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:ring-offset-2 disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
