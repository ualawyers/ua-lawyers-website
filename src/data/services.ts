import type { PersonSlug } from "./people";

export type Service = {
  slug: string;
  name: string;
  /** SEO <title> — carried over from the WordPress site. */
  title: string;
  /** SEO meta description — carried over from the WordPress site. */
  metaDesc: string;
  /** Short blurb used on the home page and /our-services grid. */
  summary: string;
  /** Long-form copy for the "Overview" block on the detail page. */
  overview: string;
  /** The red sub-service tiles. */
  subServices: string[];
  /** Lawyers listed under "Contacts" on the detail page. */
  contacts: PersonSlug[];
  /** Slug of the post shown under "Featured Insights", if any. */
  featuredPost?: string;
};

export const services: Service[] = [
  {
    slug: "commercial-litigation",
    name: "Commercial Litigation",
    title:
      "Commercial Litigation Lawyers - Business Dispute Resolution in Melbourne",
    metaDesc:
      "Our expert commercial litigation lawyers provide strategic solutions for business disputes, including contract breaches, partnership disagreements, and debt recovery. Contact us for tailored legal advice.",
    summary:
      "Commercial litigation is a core practice at UA Lawyers. Business disputes—arising from contracts, transactions, or competition—can lead to costly litigation. With the right legal strategy, many can be resolved efficiently, saving time and resources.",
    overview:
      "Commercial litigation is one of UA Lawyers' core practice areas. Business disputes are not confined to conflicts between merchants and customers; they can also arise between suppliers, partners, or competitors. In a constantly evolving commercial environment, disagreements over contract performance, transaction execution, or market competition can quickly escalate into legal disputes. If not handled properly, these conflicts may intensify, leading to prolonged, costly, and unpredictable court proceedings.",
    subServices: [
      "Commercial Disputes",
      "Interest Disputes",
      "Debt Recovery and Claims",
      "Construction Disputes",
      "Contract/Lease Disputes",
      "Cross-border Execution",
      "Property Disputes",
      "Franchise Disputes",
    ],
    contacts: ["shen-li", "james-xi", "qinyi-li"],
  },
  {
    slug: "corporate-commercial",
    name: "Corporate & Commercial",
    title:
      "Corporate & Commercial Lawyers – Mergers, Acquisitions, and Business Structuring",
    metaDesc:
      "Our corporate & commercial lawyers offer legal expertise in mergers, acquisitions, business structuring, and governance. Get expert advice tailored to your business needs.",
    summary:
      "UA Lawyers provides legal support in corporate law, compliance, transactions, and risk prevention, helping businesses navigate regulations, optimize operations, and minimize risks for stable growth in a competitive market.",
    overview:
      "UA Lawyers’ commercial law expertise helps businesses navigate Australia’s regulatory landscape while minimising compliance risks. We provide precise guidance on transactions, contracts, shareholder agreements, and restructuring, ensuring operations align with legal standards. Our proactive approach optimises corporate structures, mitigates disputes, and transforms compliance into a competitive advantage. By integrating risk prevention with strategic legal frameworks, we empower clients to achieve operational resilience and sustainable growth. From reducing fiduciary liabilities to safeguarding transactional integrity, we turn regulatory adherence into a catalyst for market success—helping businesses thrive in complex commercial environments.",
    subServices: [
      "Asset Restructuring",
      "Trust Establishment",
      "Commercial Leasing",
      "Personal Guarantee",
      "Contract Drafting",
      "Share Transfer",
      "Non-Disclosure Agreement",
      "Mergers and Acquisitions",
      "Business Sale and Purchase",
      "In-House Legal Counsel",
      "Bankruptcy Liquidation",
    ],
    contacts: ["shen-li", "james-xi", "qinyi-li"],
  },
  {
    slug: "migration-law",
    name: "Migration Law",
    title:
      "Migration Law Services – Expert Immigration Lawyers for Visa and Residency",
    metaDesc:
      "Our experienced migration lawyers provide expert advice and representation for visa applications, residency matters, and other immigration services. Get tailored legal support for your immigration needs.",
    summary:
      "We provide professional, efficient services to help clients immigrate to Australia. Our team understands the complexities of Australian immigration laws and tailors solutions to meet individual needs, ensuring compliance and maximizing success.",
    overview:
      "Immigration law is one of UA Lawyers’ core practice areas. We are committed to providing professional and efficient immigration legal services, helping clients successfully migrate to Australia. Given the complexity and frequent changes in Australian immigration policies, each visa category has distinct legal requirements and assessment criteria. Our immigration law team has in-depth expertise in Australian immigration regulations and tailors the most suitable migration plans based on each client’s circumstances and needs. We ensure that every step of the application process complies with the latest legal requirements, maximising the chances of success.",
    subServices: [
      "Visa Applications",
      "Skilled Migration Visas",
      "PIC Waiver Requests",
      "FCFCA Appeals",
      "Partner Visas",
      "Employer-Sponsored Visas",
      "ART Merits Review",
      "Investor Visas",
      "s57 Act",
      "Ministerial intervention",
    ],
    contacts: ["jingjing-luan"],
  },
  {
    slug: "family-law",
    name: "Family Law",
    title: "Family Law Services – Divorce, Custody & Property Settlements",
    metaDesc:
      "Our family law experts offer compassionate legal support for divorce, child custody, property settlements, and domestic violence matters. Get professional guidance for your family law issues.",
    summary:
      "UA Lawyers offers warm, professional family law services, providing expert legal support for complex emotional and legal disputes. We focus on personalized advice, helping clients navigate issues like marriage changes, asset division, and child custody.",
    overview:
      "UA Lawyers is committed to providing compassionate, professional, and valuable legal services in family law. We understand the emotional and legal complexities of matters such as marriage breakdowns, property settlements, and child custody disputes. Our experienced team offers personalised guidance, attentive listening, and tailored legal solutions to help clients navigate these challenges. With expertise in divorce, child custody, family violence intervention, prenuptial agreements, and cross-border matters, we identify key issues with precision and employ effective dispute resolution strategies to safeguard our clients’ interests and protect their legal rights.",
    subServices: [
      "Binding Financial Agreement",
      "Parenting Orders",
      "Property Settlement",
      "Divorce Application",
      "IVO Applications",
      "Cross-border Family Law Matters",
    ],
    contacts: ["qinyi-li", "jingjing-luan", "wilson-zhang"],
    featuredPost: "key-points-to-know-about-divorce-in-australia",
  },
  {
    slug: "property-law",
    name: "Property Law",
    title: "Property Law Services – Real Estate Transactions & Dispute Resolution",
    metaDesc:
      "Our property law experts provide legal support for real estate transactions, leasing agreements, property disputes, and more. Get trusted advice for your property-related legal needs.",
    summary:
      "UA Lawyers offers expert real estate legal services, covering property transfers, contracts, disputes, loans, FIRB applications, and more, providing tailored solutions to minimize risks and protect clients' interests in property transactions.",
    // NOTE: the live WordPress page shows *migration law* copy in this Overview block —
    // a content bug on the existing site. The correct property-law copy from
    // /our-services is used here instead. Confirm the intended long-form text.
    overview:
      "UA Lawyers offers expert real estate legal services, covering property transfers, contracts, disputes, loans, FIRB applications, and more, providing tailored solutions to minimize risks and protect clients' interests in property transactions.",
    subServices: [
      "Conveyancing",
      "Property Disputes",
      "FIRB Application",
      "Contract of Sale",
      "Loan Agreement",
      "Stamp Duty / Land Tax",
      "Construction Contracts",
      "Subdivision",
    ],
    contacts: ["jingjing-luan", "wilson-zhang"],
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property",
    title:
      "Intellectual Property Lawyers – Protect Your Innovations with Expert Legal Services",
    metaDesc:
      "Our intellectual property lawyers offer expert legal services to help protect patents, trademarks, copyrights, and trade secrets. Safeguard your innovations with professional advice and strong legal strategies.",
    summary:
      "UA Lawyers, as the exclusive overseas partner of Tong Hengyuan IP Agency, offers comprehensive services in patents, trademarks, and copyrights, helping businesses strengthen IP protection and enhance market competitiveness.",
    overview:
      "UA Lawyers has a distinct advantage in intellectual property, being the exclusive overseas partner of Tong Heng Yuan Intellectual Property Agency, the largest IP agency in South China. We provide comprehensive, one-stop services covering patents, trade marks, and copyrights, ensuring businesses receive seamless and strategic IP protection. With a highly skilled legal team and extensive international experience, we develop efficient, precise, and customised IP strategies tailored to each client’s needs. Our expertise, global perspective, and strong industry partnerships enable us to help businesses safeguard their innovations, strengthen market positions, and maintain a competitive edge in an increasingly dynamic landscape.",
    subServices: [
      "Patent Application",
      "Copyright Infringement",
      "Patent Infringement",
      "Trademark Registration",
      "Copyright Registration",
      "Trademark Infringement",
    ],
    contacts: ["louis-xu", "jingjing-luan"],
  },
  {
    slug: "will-probate",
    name: "Will & Probate",
    title:
      "Will & Probate Lawyers – Expert Advice for Will Disputes and Probate Administration",
    metaDesc:
      "Our will and probate lawyers provide expert legal services for will disputes, probate applications, and estate administration. Get trusted advice to manage your estate and resolve probate matters.",
    summary:
      "UA Lawyers offers services in Will drafting, estate planning, probate, estate dispute resolution, and family trust establishment, ensuring assets are passed according to clients' wishes and protecting heirs' legal rights in inheritance disputes.",
    overview:
      "Wills and probate are subject to strict legal requirements under Australian law, and any oversight may render a will invalid or lead to inheritance disputes. UA Lawyers provides comprehensive services, including will drafting, estate planning, probate applications, estate dispute resolution, and family trust establishment, ensuring that clients' assets are passed on according to their wishes. Additionally, we represent clients in estate disputes, will challenges (contesting a will), and intestacy claims (inheritance without a will) to safeguard the legal rights of beneficiaries and ensure fair and just outcomes in inheritance matters.",
    subServices: [
      "Will drafting",
      "Estate Dispute Resolution",
      "Will Challenges",
      "Estate Planning",
      "Family Trust Establishment",
      "Intestacy Claims",
      "Probate Applications",
      "Representation in Estate Disputes",
    ],
    contacts: ["jingjing-luan"],
    featuredPost: "why-a-will-is-more-important-than-you-think",
  },
  {
    slug: "criminal-defence",
    name: "Criminal Defence",
    title:
      "Criminal Defence Lawyers – Expert Legal Representation for Criminal Charges",
    metaDesc:
      "Our criminal defence lawyers provide expert legal representation for individuals facing criminal charges. Get a strong defence strategy tailored to your case to ensure the best possible outcome.",
    summary:
      "UA Lawyers specializes in Australian criminal law, offering expert legal support and advice for individuals and businesses. We focus on vulnerable groups, ensuring fair treatment and effective defense strategies in criminal cases.",
    overview:
      "Criminal cases directly impact an individual’s freedom and future, necessitating experienced legal representation for a robust defence. UA Lawyers offers comprehensive criminal defence services, including bail applications, not-guilty pleas, sentence negotiations, and appeals. Our expertise covers areas such as domestic violence charges, property offences, drug offences, fraud, traffic offences, and serious criminal matters. We are dedicated to safeguarding our clients' legal rights in every criminal case, ensuring they receive fair and just treatment throughout the legal process.",
    subServices: [
      "Bail Applications",
      "Appeals",
      "Not-guilty Pleas",
      "Defence",
      "Sentence Negotiations",
    ],
    contacts: ["annie-rao", "jingjing-luan", "wilson-zhang"],
    featuredPost: "gun-control-in-australia",
  },
  {
    slug: "notary-public",
    name: "Notary Public",
    title:
      "Notary Public Services – Document Certification & Legal Authentication",
    metaDesc:
      "Our notary public services include certifying documents, witnessing signatures, and providing legal authentication. Get reliable and professional notarization for your legal and business needs.",
    summary:
      "UA Lawyers provides efficient international notary and apostille services, ensuring global document recognition. Our experienced team offers tailored solutions with a typical processing time of two weeks, depending on DFAT’s schedule.",
    overview:
      "In today’s globalised world, a notary public plays a crucial role in cross-border legal matters. UA Lawyers provides notarisation, Hague Apostille certification, and document legalisation for a wide range of documents, including but not limited to company registration documents, powers of attorney, marriage and birth certificates, academic qualifications, affidavits, and statutory declarations. Our notarisation services comply with the requirements of Australian and international embassies, courts, and government agencies, ensuring that cross-border legal documents are properly recognised for immigration, business, litigation, and asset transactions.",
    subServices: [
      "Notarisation",
      "Hague Apostille Certification",
      "Document Legalisation",
    ],
    contacts: ["jingjing-luan"],
  },
  {
    slug: "employment-law",
    name: "Employment Law",
    title:
      "Employment Law Lawyers – Workplace Disputes, Contracts, & Unfair Dismissal",
    metaDesc:
      "Our employment law experts provide legal services for workplace disputes, employment contracts, unfair dismissal, and discrimination. Get professional advice and support tailored to your needs.",
    summary:
      "UA Lawyers provides services in employment contract drafting, dispute resolution, litigation, policy development, and compliance advice, ensuring the protection of legal rights for both employers and employees under Australian labor law.",
    overview:
      "Australian employment law provides robust protections for both employers and employees, with workplace disputes often involving unfair dismissal, workplace discrimination, workers’ compensation, wage disputes, employment contract disputes, and corporate labour compliance. UA Lawyers offers legal services for drafting and reviewing employment contracts, mediating and litigating workplace disputes, formulating employment policies, and providing compliance advice, ensuring that the rights of both employers and employees are fully protected.",
    subServices: [
      "Drafting Contract",
      "Litigating Workplace Disputes",
      "Reviewing Contract",
      "Formulating Policies",
      "Mediating Workplace Disputes",
      "Providing Compliance Advice",
    ],
    contacts: ["jingjing-luan"],
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

/** "Related Services" = every other practice area. */
export const relatedServices = (slug: string) =>
  services.filter((s) => s.slug !== slug);
