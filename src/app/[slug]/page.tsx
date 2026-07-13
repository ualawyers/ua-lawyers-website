import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import PostDetail from "@/components/PostDetail";
import { services, serviceBySlug } from "@/data/services";
import { posts, postBySlug } from "@/data/posts";

/**
 * The WordPress site serves both practice areas (/family-law) and blog posts
 * (/gun-control-in-australia) as flat top-level permalinks. A single dynamic segment
 * resolves either, which keeps the existing URLs — and their search ranking — intact.
 */
type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [
    ...services.map((s) => ({ slug: s.slug })),
    ...posts.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = serviceBySlug(slug) ?? postBySlug(slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.metaDesc };
}

export default async function SlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  const service = serviceBySlug(slug);
  if (service) return <ServiceDetail service={service} />;

  const post = postBySlug(slug);
  if (post) return <PostDetail post={post} />;

  notFound();
}
