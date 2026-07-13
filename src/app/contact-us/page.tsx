import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact United Associates Barristers & Solicitors – Get in Touch",
  description:
    "Contact United Associates Barristers & Solicitors today for expert legal assistance. Get in touch via phone, email, or our easy-to-use contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" crumbs={[{ label: "Contact Us" }]} />

      {/* Location */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Connect with our team
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">
            From our office in the Melbourne CBD, we support our clients wherever they need
            us.
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Location
              </h3>
              <address className="mt-6 space-y-4 text-base not-italic">
                <p className="leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
                <p>
                  <a
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                    className="font-medium hover:text-brand"
                  >
                    {site.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${site.email}`} className="font-medium hover:text-brand">
                    {site.email}
                  </a>
                </p>
              </address>

              <div className="relative mt-8 aspect-16/10 overflow-hidden rounded-md">
                <Image
                  src="/images/brand/office.jpg"
                  alt="The UA Lawyers office in the Melbourne CBD"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-md border border-hairline">
              <iframe
                title="Map showing the UA Lawyers office at Level 12, 350 Collins Street, Melbourne"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[26rem] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="bg-section py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            General Enquiries
          </h2>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
