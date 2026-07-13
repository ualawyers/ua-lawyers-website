export const site = {
  name: "United Associates Barristers & Solicitors",
  shortName: "UA Lawyers",
  url: "https://ualawyers.com.au",
  phone: "(03) 8637 0821",
  email: "info@ualawyers.com.au",
  address: {
    line1: "Level 12, 350 Collins Street",
    line2: "Melbourne VIC 3000",
  },
  mapQuery: "Level 12, 350 Collins Street, Melbourne VIC 3000",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "Insights", href: "/blog" },
  { label: "Our People", href: "/our-people" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const stats = [
  { value: "12+", label: "Legal Practice Experience" },
  { value: "1600+", label: "Clients Served" },
  { value: "2300+", label: "Cases Handled" },
] as const;
