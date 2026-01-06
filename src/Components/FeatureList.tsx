/* 1.0.0


*/

import { ReactNode } from "react";
import Image from "next/image";


export type FeatureItem = {
  title: string;
  description: string;
  icon?: ReactNode;
  imageUrl?: string;
  imageSize?:number;
  link?: {
    label: string;
    href: string;
  };
};

type FeatureListProps = {
  heading?: string;
  subheading?: string;
  features: FeatureItem[];
  layout?: "grid" | "list";
  columns?: number;
};

export default function FeatureList({
  heading,
  subheading,
  features,
  layout = "grid",
  columns = 3,
}: FeatureListProps) {
  const gridCols =
    {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    }[columns] || "grid-cols-1";

  return (
    <section className="py-16 px-4 bg-(--bg-primary) text-(--text-primary)">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {heading && <h2 className="text-3xl font-bold">{heading}</h2>}
        {subheading && (
          <p className="mt-2 text-lg text-(--text-secondary)">
            {subheading}
          </p>
        )}
      </div>

      <div
        className={`${
          layout === "grid" ? `grid ${gridCols}` : "space-y-8"
        } gap-8 max-w-7xl mx-auto`}
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start p-6 border border-(--border)  shadow-sm hover:shadow-lg transition-shadow duration-300 bg-(--bg-secondary)"
          >
            {feature.icon && (
              <div className="mb-4 text-(--text-primary) text-3xl">
                {feature.icon}
              </div>
            )}
            {feature.imageUrl && (
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                className="object-cover  mb-4"
                height={feature.imageSize || 50}
                width={feature.imageSize || 50}
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-(--text-secondary) mb-4">
              {feature.description}
            </p>
            {feature.link && (
              <a
                href={feature.link.href}
                className="btn mt-auto font-medium b"
              >
                {feature.link.label} 
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
