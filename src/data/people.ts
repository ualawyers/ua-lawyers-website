import { services } from "./services";

export type PersonSlug =
  | "shen-li"
  | "louis-xu"
  | "james-xi"
  | "qinyi-li"
  | "jingjing-luan"
  | "wilson-zhang";

export type Person = {
  slug: PersonSlug;
  /** Display name, as shown in the team grid on the live site. */
  name: string;
  role: string;
  photo: string;
  title: string;
  metaDesc: string;
  phone?: string;
  email?: string;
  /** Long-form "About" copy. */
  about: string[];
  qualifications: string[];
  education: string[];
  /**
   * `needs-content` means the live WordPress portfolio item for this slug still holds a
   * former staff member's bio (e.g. /portfolio-item/james-xi/ renders "Wuhao Wang"), so the
   * About/qualifications/contact fields below are intentionally empty rather than wrong.
   * The name, role and photo ARE correct — they come from the team listings.
   * Fill these in and flip to `complete`; no layout changes needed.
   */
  bioStatus: "complete" | "needs-content";
};

export const people: Person[] = [
  {
    slug: "shen-li",
    name: "Shen Li",
    role: "Principal Lawyer & Director",
    photo: "/images/people/shen-li.jpg",
    title: "Shen Li – Dedicated Lawyer at United Associates Barristers & Solicitors",
    metaDesc:
      "Discover Shen Li, a skilled lawyer at United Associates Barristers & Solicitors. Learn about his expertise and commitment to providing exceptional legal services.",
    phone: "(03) 8840 6564",
    email: "shen.li@ualawyers.com.au",
    about: [
      "Li is the Principal Lawyer at UA Lawyers, with extensive practical experience in commercial litigation, international arbitration, dispute resolution, and cross-border enforcement. He is highly skilled in handling complex commercial disputes and specialises in providing precise legal strategies for both corporate and individual clients. He has successfully handled numerous high-risk litigation and cross-border disputes.",
      "As a dual-qualified lawyer in China and Australia, Li possesses in-depth knowledge of the legal systems, judicial procedures, and business environments of both countries. He provides efficient and compliant legal solutions to cross-border businesses and individuals. His expertise includes cross-border investments, international trade, commercial contract disputes, and cases before international arbitration institutions. He helps clients safeguard their legal rights in complex legal landscapes and ensures the smooth execution of business transactions.",
      "Li also has extensive experience in cross-border enforcement, with a deep understanding of the recognition and enforcement of foreign judgments and arbitral awards. He provides strong legal support to clients, ensuring the effective enforcement of domestic and international judgments.",
      "Known for his rigorous legal reasoning and exceptional litigation skills, Li is highly regarded by his clients. He adheres to a client-first approach, dedicated to delivering high-quality, efficient, and professional legal services. His goal is to provide practical and effective solutions to complex legal challenges for both domestic and international clients.",
    ],
    qualifications: [
      "Solicitor of the Supreme Court of Victoria",
      "Solicitor of the High Court of Australia",
      "Practising Lawyer in China",
    ],
    education: [
      "Juris Doctor (JD) – Australian National University",
      "Bachelor of Commerce (Finance and Accounting) – University of Melbourne",
    ],
    bioStatus: "complete",
  },
  {
    slug: "louis-xu",
    name: "Louis Xu",
    role: "Patent Examiner & Director",
    photo: "/images/people/louis-xu.jpg",
    title: "Louis Xu – Expert Lawyer at United Associates Barristers & Solicitors",
    metaDesc:
      "Meet Louis Xu, a skilled lawyer at United Associates Barristers & Solicitors. Learn about his qualifications and dedication to providing exceptional legal services.",
    phone: "(03) 8840 6566",
    email: "yifei.xu@ualawyers.com.au",
    about: [
      "Louis has been deeply engaged in the field of intellectual property for over eight years, specialising in patent applications and infringement analysis in the biopharmaceutical sector. With extensive practical experience in patent law, he has worked closely with cutting-edge biotechnology, understanding the critical link between technological innovation and intellectual property protection. He has played a key role in patent portfolio development and commercialisation across multiple high-impact technological domains.",
      "In the field of biology, Louis has led and facilitated the commercialisation of core technologies such as protein sequencing and spatial transcriptomics. These innovations are vital to the development of novel therapeutic solutions and have broad applications in personalised medicine and biotechnology research, providing strong support for industry advancements.",
      "Currently, Louis serves as the Overseas General Manager of Tong Hengyuan Intellectual Property Agency, where he brings extensive expertise in global IP management and strategic planning. He is particularly skilled in developing IP strategies for high-tech research achievements at the industrialisation stage. With deep knowledge in biopharmaceuticals, chemical engineering, agriculture, and zoology, he stays at the forefront of industry developments, providing enterprises with effective intellectual property protection and commercialisation strategies.",
    ],
    qualifications: ["Member of Australian Building and Property Association (VIC)"],
    education: [
      "Master of Agricultural Sciences – University of Melbourne",
      "Bachelor of Science (Environmental Sciences) – South China Agricultural University",
    ],
    bioStatus: "complete",
  },
  {
    slug: "james-xi",
    name: "James Xi",
    role: "Lawyer",
    photo: "/images/people/james-xi.png",
    title: "James Xi – United Associates Barristers & Solicitors",
    metaDesc:
      "Meet James Xi, a lawyer at United Associates Barristers & Solicitors, practising in commercial litigation and corporate & commercial law.",
    about: [],
    qualifications: [],
    education: [],
    bioStatus: "needs-content",
  },
  {
    slug: "qinyi-li",
    name: "Ada Yin",
    role: "Lawyer",
    photo: "/images/people/qinyi-li.png",
    title: "Ada Yin – United Associates Barristers & Solicitors",
    metaDesc:
      "Meet Ada Yin, a lawyer at United Associates Barristers & Solicitors, practising in family law and commercial law.",
    about: [],
    qualifications: [],
    education: [],
    bioStatus: "needs-content",
  },
  {
    slug: "jingjing-luan",
    name: "Jingjing Luan",
    role: "Lawyer",
    photo: "/images/people/jingjing-luan.png",
    title: "Jingjing Luan – United Associates Barristers & Solicitors",
    metaDesc:
      "Meet Jingjing Luan, a lawyer at United Associates Barristers & Solicitors, practising across migration, property, family and employment law.",
    about: [],
    qualifications: [],
    education: [],
    bioStatus: "needs-content",
  },
  {
    slug: "wilson-zhang",
    name: "Wilson Zhang",
    role: "Lawyer",
    photo: "/images/people/wilson-zhang.png",
    title: "Wilson Zhang – United Associates Barristers & Solicitors",
    metaDesc:
      "Meet Wilson Zhang, a lawyer at United Associates Barristers & Solicitors, practising in family law, property law and criminal defence.",
    about: [],
    qualifications: [],
    education: [],
    bioStatus: "needs-content",
  },
];

export const personBySlug = (slug: string) => people.find((p) => p.slug === slug);

/**
 * Practice areas are derived from each service's `contacts` list rather than duplicated
 * here, so a person and the services that list them can never drift apart.
 */
export const practiceAreasFor = (slug: PersonSlug) =>
  services.filter((s) => s.contacts.includes(slug)).map((s) => s.name);

/** Filter tabs on /our-people — only areas that actually have someone behind them. */
export const practiceAreaFilters = () => {
  const used = services.filter((s) => s.contacts.length > 0).map((s) => s.name);
  return ["All", ...Array.from(new Set(used))];
};
