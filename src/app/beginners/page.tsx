import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CategoryArticleGrid from "@/components/CategoryArticleGrid";

export const metadata: Metadata = {
  title: "Beginner Woodworking",
  description:
    "Foundational skills, terminology, and first-project ideas for anyone picking up woodworking for the first time.",
};

export default function BeginnersPage() {
  return (
    <>
      <PageHero
        label="Beginners"
        title="Beginner Woodworking"
        description="New to woodworking? Start here. These guides cover the basics, from essential vocabulary to your first tools and your first project, without overwhelming jargon."
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <CategoryArticleGrid categoryName="Beginner Woodworking" />
      </div>
    </>
  );
}
