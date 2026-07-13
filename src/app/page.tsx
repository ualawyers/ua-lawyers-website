import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { people } from "@/data/people";
import { posts } from "@/data/posts";
import { site, stats } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/brand/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-40">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
            {site.name}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Trusted. Tenacious.
            <br />
            On Your Side.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
            Expert legal services across commercial, family, migration and intellectual
            property law — from our office in the Melbourne CBD.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="rounded-sm bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Get in Touch
            </Link>
            <Link
              href="/our-services"
              className="rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Expert Legal Services + services grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Expert Legal Services
            </h2>
            <p className="mt-5 leading-relaxed text-ink-muted">
              We offer a full spectrum of legal services across multiple practice areas in
              Australia. Our team of highly skilled professionals provides strategic,
              efficient, and tailored legal solutions to businesses, individuals, and
              families.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex h-full flex-col rounded-md border border-hairline bg-white p-7 transition-colors hover:border-brand hover:bg-section"
                >
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-brand">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.summary}</p>
                  <span className="mt-5 text-sm font-semibold text-brand">Learn more →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stat counters */}
      <section className="bg-brand py-16">
        <dl className="mx-auto grid max-w-6xl gap-10 px-6 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-5xl font-semibold text-white">{s.value}</span>
                <span className="mt-2 block text-sm uppercase tracking-[0.15em] text-white/80">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Latest insights */}
      <section className="bg-section py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Legal Insights
            </h2>
            <Link href="/blog" className="text-sm font-semibold text-brand hover:underline">
              View all insights →
            </Link>
          </div>

          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="group block h-full">
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
                    {p.categories[0]}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
                    {p.heading}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Meet Our Experienced Legal Team
          </h2>
          <p className="mt-4 text-ink-muted">
            Meet the people who are focused on helping you achieve your goal.
          </p>

          <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {people.map((person) => (
              <li key={person.slug}>
                <Link
                  href={`/portfolio-item/${person.slug}`}
                  className="group block text-center"
                >
                  <div className="relative aspect-square overflow-hidden rounded-md bg-section">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold transition-colors group-hover:text-brand">
                    {person.name}
                  </h3>
                  <p className="text-sm text-ink-muted">{person.role}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get in Touch with Us
          </h2>
          <p className="mt-5 leading-relaxed text-ink-muted">
            UA Lawyers is committed to providing expert legal support. Whether you need
            advice or have questions about our services, contact us today to see how we can
            assist you.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-block rounded-sm bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
