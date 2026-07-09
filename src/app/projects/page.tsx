import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CategoryArticleGrid from "@/components/CategoryArticleGrid";

export const metadata: Metadata = {
  title: "Woodworking Projects",
  description:
    "Step-by-step woodworking project plans and inspiration for beginners and DIY enthusiasts, from simple weekend builds to more involved furniture pieces.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Woodworking Projects"
        description="Plans, plans variations, and inspiration for furniture, storage, and decor you can build at home. Every project notes the tools and skill level required so you can pick the right build for your shop."
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <CategoryArticleGrid categoryName="Woodworking Projects" />
      </div>
    </>
  );
}
