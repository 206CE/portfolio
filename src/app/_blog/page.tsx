import BlogFeed from "../../Components/_BlogFeed";

export default function Page() {
  return (
    <main>
      {/* Fetches from /content/posts and links to /blog/slug */}
      <BlogFeed
        folder="/src/app/blog/content"
        routePath="/src/app/blog/${slug}"
        title="206_CE Blog"
      />
    </main>
  );
}
