import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function PostPage({ params }: Props) {
  const { slug } = params;

  // 1. Point to the SAME folder you used in the BlogFeed
  const folder = "/content";
  const filePath = path.join(process.cwd(), folder, `${slug}.md`);

  // 2. Handle missing files
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // 3. Read and Parse
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      {/* Header Section */}
      <header className="mb-10 border-b pb-10">
        <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">
          {data.category}
        </p>
        <h1 className="text-4xl font-extrabold mb-4">{data.title}</h1>
        <time className="text-gray-400">{data.date}</time>
      </header>

      {/* Content Section */}
      <div className="prose prose-slate lg:prose-xl mx-auto">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

// Optional: Generates these pages at build time for speed
export async function generateStaticParams() {
  const folder = "content/posts";
  const files = fs.readdirSync(path.join(process.cwd(), folder));

  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}
