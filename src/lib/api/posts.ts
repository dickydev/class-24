import type { Post } from "@/src/types/post";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${BASE_URL}/posts?_limit=10`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Gagal mengambil posts");
  }

  return response.json();
}
