import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PickSmart Magazine collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout label="Legal" title="Privacy Policy" updated="July 9, 2026">
      <p>
        PickSmart Magazine (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
        respects your privacy. This Privacy Policy explains what information
        we collect when you visit picksmartmagazine.com, how we use it, and
        the choices you have.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Information you provide directly, such as your name and email address when subscribing to our newsletter or contacting us.</li>
        <li>Automatically collected information, such as browser type, device type, pages visited, and referring URLs, typically gathered through cookies and analytics tools.</li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>To send newsletters and respond to inquiries.</li>
        <li>To understand how visitors use our site and improve our content.</li>
        <li>To display relevant advertising, including through third-party ad networks and affiliate partners.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use cookies and similar technologies to remember preferences,
        analyze traffic, and support affiliate tracking. You can disable
        cookies through your browser settings, though some site features may
        not function as intended.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party analytics and advertising providers who
        collect data under their own privacy policies. We may also
        participate in affiliate programs; see our{" "}
        <a href="/affiliate-disclosure" className="underline text-[var(--color-forest)]">
          Affiliate Disclosure
        </a>{" "}
        for details.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may unsubscribe from our newsletter at any time using the link in
        any email we send. You may also contact us to request access to or
        deletion of your personal information.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this policy can be sent through our{" "}
        <a href="/contact" className="underline text-[var(--color-forest)]">
          Contact page
        </a>
        .
      </p>
    </LegalLayout>
  );
}
