import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms and conditions governing your use of PickSmart Magazine.",
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout label="Legal" title="Terms of Use" updated="July 9, 2026">
      <p>
        By accessing or using picksmartmagazine.com, you agree to be bound by
        these Terms of Use. If you do not agree, please do not use the site.
      </p>

      <h2>Use of Content</h2>
      <p>
        All articles, images, and other materials on this site are the
        property of PickSmart Magazine or its licensors and are protected by
        copyright law. You may share links to our content, but you may not
        republish, reproduce, or distribute our content without prior
        written permission.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        Content on this site is provided for general informational and
        educational purposes only. It is not a substitute for professional
        advice regarding safety, structural integrity, electrical work, or
        local building codes. Always follow manufacturer instructions and
        applicable safety guidelines when using tools or undertaking
        projects.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our site contains links to third-party websites, including retailer
        and affiliate links. We are not responsible for the content,
        accuracy, or practices of any third-party site.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        PickSmart Magazine is not liable for any damages, injuries, or losses
        resulting from the use of information found on this site, including
        reliance on project instructions, tool recommendations, or reviews.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms of Use from time to time. Continued use of
        the site after changes are posted constitutes acceptance of the
        revised terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent through our{" "}
        <a href="/contact" className="underline text-[var(--color-forest)]">
          Contact page
        </a>
        .
      </p>
    </LegalLayout>
  );
}
