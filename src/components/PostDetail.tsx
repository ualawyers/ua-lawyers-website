import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { relatedPosts, type Post } from "@/data/posts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function PostDetail({ post }: { post: Post }) {
  return (
    <>
      <PageHero
        title={post.heading}
        crumbs={[{ label: "Insights", href: "/blog" }, { label: post.heading }]}
        image={post.image}
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-hairline pb-6 text-sm text-ink-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.categories.join(", ")}</span>
            {post.tags.length > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <ul className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm bg-section px-2.5 py-1 text-xs font-medium"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Featured image */}
          <div className="relative mt-10 aspect-16/9 overflow-hidden rounded-md">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-cover"
            />
          </div>

          {/* Body */}
          <div className="prose-ua mt-12">
            {post.body.map((block, i) => {
              if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="bg-section py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Related posts
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-2">
            {relatedPosts(post.slug).map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="group block">
                  <div className="relative aspect-16/10 overflow-hidden rounded-md">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
                    {p.heading}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
