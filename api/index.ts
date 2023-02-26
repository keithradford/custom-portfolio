import matter from "gray-matter";
import { marked } from "marked";
import { highlight, languages } from "prismjs";
import { Post, PostContent } from "../constants/types";

const loadLanguages = require("prismjs/components/");
loadLanguages(["jsx", "typescript", "bash", "json", "css", "scss", "yaml"]);

marked.setOptions({
  highlight: function (code, lang) {
    if (languages[lang]) {
      return highlight(code, languages[lang], lang);
    } else {
      return code;
    }
  },
});

export async function getAllPosts(): Promise<Post[]> {
  const context = require.context("../_posts", false, /\.md$/);
  const posts: Post[] = [];

  for (const key of context
    .keys()
    .filter((key: string) => !key.startsWith("_posts"))) {
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default);

    posts.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
      date: meta.data.date,
    });
  }

  return posts;
}

export async function getPostBySlug(slug: string): Promise<PostContent> {
  const fileContent = await import(`../_posts/${slug}.md`);
  const meta = matter(fileContent.default);

  return {
    title: meta.data.title,
    content: marked.parse(meta.content),
    date: meta.data.date,
  };
}
