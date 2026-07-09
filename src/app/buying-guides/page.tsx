import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CategoryArticleGrid from "@/components/CategoryArticleGrid";

export const metadata: Metadata = {
  title: "Buying Guides",
  description:
    "Side-by-side comparisons and research-backed recommendations to help you choose the right woodworking tool or material for your budget and skill level.",
};

export default function BuyingGuidesPage() {
  return (
    <>
      <PageHero
        label="Buying Guides"
        title="Buying Guides"
        description="Choosing the right tool shouldn't feel like guesswork. Our buying guides break down the specifications that actually matter, so you can compare options with confidence."
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <CategoryArticleGrid categoryName="Buying Guides" />
      </div>
    </>
  );
}
