import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CategoryArticleGrid from "@/components/CategoryArticleGrid";
import { categories } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  return {
    title: category ? category.name : "Category",
    description: category?.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <PageHero label="Category" title={category.name} description={category.description} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <CategoryArticleGrid categoryName={category.name} />
      </div>
    </>
  );
}
