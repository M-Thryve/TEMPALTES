"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import { useFormHandler } from "@/components/extensions";

type ProcessStep = {
  title: string;
  description: string;
};

type QuoteFormProps = {
  intro?: string;
  button_label?: string;
  process?: ProcessStep[];
  className?: string;
};

export default function QuoteForm({
  intro,
  button_label = "Submit Request",
  process,
  className = "",
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { submitForm } = useFormHandler("quote");

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
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            {intro && (
              <p className="mb-8 text-neutral-600">{intro}</p>
            )}
            {submitted ? (
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-8 text-center">
                <Typography as="h3">Thank You!</Typography>
                <p className="mt-3 text-sm text-neutral-600">
                  Your quote request has been submitted. Our team will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="q-name" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">Full Name *</label>
                    <input id="q-name" name="name" required className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20" />
                  </div>
                  <div>
                    <label htmlFor="q-email" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">Email *</label>
                    <input id="q-email" name="email" type="email" required className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="q-phone" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">Phone</label>
                    <input id="q-phone" name="phone" type="tel" className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20" />
                  </div>
                  <div>
                    <label htmlFor="q-company" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">Company</label>
                    <input id="q-company" name="company" className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20" />
                  </div>
                </div>
                <div>
                  <label htmlFor="q-service" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">Service Needed</label>
                  <select id="q-service" name="service" className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20">
                    <option value="">Select a service</option>
                    <option value="commercial">Commercial Storage</option>
                    <option value="industrial">Industrial Storage</option>
                    <option value="inventory">Inventory Management</option>
                    <option value="distribution">Distribution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="q-details" className="block text-xs font-medium uppercase tracking-wider text-neutral-700">Details</label>
                  <textarea id="q-details" name="details" rows={4} className="mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-sm text-neutral-800 transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20" />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                  {submitting ? "Submitting..." : button_label}
                </Button>
              </form>
            )}
          </div>

          {process && process.length > 0 && (
            <div>
              <Typography as="h3" className="mb-6">How It Works</Typography>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 font-heading text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-neutral-900">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
