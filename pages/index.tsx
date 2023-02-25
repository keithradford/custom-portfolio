import { getAllPosts } from "../api";
import { Post } from "../constants/types";
import BlogLayout from "../layouts/BlogLayout";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <BlogLayout title={"Home"} content={"Welcome to my page."} posts={posts} />
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
