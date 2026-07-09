import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/data";

export default function CategoryArticleGrid({ categoryName }: { categoryName: string }) {
  const items = articles.filter((a) => a.category === categoryName);

  if (items.length === 0) {
    return (
      <p className="text-[var(--color-charcoal-light)]">
        New articles in this category are on the way. Check back soon.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((a) => (
        <ArticleCard key={a.slug} article={a} />
      ))}
    </div>
  );
}
