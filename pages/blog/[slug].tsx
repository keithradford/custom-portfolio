import { getAllPosts, getPostBySlug } from "../../api";
import { Post } from "../../constants/types";
import BlogLayout from "../../layouts/BlogLayout";

type Props = {
  title: string;
  posts: Post[];
  content: string;
  date: string;
  slug: string;
};

export default function BlogPost({ title, posts, content, date, slug }: Props) {
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

export async function getStaticProps(context: any) {
  return {
    props: {
      ...(await getPostBySlug(context.params.slug)),
      posts: await getAllPosts(),
      slug: context.params.slug,
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
