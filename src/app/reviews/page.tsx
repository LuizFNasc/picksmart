import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CategoryArticleGrid from "@/components/CategoryArticleGrid";

export const metadata: Metadata = {
  title: "Product Reviews",
  description:
    "Honest, research-driven reviews of woodworking tools and accessories, including where each option makes sense and where it doesn't.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        label="Reviews"
        title="Product Reviews"
        description="We research specifications, compare models, and analyze user feedback to give you a clear, honest picture of each product. Unless stated otherwise, our reviews are based on research and comparison rather than hands-on testing."
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <CategoryArticleGrid categoryName="Product Reviews" />
      </div>
    </>
  );
}
