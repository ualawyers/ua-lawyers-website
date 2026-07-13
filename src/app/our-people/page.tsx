import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PeopleGrid from "@/components/PeopleGrid";
import { people, practiceAreaFilters, practiceAreasFor } from "@/data/people";

export const metadata: Metadata = {
  title:
    "Meet Our Legal Team – Experienced Barristers & Solicitors at United Associates",
  description:
    "Learn more about the experienced barristers and solicitors at United Associates. Our team is dedicated to providing expert legal services across various practice areas.",
};

export default function OurPeoplePage() {
  const entries = people.map((p) => ({
    slug: p.slug,
    name: p.name,
    role: p.role,
    photo: p.photo,
    areas: practiceAreasFor(p.slug),
  }));

  return (
    <>
      <PageHero title="Our People" crumbs={[{ label: "Our People" }]} />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Your Trusted Legal Partners
            </h2>
            <p className="mt-5 leading-relaxed text-ink-muted">
              UA Lawyers consists of four partners, eight practicing lawyers, and several
              legal assistants, all alumni of top Australian universities. With diverse
              industry backgrounds, our team provides multidisciplinary legal solutions and
              excels in complex transactions and landmark cases.
            </p>
          </div>

          <div className="mt-14">
            <PeopleGrid entries={entries} filters={practiceAreaFilters()} />
          </div>
        </div>
      </section>
    </>
  );
}
