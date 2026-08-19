import Link from "next/link";

export default function RoutePlaceholder({ title }: { title: string }) {
  return (
    <section className="container-page py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent-500">
          Page scaffold
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-neutral-900">
          {title}
        </h1>
        <p className="mt-4 text-neutral-600">
          This route is scaffolded and ready for content in a later build phase.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-primary-500 px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-primary-600"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
