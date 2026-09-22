import { queryOptions } from "@tanstack/react-query";

import { getPosts } from "@/src/lib/api/posts";

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],

  queryFn: getPosts,

  staleTime: 60_000,
});
