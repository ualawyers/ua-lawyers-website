"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Entry = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  areas: string[];
};

export default function PeopleGrid({
  entries,
  filters,
}: {
  entries: Entry[];
  filters: string[];
}) {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? entries : entries.filter((e) => e.areas.includes(active))),
    [active, entries],
  );

  return (
    <>
      <ul className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by practice area">
        {filters.map((f) => (
          <li key={f} role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? "border-brand bg-brand text-white"
                  : "border-hairline text-ink hover:border-brand hover:text-brand"
              }`}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((person) => (
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

      {visible.length === 0 && (
        <p className="mt-12 text-ink-muted">No team members in this practice area yet.</p>
      )}
    </>
  );
}
