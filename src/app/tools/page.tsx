import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CategoryArticleGrid from "@/components/CategoryArticleGrid";

export const metadata: Metadata = {
  title: "Woodworking Tools",
  description:
    "Guides to hand tools and power tools for woodworking, explaining how they work and what to look for before adding one to your shop.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        label="Tools"
        title="Woodworking Tools"
        description="From hand planes to routers, we explain what each tool is for, how it works, and the key features worth understanding before you shop."
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <CategoryArticleGrid categoryName="Woodworking Tools" />
      </div>
    </>
  );
}
