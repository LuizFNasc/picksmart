import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How PickSmart Magazine earns commissions through affiliate links.",
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalLayout label="Legal" title="Affiliate Disclosure" updated="July 9, 2026">
      <p>
        PickSmart Magazine is a participant in various affiliate marketing
        programs, which means we may earn commissions from qualifying
        purchases made through links on our site, at no additional cost to
        you.
      </p>

      <h2>How This Works</h2>
      <p>
        When you click certain links to retailer or manufacturer websites
        and make a purchase, we may receive a small commission. This helps
        support the research, writing, and maintenance behind PickSmart
        Magazine, and it does not increase the price you pay.
      </p>

      <h2>Our Editorial Standards</h2>
      <p>
        Affiliate relationships never determine which products we cover or
        how we describe them. Our recommendations are based on research,
        comparison, and analysis of publicly available information,
        specifications, and user feedback. We use language like &quot;we
        research, compare, and analyze&quot; rather than &quot;we
        tested&quot; unless our team has explicitly conducted hands-on
        testing, in which case the article will say so directly.
      </p>

      <h2>Identifying Affiliate Links</h2>
      <p>
        Articles that contain affiliate links, including product reviews and
        buying guides, include a disclosure notice near the top of the page.
      </p>

      <h2>Questions</h2>
      <p>
        If you have questions about our affiliate relationships, please reach
        out through our{" "}
        <a href="/contact" className="underline text-[var(--color-forest)]">
          Contact page
        </a>
        .
      </p>
    </LegalLayout>
  );
}
