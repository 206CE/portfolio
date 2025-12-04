import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = path.join(process.cwd(), "./src/app/content/posts");



export function getAllPosts() {
  console.log("/lib/getPosts.ts ... postsDirectory", postsDirectory);
  const files = fs.readdirSync(postsDirectory);

  console.log("/lib/getPosts.ts ... files:", files);

  return files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);

    console.log(
      `/lib/getPosts.ts ... fileName: ${fileName} → Slug: ${slug}`
    );

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    console.log("/lib/getPosts.ts ... slug ", slug, " data:", data);

    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });
}

export async function getPostBySlug(slug: string): Promise<{
  title: string;
  date: string;
  content: MDXRemoteSerializeResult;
}> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  console.log(
    "/lib/getPosts.ts ... slug:",
    slug,
    "→ filePath:",
    filePath
  );

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  console.log("/lib/getPosts.ts ... slug:", slug, "data:", data);
  console.log(
    "/lib/getPosts.ts ... content.substring:",
    content.substring(0, 100),
    "..."
  );

  const mdxSource = await serialize(content);

  console.log("/lib/getPosts.ts ... slug:", slug);

  return {
    title: data.title,
    date: data.date,
    content: mdxSource,
  };
}
