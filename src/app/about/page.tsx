import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PickSmart Magazine's mission to help beginners and DIY enthusiasts make smarter woodworking decisions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="About PickSmart Magazine"
        description="Helping beginners and DIY enthusiasts make smarter decisions before starting woodworking projects or buying tools."
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-10 text-[var(--color-charcoal)] leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] mb-3">
            Our Mission
          </h2>
          <p>
            PickSmart Magazine exists to make woodworking and DIY projects
            more approachable. Whether you&apos;re building your first
            birdhouse or outfitting a home workshop from scratch, the amount
            of conflicting advice and product options out there can be
            overwhelming. We cut through the noise with clear, well-organized
            information so you can make confident decisions, one project at
            a time.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] mb-3">
            What We Do
          </h2>
          <p>
            We publish woodworking project guides, tool explainers, buying
            guides, and product reviews. Our team researches, compares, and
            analyzes publicly available product information, manufacturer
            specifications, and user feedback to write content that is
            useful whether you&apos;re shopping for a first table saw or
            planning your next weekend build. Unless an article explicitly
            says otherwise, our reviews and comparisons are based on research
            and analysis rather than in-house testing.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] mb-3">
            Our Approach
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We write for beginners first, without talking down to experienced makers.</li>
            <li>We explain the &quot;why&quot; behind our recommendations, not just the &quot;what.&quot;</li>
            <li>We avoid exaggerated claims and sales language.</li>
            <li>We disclose our affiliate relationships clearly and consistently.</li>
            <li>We update our content as products, prices, and best practices change.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] mb-3">
            How We&apos;re Supported
          </h2>
          <p>
            PickSmart Magazine may earn a commission from qualifying
            purchases made through affiliate links on our site, at no extra
            cost to you. This support allows us to keep producing free,
            in-depth content. It never influences the honesty of our
            recommendations. Read our full{" "}
            <a href="/affiliate-disclosure" className="underline text-[var(--color-forest)]">
              Affiliate Disclosure
            </a>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] mb-3">
            Get in Touch
          </h2>
          <p>
            Have a question, a project to share, or a correction to suggest?
            Visit our{" "}
            <a href="/contact" className="underline text-[var(--color-forest)]">
              Contact page
            </a>{" "}
            — we read every message.
          </p>
        </section>
      </div>
    </>
  );
}
