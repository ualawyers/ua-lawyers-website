"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "@/data/services";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const linkCls = (href: string) =>
    `text-sm font-medium transition-colors hover:text-brand ${
      pathname === href ? "text-brand" : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/brand/logo.png"
            alt="United Associates Barristers &amp; Solicitors"
            width={180}
            height={48}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className={linkCls("/")}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/our-services"
              className={`${linkCls("/our-services")} inline-flex items-center gap-1`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Our Services
              <svg
                className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <ul className="overflow-hidden rounded-md border border-hairline bg-white py-2 shadow-lg">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}`}
                        onClick={closeMenus}
                        className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-section hover:text-brand"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/blog" className={linkCls("/blog")}>
            Insights
          </Link>
          <Link href="/our-people" className={linkCls("/our-people")}>
            Our People
          </Link>
          <Link
            href="/contact-us"
            className="rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-hairline bg-white lg:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-3">
            <li>
              <Link href="/" onClick={closeMenus}
                className="block py-2.5 text-sm font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/our-services" onClick={closeMenus}
                className="block py-2.5 text-sm font-medium">
                Our Services
              </Link>
              <ul className="mb-1 border-l border-hairline pl-4">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      onClick={closeMenus}
                      className="block py-2 text-sm text-ink-muted"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenus}
                className="block py-2.5 text-sm font-medium">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/our-people" onClick={closeMenus}
                className="block py-2.5 text-sm font-medium">
                Our People
              </Link>
            </li>
            <li>
              <Link href="/contact-us" onClick={closeMenus}
                className="block py-2.5 text-sm font-medium text-brand">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
