import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimers regarding the content published on PickSmart Magazine.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout label="Legal" title="Disclaimer" updated="July 9, 2026">
      <h2>General Information</h2>
      <p>
        The information on PickSmart Magazine is provided for general
        informational and educational purposes only. While we strive to
        keep our content accurate and up to date, we make no representations
        or warranties of any kind, express or implied, about the
        completeness, accuracy, reliability, or suitability of the
        information contained on the site.
      </p>

      <h2>Safety Disclaimer</h2>
      <p>
        Woodworking and DIY projects involve tools, machinery, and materials
        that can cause injury if used improperly. Always read and follow
        manufacturer instructions, wear appropriate safety equipment, and
        follow all applicable local codes and regulations. PickSmart
        Magazine is not responsible for any injury, damage, or loss resulting
        from the use of information, project plans, or tool recommendations
        found on this site.
      </p>

      <h2>Product Information</h2>
      <p>
        Product specifications, prices, and availability referenced in our
        articles are subject to change and may not reflect the most current
        information available from the manufacturer or retailer. Always
        verify details directly with the seller before making a purchase.
      </p>

      <h2>Research-Based Content</h2>
      <p>
        Unless an article explicitly states that our team conducted
        hands-on testing, our reviews and comparisons are based on research,
        comparison, and analysis of publicly available information rather
        than in-person product testing.
      </p>

      <h2>External Links</h2>
      <p>
        Our site may link to external websites that are not provided or
        maintained by us. We do not guarantee the accuracy or completeness
        of any information on these external sites.
      </p>
    </LegalLayout>
  );
}
