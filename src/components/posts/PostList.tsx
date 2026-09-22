import type { Post } from "@/src/types/post";

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>

          <p>{post.body}</p>
        </article>
      ))}
    </section>
  );
}
