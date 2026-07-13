import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Contact
          </h2>
          <address className="mt-4 space-y-1.5 text-sm not-italic leading-relaxed">
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <p className="pt-2">
              <a className="hover:underline" href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {site.shortName}
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/90">
            {site.name}. Expert legal services across commercial, family, migration and
            intellectual property law, from the Melbourne CBD.
          </p>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-white/80">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
