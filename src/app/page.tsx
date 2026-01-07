/* LAYOUT */

/* CTA */
import Hero from "../Components/Hero";

/* CONTENT */

import Faq from "../Components/Faq";

/* COMPONENTS */

/* OTHER PAGES */
import AboutPage from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center">
      <section className="justify-center">
        {/* HERO */}
        <Hero
          title="CE_206"
          tagline="One number, many forms."
          ctas={[{ label: "Contact Us", href: "/contact" }]}
          itemformat=" btn text-xl font-bold border"
          imageSrc=""
          imageSize={500}
          imageAlt="Picture of Logo, a hexa-devided star."
        />
      </section>

      {/* FEATURES : Our Content
      <section>
        <FeatureList
          heading="Our Content"
          subheading="We strive for completeness..."
          features={[
            {
              title: "Projects",
              description: "The stuff we have",
              icon: "",
              imageUrl: "/The_Human_Way/Protector_Dark.png",
              imageSize: 100,
              link: { label: "More ...", href: "/aspects/secure" },
            },
            {
              title: "Expand",
              description: "The stuff we seek",
              icon: "",
              imageUrl: "/The_Human_Way/Hunter_Dark.png",
              imageSize: 100,
              link: { label: "More ...", href: "/aspects/expand" },
            },
            {
              title: "Gather",
              description: "The stuff we get",
              icon: "",
              imageUrl: "/The_Human_Way/Gatherer_Dark.png",
              imageSize: 100,
              link: { label: "More ...", href: "/aspects/gather" },
            },
            {
              title: "Adapt",
              description: "The stuff we get better at",
              icon: "",
              imageUrl: "/The_Human_Way/Adapter_Dark.png",
              imageSize: 100,
              link: { label: "More ...", href: "/aspects/adapt" },
            },
          ]}
          layout="grid"
          columns={4}
        />
      </section>*/}
      {/* SERVICES /services/page.tsx*/}
      <section>
        <Services />
      </section>
      {/* ABOUT  /about/page.tsx */}
      <div className="lg:block hidden">
        <AboutPage />
      </div>
      {/* PORTFOLIO */}
      {/* TESTIMONIALS /customers/page.tsx*/}

      {/* BLOG (preview) */}
      {/* STATS/MILESTONES */}
      {/* VIDEO/MEDIA */}
      {/* FAQ */}
      {/*<Faq
        faqs={[
          { question: "Question1", answer: "Answer1" },
          { question: "Question2", answer: "Answer2" },
        ]}
      />*/}
      <Contact />
    </main>
  );
}
