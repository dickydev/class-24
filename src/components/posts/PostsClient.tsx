"use client";

import { useQuery } from "@tanstack/react-query";

import { postsQueryOptions } from "@/src/lib/query/query-options";

export default function PostsClient() {
  const { data, isFetching } = useQuery(postsQueryOptions);

  return (
    <section>
      {isFetching && <small>Syncing...</small>}

      {data?.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </section>
  );
}
