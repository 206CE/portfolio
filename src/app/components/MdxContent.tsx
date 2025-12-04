// app/components/MdxContent.tsx
"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Alert from "./Alert";

const components = {
  Alert,
};

type Props = {
  source: MDXRemoteSerializeResult;
};

export default function MdxContent({ source }: Props) {
  return <MDXRemote {...source} components={components} />;
}
