

import { getAllPosts, getPostBySlug } from "@/app/lib/getPosts";
import MdxContent from "@/app/components/MdxContent";

import Alert from "@/app/components/Alert";

const components = {
  Alert,
};

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params:{slug} }: Props) {

  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>
  }
  return (
    <article className="prose prose-lg mx-auto p-8">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <MdxContent source={post.content}  />
    </article>
  );
}
