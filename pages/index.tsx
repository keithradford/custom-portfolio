import { getAllPosts, getLatestPost } from "../api";
import { Post } from "../constants/types";
import BlogLayout from "../layouts/BlogLayout";

type Props = {
  title: string;
  content: string;
  date: string;
  posts: Post[];
};

export default function Home({ posts, title, content, date }: Props) {
  return (
    <BlogLayout title={title} content={content} posts={posts} date={date} />
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const posts = await getAllPosts();
  const { title, content, date } = await getLatestPost();

  return {
    props: {
      posts,
      title,
      content,
      date,
    },
  };
}
