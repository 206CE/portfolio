/* 1.0.0

    Testing phase

*/

import Image from "next/image";

export type Testimonial = {
  name: string;
  role: string;
  message: string;
  avatarUrl?: string;
  company?: string;
  companyLogoUrl?: string;
  link?: string;
  linkText?:string;
};

type TestifyProps = {
  heading?: string;
  subheading?: string;
  testimonials: Testimonial[];
  columns?: number;
  layout?: "grid" | "carousel";
  background?: string; // Tailwind background color class
};

export default function Testify({
  heading,
  subheading,
  testimonials,
  columns = 3,
  layout = "grid",
  background = "bg-(--bg-primary)",
}: TestifyProps) {
  const gridCols =
    {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    }[columns] || "grid-cols-1";

  return (
    <section
      className={`${background} py-16 px-4 text-(--text-primary)`}
    >
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
          layout === "grid"
            ? `grid ${gridCols}`
            : "flex overflow-x-auto space-x-6"
        } gap-8 max-w-7xl mx-auto`}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex flex-col p-6 bg-(--bg-secondary)  border border-(--border) shadow-sm"
            style={{ minWidth: layout === "carousel" ? "300px" : "auto" }}
          >
            <p className="text-lg italic text-(--text-primary) mb-4">
              “{t.message}”
            </p>
            <div className="flex items-center mt-auto">
              {t.avatarUrl && (
                <Image
                  src={t.avatarUrl}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover mr-4"
                />
              )}
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-(--text-secondary)">
                  {t.role}
                </p>
                {t.company && (
                  <p className="text-sm text-(--text-secondary)">
                    {t.companyLogoUrl ? (
                      <Image
                        src={t.companyLogoUrl}
                        alt={t.company}
                        width={80}
                        height={20}
                        className="mt-1"
                      />
                    ) : (
                      t.company
                    )}
                  </p>
                )}
              </div>
            </div>
            {t.link && (
              <a
                href={t.link}
                className="mt-4 text-sm text-(--primary) translate duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.linkText || 'More'}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
