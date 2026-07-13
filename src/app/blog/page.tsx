import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Legal Insights & Updates – Blog by United Associates Lawyers",
  description:
    "Stay informed with the latest legal insights, news, and updates from United Associates Lawyers. Explore articles on a range of legal topics and keep up to date with recent changes in the law.",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  return (
    <>
      <PageHero title="Insights" crumbs={[{ label: "Insights" }]} />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="grid gap-10 md:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="group flex h-full flex-col">
                  <div className="relative aspect-16/10 overflow-hidden rounded-md">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                    {p.categories.join(" · ")}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
                    {p.heading}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {p.metaDesc}
                  </p>
                  <time
                    dateTime={p.date}
                    className="mt-4 text-xs text-ink-muted"
                  >
                    {formatDate(p.date)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
