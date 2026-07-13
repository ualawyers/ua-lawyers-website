import Image from "next/image";
import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  crumbs = [],
  image = "/images/brand/hero.png",
}: {
  title: string;
  crumbs?: Crumb[];
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/80">
            <li>
              <Link href="/" className="hover:text-white hover:underline">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-white hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
