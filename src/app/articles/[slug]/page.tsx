import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, featuredReview } from "@/lib/data";

// Slugs with a dedicated, hand-written page under src/app/articles/<slug>/page.tsx
// (long-form flagship pieces) are excluded here so this dynamic route doesn't
// generate a conflicting static path for them.
const DEDICATED_PAGES = new Set([
  "woodworking-for-beginners-guide",
  "first-five-hand-tools",
]);

const all = [
  ...articles,
  { ...featuredReview, readTime: "10 min read" },
].filter((a) => !DEDICATED_PAGES.has(a.slug));

export function generateStaticParams() {
  return all.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = all.find((a) => a.slug === slug);
  return {
    title: article ? article.title : "Article",
    description: article?.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = all.find((a) => a.slug === slug);
  if (!article) notFound();

  const isCommercial = article.category === "Product Reviews" || article.category === "Buying Guides";

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
      <span className="section-label">{article.category}</span>
      <h1 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-[var(--color-forest)] leading-tight">
        {article.title}
      </h1>
      <p className="mt-4 text-lg text-[var(--color-charcoal-light)] leading-relaxed">
        {article.excerpt}
      </p>

      {isCommercial && (
        <div className="mt-6 rounded-md bg-[var(--color-beige)] border border-[var(--color-beige-dark)] px-4 py-3 text-sm text-[var(--color-charcoal-light)]">
          This article may contain affiliate links. If you purchase through a
          link on this page, we may earn a commission at no extra cost to
          you. Learn more in our{" "}
          <Link href="/affiliate-disclosure" className="underline hover:text-[var(--color-forest)]">
            Affiliate Disclosure
          </Link>
          .
        </div>
      )}

      <div
        className="mt-8 h-72 rounded-lg bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-beige-dark)] bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      />

      <div className="mt-8 space-y-5 max-w-none text-[var(--color-charcoal)] leading-relaxed">
        {article.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-[var(--color-beige-dark)]">
        <Link href="/" className="text-sm font-semibold text-[var(--color-forest)] hover:text-[var(--color-wood-dark)]">
          &larr; Back to Home
        </Link>
      </div>
    </article>
  );
}
