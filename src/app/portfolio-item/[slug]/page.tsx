import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { people, personBySlug, practiceAreasFor } from "@/data/people";
import { services } from "@/data/services";
import { site } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = personBySlug(slug);
  if (!person) return {};
  return { title: person.title, description: person.metaDesc };
}

export default async function PersonPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const person = personBySlug(slug);
  if (!person) notFound();

  const areas = practiceAreasFor(person.slug);
  const phone = person.phone ?? site.phone;
  const email = person.email ?? site.email;

  return (
    <>
      <PageHero
        title={person.name}
        crumbs={[{ label: "Our People", href: "/our-people" }, { label: person.name }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[20rem_1fr]">
          {/* Sidebar */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-md bg-section">
              <Image
                src={person.photo}
                alt={person.name}
                fill
                priority
                sizes="(min-width: 1024px) 20rem, 100vw"
                className="object-cover object-top"
              />
            </div>

            <h2 className="mt-6 text-xl font-semibold">{person.name}</h2>
            <p className="text-brand">{person.role}</p>

            <dl className="mt-6 space-y-2 text-sm">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="text-ink-muted hover:text-brand"
                  >
                    {phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${email}`}
                    className="break-all text-ink-muted hover:text-brand"
                  >
                    {email}
                  </a>
                </dd>
              </div>
            </dl>

            {areas.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Expertise
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {areas.map((area) => {
                    const target = services.find((s) => s.name === area);
                    return (
                      <li key={area}>
                        <Link
                          href={`/${target?.slug ?? ""}`}
                          className="inline-block rounded-sm border border-hairline px-3 py-1.5 text-xs font-medium transition-colors hover:border-brand hover:text-brand"
                        >
                          {area}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Body */}
          <div>
            {person.about.length > 0 && (
              <>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  About
                </h2>
                <div className="mt-6 space-y-5">
                  {person.about.map((para) => (
                    <p key={para.slice(0, 40)} className="leading-relaxed text-ink-muted">
                      {para}
                    </p>
                  ))}
                </div>
              </>
            )}

            {person.qualifications.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Qualifications
                </h2>
                <ul className="mt-6 space-y-2.5">
                  {person.qualifications.map((q) => (
                    <li key={q} className="flex gap-3 text-ink-muted">
                      <span aria-hidden="true" className="text-brand">
                        —
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {person.education.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Education
                </h2>
                <ul className="mt-6 space-y-2.5">
                  {person.education.map((e) => (
                    <li key={e} className="flex gap-3 text-ink-muted">
                      <span aria-hidden="true" className="text-brand">
                        —
                      </span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/*
              `needs-content` people have no verified About/qualifications copy yet — the
              WordPress source still holds a former staff member's bio for these slugs.
              Show the practice areas they cover and a contact CTA rather than inventing
              a biography. Populate `about`/`qualifications`/`education` in people.ts and
              the sections above appear automatically.
            */}
            {person.bioStatus === "needs-content" && (
              <div className="rounded-md bg-section p-8">
                <h2 className="text-xl font-semibold">
                  Work with {person.name.split(" ")[0]}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {person.name} advises clients of {site.shortName}
                  {areas.length > 0 ? ` on ${areas.join(", ").toLowerCase()} matters` : ""}.
                  To arrange a consultation, get in touch with our Melbourne office.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-block rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
