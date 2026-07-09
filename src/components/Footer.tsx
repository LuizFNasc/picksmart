import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/projects", label: "Projects" },
      { href: "/tools", label: "Tools" },
      { href: "/reviews", label: "Reviews" },
      { href: "/buying-guides", label: "Buying Guides" },
      { href: "/beginners", label: "Beginners" },
      { href: "/workshop", label: "Workshop" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-use", label: "Terms of Use" },
      { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest-dark)] text-[var(--color-beige)] mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-[var(--color-wood)] text-[var(--color-forest-dark)] font-serif text-lg font-bold">
                P
              </span>
              <span className="font-serif text-lg font-bold">PickSmart Magazine</span>
            </div>
            <p className="text-sm text-[var(--color-beige-dark)] max-w-sm leading-relaxed">
              We research, compare, and analyze woodworking tools and materials so
              beginners and DIY enthusiasts can build smarter, from the first cut
              to the final finish.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="section-label text-[var(--color-wood)] mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-beige-dark)] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--color-beige-dark)]">
          <p>© {new Date().getFullYear()} PickSmart Magazine. All rights reserved.</p>
          <p>Build Smarter. Create Better.</p>
        </div>
      </div>
    </footer>
  );
}
