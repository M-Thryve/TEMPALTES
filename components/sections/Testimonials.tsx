import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type TestimonialItem = {
  quote: string;
  author: string;
  title: string;
};

type TestimonialsProps = {
  items: TestimonialItem[];
  className?: string;
};

export default function Testimonials({ items, className = "" }: TestimonialsProps) {
  return (
    <section className={`bg-neutral-50 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Testimonials"
          heading="What Our Clients Say"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <blockquote
              key={item.author}
              className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-0 p-8 shadow-card"
            >
              <svg
                className="mb-4 h-8 w-8 text-primary-200"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.193 0-2.31-.56-2.917-1.179ZM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.193 0-2.31-.56-2.917-1.179Z" />
              </svg>
              <p className="flex-1 text-neutral-700 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-neutral-100 pt-5">
                <div className="font-heading text-sm font-semibold text-neutral-900">
                  {item.author}
                </div>
                <div className="text-xs text-neutral-500">{item.title}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
