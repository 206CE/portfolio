// components/BlogFeed.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface BlogFeedProps {
  folder: string; // e.g., "content/blog"
  routePath: string; // e.g., "/blog"
  title?: string;
}

interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  category?: string;
}

export default function BlogFeed({
  folder,
  routePath,
  title = "Latest Posts",
}: BlogFeedProps) {
  // 1. Resolve the directory path
  const contentDir = path.join(process.cwd(), folder);

  // 2. Read files and parse frontmatter
  let posts: PostData[] = [];
  
  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir);

    posts = files
      .filter((file) => file.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(contentDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || slug,
          date: data.date || "",
          excerpt: data.excerpt || "",
          category: data.category || "",
        };
      })
      // Sort by date descending
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-10 tracking-tight">{title}</h2>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found in {folder}.</p>
      ) : (
        <div className="grid gap-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col items-start"
            >
              <span className="text-sm text-blue-600 font-medium uppercase tracking-widest mb-2">
                {post.category}
              </span>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                <Link href={`${routePath}/${post.slug}`}>{post.title}</Link>
              </h3>
              <time className="text-sm text-gray-400 mb-3">{post.date}</time>
              <p className="text-gray-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`${routePath}/${post.slug}`}
                className="text-sm font-bold text-black border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all"
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
