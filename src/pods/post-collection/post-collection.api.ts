import client from "#lib/client.ts";
import type { Post } from "./post.collection.model.ts";

// Trae los últimos posts para el listado (índice /posts)
export const getAllPost = async () =>
  await client.getContentList<Post>({
    contentType: "Post",
    sort: { "fields.date": "desc" },
    pagination: { take: 100 },
  });

// Trae un único post por slug — usado en la ruta SSR /posts/[slug]
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const results = await client.getContentList<Post>({
    contentType: "Post",
    "fields.slug": slug,
    pagination: { take: 1 },
  });
  return results[0] ?? null;
}; 