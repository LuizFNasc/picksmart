import PageHero from "@/components/PageHero";

export default function LegalLayout({
  label,
  title,
  updated,
  children,
}: {
  label: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero label={label} title={title} description={`Last updated: ${updated}`} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-6 text-[var(--color-charcoal)] leading-relaxed [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[var(--color-forest)] [&_h2]:mt-8 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        {children}
      </div>
    </>
  );
}
