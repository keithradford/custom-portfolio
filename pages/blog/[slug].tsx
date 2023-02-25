import { getAllPosts, getPostBySlug } from "../../api";
import { Post } from "../../constants/types";
import BlogLayout from "../../layouts/BlogLayout";

export default function BlogPost({
  title,
  posts,
  content,
}: {
  title: string;
  posts: Post[];
  content: string;
}) {
  return <BlogLayout title={title} content={content} posts={posts} />;
}

export async function getStaticProps(context: any) {
  return {
    props: {
      ...(await getPostBySlug(context.params.slug)),
      posts: await getAllPosts(),
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPosts();

  return {
    paths: paths.map(({ slug }) => ({
      params: { slug: slug },
    })),
    fallback: false,
  };
}
