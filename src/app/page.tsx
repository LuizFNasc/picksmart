import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { articles, categories, featuredReview, flagshipArticle } from "@/lib/data";

export default function Home() {
  const featured = flagshipArticle;
  const latest = articles.slice(0, 6);
  const editorsChoice = articles.filter((a) => a.editorsChoice);

  return (
    <>
      {/* Hero */}
      <section className="wood-texture-hero text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 text-center">
          <span className="section-label text-[var(--color-beige)]">
            The Woodworking &amp; DIY Magazine
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl font-bold leading-tight">
            Build Smarter. Create Better.
          </h1>
          <p className="mt-5 text-lg text-[var(--color-beige)] max-w-2xl mx-auto leading-relaxed">
            Your trusted woodworking magazine for tools, projects, buying
            guides, and honest reviews.
          </p>
          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-block rounded-md bg-[var(--color-wood)] px-8 py-3 text-sm font-semibold text-white hover:bg-[var(--color-wood-dark)] transition-colors"
            >
              Explore Articles
            </Link>
          </div>
          <p className="mt-6 text-sm text-[var(--color-beige-dark)] italic">
            We research. You build.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      {featured && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <span className="section-label">Featured Story</span>
          <div className="mt-4 grid md:grid-cols-2 gap-8 items-center rounded-xl border border-[var(--color-beige-dark)] overflow-hidden bg-white">
            <div
              className="h-64 md:h-full bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-forest-dark)] bg-cover bg-center"
              style={{ backgroundImage: `url(${featured.image})` }}
            />

            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold text-[var(--color-wood-dark)] uppercase tracking-wide">
                {featured.category}
              </p>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[var(--color-charcoal)]">
                {featured.title}
              </h2>
              <p className="mt-3 text-[var(--color-charcoal-light)] leading-relaxed">
                {featured.excerpt}
              </p>
              <Link
                href={`/articles/${featured.slug}`}
                className="mt-5 inline-block text-sm font-semibold text-[var(--color-forest)] hover:text-[var(--color-wood-dark)]"
              >
                Read the full story &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="section-label">Latest Articles</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--color-forest)]">
              Fresh from the workshop
            </h2>
          </div>
          <Link href="/projects" className="hidden sm:block text-sm font-semibold text-[var(--color-forest)] hover:text-[var(--color-wood-dark)]">
            View all &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      <section className="bg-[var(--color-beige)] border-y border-[var(--color-beige-dark)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <span className="section-label">Popular Categories</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--color-forest)] mb-8">
            Find what you&apos;re looking for
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="rounded-lg border border-[var(--color-beige-dark)] bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <h3 className="font-serif font-bold text-[var(--color-charcoal)]">{cat.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-charcoal-light)] leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Choice */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <span className="section-label">Editor&apos;s Choice</span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--color-forest)] mb-8">
          Hand-picked recommendations
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {editorsChoice.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Featured Review */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <span className="section-label">Featured Review</span>
        <div className="mt-4 rounded-xl bg-[var(--color-forest)] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-beige)]">
              {featuredReview.category}
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold">
              {featuredReview.title}
            </h2>
            <p className="mt-3 text-[var(--color-beige)] max-w-2xl leading-relaxed">
              {featuredReview.excerpt}
            </p>
          </div>
          <Link
            href={`/articles/${featuredReview.slug}`}
            className="shrink-0 inline-block rounded-md bg-[var(--color-wood)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-wood-dark)] transition-colors text-center"
          >
            Read the Review
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
