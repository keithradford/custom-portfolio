import { getAllPosts, getPostBySlug } from "../../api";
import BlogLayout from "../../layouts/BlogLayout";

export default function Post({
  title,
  posts,
  content,
}: {
  title: string;
  posts: { slug: string; title: string }[];
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
