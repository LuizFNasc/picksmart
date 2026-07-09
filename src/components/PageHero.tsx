export default function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-[var(--color-beige-dark)] bg-[var(--color-beige)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <span className="section-label">{label}</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--color-forest)] max-w-2xl">
          {title}
        </h1>
        <p className="mt-4 text-[var(--color-charcoal-light)] max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
