import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { makeQueryClient } from "@/src/lib/query/get-query-client";
import { postsQueryOptions } from "@/src/lib/query/query-options";

// import PostList from "@/src/components/posts/PostList";
import PostsClient from "@/src/components/posts/PostsClient";
import AuthGuard from "@/src/components/auth/AuthGuard";

export default async function PostPage() {
  console.log("hello");
  const queryClient = makeQueryClient();

  await queryClient.query(postsQueryOptions).catch(() => {});

  return (
    <AuthGuard>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostsClient />
      </HydrationBoundary>
    </AuthGuard>
  );
}
