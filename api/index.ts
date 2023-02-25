import matter from "gray-matter";
import { marked } from "marked";

export async function getAllPosts(): Promise<
  { slug: string; title: string }[]
> {
  const context = require.context("../_posts", false, /\.md$/);
  const posts: { slug: string; title: string }[] = [];

  for (const key of context
    .keys()
    .filter((key: string) => !key.startsWith("_posts"))) {
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
    });
  }

  return posts;
}

export async function getPostBySlug(
  slug: string
): Promise<{ title: string; content: string }> {
  const fileContent = await import(`../_posts/${slug}.md`);
  const meta = matter(fileContent.default);

  return {
    title: meta.data.title,
    content: marked(meta.content),
  };
}
