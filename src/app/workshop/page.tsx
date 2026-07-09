import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CategoryArticleGrid from "@/components/CategoryArticleGrid";

export const metadata: Metadata = {
  title: "Workshop Setup",
  description:
    "Layout, storage, dust collection, safety, and lighting advice for building a woodworking workshop that works for you, no matter the size.",
};

export default function WorkshopPage() {
  return (
    <>
      <PageHero
        label="Workshop"
        title="Workshop Setup"
        description="A well-organized workshop makes every project easier and safer. Explore layout ideas, storage solutions, and setup advice for garages, basements, and dedicated shops alike."
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <CategoryArticleGrid categoryName="Workshop Setup" />
      </div>
    </>
  );
}
