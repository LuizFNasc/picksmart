import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the PickSmart Magazine team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get in Touch"
        description="Questions about an article, a correction to suggest, or a partnership idea? We'd love to hear from you."
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-14">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-[var(--color-beige-dark)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-forest)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-md border border-[var(--color-beige-dark)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-forest)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">Message</label>
            <textarea
              rows={6}
              required
              className="w-full rounded-md border border-[var(--color-beige-dark)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-forest)]"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-[var(--color-forest)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-forest-dark)] transition-colors"
          >
            Send Message
          </button>
        </form>
        <p className="mt-8 text-sm text-[var(--color-charcoal-light)]">
          You can also reach us directly at{" "}
          <a href="mailto:hello@picksmartmagazine.com" className="underline text-[var(--color-forest)]">
            hello@picksmartmagazine.com
          </a>
          . We aim to respond within two business days.
        </p>
      </div>
    </>
  );
}
