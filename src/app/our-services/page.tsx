import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title:
    "Legal Services at United Associates at United Associates Barristers & Solicitors",
  description:
    "Explore the range of expert legal services provided by United Associates, including commercial litigation, family law, and migration law. Learn more about our experienced team of barristers and solicitors.",
};

export default function OurServicesPage() {
  return (
    <>
      <PageHero title="Expert Legal Services" crumbs={[{ label: "Our Services" }]} />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Tailored Legal Solutions, Proven Results.
          </h2>

          <ul className="mt-14 grid gap-10 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} className="border-t border-hairline pt-7">
                <h3 className="text-xl font-semibold">
                  <Link href={`/${s.slug}`} className="transition-colors hover:text-brand">
                    {s.name}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{s.summary}</p>
                <Link
                  href={`/${s.slug}`}
                  className="mt-5 inline-block text-sm font-semibold text-brand hover:underline"
                >
                  Learn more →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
