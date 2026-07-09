import Link from "next/link";
import type { Article } from "@/lib/data";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col rounded-lg border border-[var(--color-beige-dark)] bg-white overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div
        className="h-40 bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-beige-dark)] bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      />

      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="section-label">{article.category}</span>
        <h3 className="font-serif text-lg font-bold leading-snug text-[var(--color-charcoal)] group-hover:text-[var(--color-forest)] transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-[var(--color-charcoal-light)] leading-relaxed flex-1">
          {article.excerpt}
        </p>
        <span className="text-xs text-[var(--color-wood-dark)] font-medium mt-2">{article.readTime}</span>
      </div>
    </Link>
  );
}
