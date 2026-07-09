export default function Newsletter() {
  return (
    <section className="bg-[var(--color-beige)] border-y border-[var(--color-beige-dark)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 text-center">
        <span className="section-label">Newsletter</span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--color-forest)]">
          Get smarter buying decisions in your inbox
        </h2>
        <p className="mt-3 text-[var(--color-charcoal-light)] max-w-xl mx-auto">
          Join our readers who get honest buying guides, project ideas, and
          workshop tips delivered every week. No spam, no fluff.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 rounded-md border border-[var(--color-beige-dark)] bg-white px-4 py-3 text-sm text-[var(--color-charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-forest)]"
          />
          <button
            type="submit"
            className="rounded-md bg-[var(--color-forest)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-forest-dark)] transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-[var(--color-charcoal-light)]">
          By subscribing you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-[var(--color-forest)]">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
