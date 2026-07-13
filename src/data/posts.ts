export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  /** SEO <title> — carried over from the WordPress site. */
  title: string;
  /** On-page headline; differs from the SEO title on some posts. */
  heading: string;
  metaDesc: string;
  date: string;
  image: string;
  categories: string[];
  tags: string[];
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "gun-control-in-australia",
    title: "Gun Control in Australia – Overview of Gun Laws and Their Impact",
    heading: "Gun Control in Australia",
    metaDesc: "Explore Australia’s gun control laws and their history, focusing on the 1996 reforms and their effectiveness in reducing gun violence.",
    date: "2025-03-21",
    image: "/images/posts/gun-control.jpg",
    categories: ["Criminal Defence", "Legal Insights"],
    tags: ["gun"],
    body: [
      { type: "p", text: "The tragic massacre at the Christchurch mosque in New Zealand on 15 March 2019 sent shockwaves around the world and reignited the debate over gun control in Western countries. For many Chinese Australians, the topic of gun regulation in Australia is both intriguing and important. This blog post aims to shed light on Australia’s gun control laws and their evolution." },
      { type: "h3", text: "The Turning Point: The Port Arthur Massacre" },
      { type: "p", text: "The Port Arthur massacre in 1996 marked a watershed moment in Australia’s approach to gun control. On 28 April 1996, Martin Bryant, an unemployed man, used semi-automatic rifles and shotguns to open fire at the Broad Arrow Café and Seascape Guesthouse in Port Arthur, Tasmania. The attack resulted in the deaths of 35 people and left 23 injured, making it one of the deadliest mass shootings by a single perpetrator in history." },
      { type: "p", text: "Just 12 days after the massacre, the Australian government, led by Prime Minister John Howard, introduced the Firearms Act 1996. This legislation, which received widespread public and media support, imposed strict regulations on gun ownership. It banned the private ownership of semi-automatic rifles, semi-automatic shotguns, and pump-action shotguns. The law also prohibited the import and sale of automatic and semi-automatic firearms and handguns." },
      { type: "p", text: "Under the new law, anyone wishing to own a firearm must apply to the government, providing a valid reason (self-defence is not considered a valid reason). The application process involves multiple layers of scrutiny, and if approved, the individual must adhere to strict requirements, such as a 28-day waiting period and secure storage of firearms in locked containers." },
      { type: "h3", text: "The 2014 Sydney Lindt Café Siege" },
      { type: "p", text: "Another significant event in Australia’s gun control history was the 2014 Sydney Lindt Café siege. On 15-16 December 2014, a gunman held 17 people hostage in the Lindt Café in Sydney’s central business district. Two hostages were killed during the incident." },
      { type: "p", text: "In response, the Australian government initiated a three-month national gun amnesty starting on 1 July 2017. During this period, individuals could surrender unregistered firearms without facing penalties for illegal possession. This was the first nationwide amnesty since the Port Arthur massacre. By October 2017, over 51,000 unregistered firearms had been surrendered." },
      { type: "h3", text: "Australia’s Gun Control in Global Context" },
      { type: "p", text: "Australia’s gun control laws are among the strictest in the developed world. According to the Small Arms Survey 2017, Australia ranks 51st in the world for the ratio of privately owned firearms to population, with approximately 8 people per firearm. In contrast, New Zealand has a ratio of 4:1 (ranking 20th), and the United States has a ratio of 1.2 firearms per person, making it the country with the highest rate of private gun ownership." },
      { type: "p", text: "A 2016 survey revealed that 6% of Australians believe the current gun laws are too strict, 44% think they are just right, and 45% feel they are not strict enough." },
      { type: "h3", text: "Conclusion" },
      { type: "p", text: "Australia’s approach to gun control has evolved significantly since the Port Arthur massacre, with strict regulations and periodic amnesties helping to reduce the number of firearms in circulation. While opinions on the current laws vary, there is no doubt that Australia’s gun control measures have played a crucial role in maintaining public safety." },
    ],
  },
  {
    slug: "why-a-will-is-more-important-than-you-think",
    title: "Why a Will is Essential: Protect Your Family and Assets",
    heading: "Why a Will is More Important Than You Think",
    metaDesc: "Understand why having a will is crucial for protecting your assets and ensuring your wishes are followed. Learn about the benefits of creating a legal will for peace of mind.",
    date: "2025-03-21",
    image: "/images/posts/will.jpg",
    categories: ["Legal Insights", "News", "Will & Probate"],
    tags: ["will"],
    body: [
      { type: "p", text: "Creating a will is often considered a taboo topic, especially among those with more conservative views. However, updating or creating a will whenever there are changes in personal assets is a wise decision. This is particularly important when it comes to the distribution of property. As discussed in previous articles, property can be held as “joint tenancy” or “tenancy in common,” but a will ensures that your assets are distributed according to your true wishes. Therefore, it is highly recommended that individuals who own property in Australia consult a lawyer and draft a will." },
      { type: "h3", text: "Why is a Will So Important?" },
      { type: "p", text: "Let’s take Victoria as an example to understand how personal assets are distributed if someone passes away without a will." },
      { type: "h3", text: "Statutory Inheritance Order in Victoria" },
      { type: "ul", items: [
        "One spouse, no children: The spouse inherits all assets.",
        "One spouse, with children from that spouse: The spouse inherits all assets.",
        "One spouse, with children from another relationship: The spouse inherits personal chattels, the first $451,909 of the estate, and 50% of the remaining assets. The children from another relationship inherit the remaining portion.",
        "No spouse, with children: Assets are divided equally among the children.",
        "No spouse, no children: Assets are divided equally among the parents. If the parents are deceased, the siblings inherit the estate.",
        "More complex situations: There are specific distribution rules for other scenarios.",
      ] },
      { type: "p", text: "In Victoria, the statutory inheritance order primarily benefits the surviving spouse, who in most cases inherits the entire estate. This spouse-centric approach to inheritance may be unfamiliar to many in the Chinese community." },
      { type: "h3", text: "Statutory Inheritance Order in China" },
      { type: "p", text: "In China, the statutory inheritance order is as follows:" },
      { type: "ul", items: [
        "First in line: Spouse, children, and parents.",
        "Second in line: Siblings, grandparents.",
      ] },
      { type: "p", text: "When there are first-line heirs, the estate is divided equally among them. Only if there are no first-line heirs do the second-line heirs inherit the estate." },
      { type: "p", text: "Many newcomers to Australia might mistakenly assume that Australian and Chinese laws regarding marital property are similar, leading them to neglect taking steps to ensure their assets are distributed according to their wishes. However, as the above comparison shows, the distribution of assets without a will can differ significantly between the two countries." },
      { type: "p", text: "Therefore, if you wish to leave your estate to your children or parents, it is essential to draft a valid will in Australia. Moreover, inheriting assets through the statutory order without a will can be a complicated and costly process, often involving expensive legal fees." },
      { type: "p", text: "If you are not in Australia but wish to create a will to distribute your Australian assets, our firm offers professional will-drafting services to help you create a legally valid will that complies with Australian law, even from overseas." },
    ],
  },
  {
    slug: "key-points-to-know-about-divorce-in-australia",
    title: "Key Points to Know About Divorce in Australia – Legal Process and Considerations",
    heading: "Key Points to Know About Divorce in Australia",
    metaDesc: "Learn about the key points of divorce in Australia, including the legal process, property division, and child custody. Get the essential information for navigating your divorce with confidence.",
    date: "2025-03-21",
    image: "/images/posts/divorce.jpg",
    categories: ["Family Law", "Legal Insights"],
    tags: ["divorce"],
    body: [
      { type: "p", text: "Divorce is undoubtedly a challenging and emotional experience for most people. In Australia, many individuals find this process even more prolonged and painful due to a lack of understanding of the local divorce system. This blog post aims to address some common questions Chinese couples may have when getting divorced in Australia, helping you better navigate the complexities of Australian family law." },
      { type: "h3", text: "Divorce = Property Settlement + Child Custody?" },
      { type: "p", text: "Divorce is a separate legal process that simply signifies the end of a marital relationship. It does not automatically include property settlement or child custody arrangements. These matters can be addressed directly after separation, without waiting for the divorce to be finalised." },
      { type: "p", text: "However, it is crucial to consult a lawyer promptly after divorce to discuss property settlement and child custody. This is because the time limit for property-related claims is only 12 months from the date the divorce order takes effect. If this period lapses, the Family Court will generally not hear the case, and the property will remain with the current owner." },
      { type: "h3", text: "How Long Does the Divorce Process Take?" },
      { type: "p", text: "In Australia, either or both parties must apply for a divorce order from the Family Court. Typically, the final divorce order will be granted at least four months after the application is filed. If one party is overseas or opposes the divorce, the process may take longer." },
      { type: "h3", text: "Valid Reasons for Divorce" },
      { type: "p", text: "Australia operates under a “no-fault divorce” system, meaning reasons such as adultery or abandonment are not considered valid grounds for divorce under the Family Law Act 1975." },
      { type: "p", text: "To apply for divorce in Australia, you only need to prove:" },
      { type: "ul", items: [
        "The marriage has broken down irretrievably, and you have been separated for at least 12 months.",
        "The marriage has lasted for at least two years.",
      ] },
      { type: "p", text: "If you reconcile for three months or more during the separation period, the 12-month separation requirement will reset." },
      { type: "h3", text: "What If the Marriage Has Lasted Less Than Two Years?" },
      { type: "p", text: "If your marriage has lasted less than two years, you must attend mediation with a court-certified family mediator before applying for divorce. If you or your spouse cannot attend mediation, you must provide a detailed explanation in your divorce application." },
      { type: "p", text: "Therefore, if your marriage is nearing the two-year mark and there is no urgent need for divorce, we recommend waiting until the two-year period is complete." },
      { type: "h3", text: "How Soon Can You Remarry After Divorce?" },
      { type: "p", text: "Remarrying before the divorce process is finalised is illegal and constitutes bigamy. Generally, you can remarry one month and one day after receiving your divorce certificate." },
      { type: "h3", text: "Can You Divorce in Australia if You Married Overseas?" },
      { type: "p", text: "The Australian Family Court will have jurisdiction over overseas marriages if:" },
      { type: "ul", items: [
        "The applicant is an Australian citizen or permanent resident.",
        "The applicant considers Australia their permanent home.",
      ] },
      { type: "p", text: "If these conditions are met, you can divorce in Australia. You will need to provide your overseas marriage certificate, and if it is not in English, a translated copy must be submitted with your divorce application." },
      { type: "p", text: "If you have further questions or require legal assistance, please feel free to contact United Associates Lawyers for a detailed consultation." },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

/** Posts other than `slug`, for the "Related posts" strip. */
export const relatedPosts = (slug: string) => posts.filter((p) => p.slug !== slug);
