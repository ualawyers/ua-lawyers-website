import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { relatedServices, type Service } from "@/data/services";
import { personBySlug } from "@/data/people";
import { postBySlug } from "@/data/posts";

export default function ServiceDetail({ service }: { service: Service }) {
  const featured = service.featuredPost ? postBySlug(service.featuredPost) : undefined;
  const contacts = service.contacts
    .map(personBySlug)
    .filter((p) => p !== undefined);

  return (
    <>
      <PageHero title={service.name} crumbs={[{ label: service.name }]} />

      {/* Overview */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Overview
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-ink-muted">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Featured Insights */}
      {featured && (
        <section className="bg-section py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Featured Insights
            </h2>
            <Link
              href={`/${featured.slug}`}
              className="group mt-8 grid gap-8 overflow-hidden rounded-md bg-white sm:grid-cols-[minmax(0,18rem)_1fr]"
            >
              <div className="relative aspect-16/10 sm:aspect-auto sm:h-full">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 18rem, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:py-9 sm:pr-9 sm:pl-0">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                  {featured.categories[0]}
                </p>
                <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-brand">
                  {featured.heading}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{featured.metaDesc}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-brand">
                  Read the article →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Sub-service tiles */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            What We Do
          </h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-md bg-white sm:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub) => (
              <li
                key={sub}
                className="bg-brand px-6 py-7 text-base font-semibold text-white outline outline-white/20"
              >
                {sub}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contacts */}
      {contacts.length > 0 && (
        <section className="bg-section py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Contacts
            </h2>
            <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {contacts.map((person) => (
                <li key={person.slug}>
                  <Link
                    href={`/portfolio-item/${person.slug}`}
                    className="group block text-center"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-md bg-white">
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
      )}

      {/* Related services */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Related Services
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {relatedServices(service.slug).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="inline-block rounded-sm border border-hairline px-5 py-3 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
