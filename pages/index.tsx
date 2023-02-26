import { getAllPosts, getLatestPost } from "../api";
import { Post } from "../constants/types";
import BlogLayout from "../layouts/BlogLayout";

type Props = {
  title: string;
  content: string;
  date: string;
  posts: Post[];
  slug: string;
};

export default function Home({ posts, title, content, date, slug }: Props) {
  return (
    <BlogLayout
      title={title}
      content={content}
      posts={posts}
      date={date}
      slug={slug}
    />
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const posts = await getAllPosts();
  const { title, content, date, slug } = await getLatestPost();

  return {
    props: {
      posts,
      title,
      content,
      date,
      slug,
    },
  };
}
