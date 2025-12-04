
/* LAYOUT */


/* CTA */
import Hero from "../Components/Ctas/Hero";


/* CONTENT */
import FeatureList from "@/Components/Content/FeatureList";
import About from "@/Components/Content/About";
import Testify from "@/Components/Content/Testify";
import Faq from "@/Components/Content/Faq";

/* COMPONENTS */



export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center">
      <section className="justify-center">
        {/* HERO */}
        <Hero
          title="CE  206"
          tagline="One number, many forms."
          ctas={[{ label: "Contact Us", href: "/contact" }]}
          itemformat=" btn text-2xl p-2  mr-10 font-bold border"
          imageSrc="/Logo.png"
          imageSize={500}
          imageAlt="Picture of Logo, a hexa-devided star."
        />
      </section>
      {/* FEATURES : Our Content*/}
      <section>
        <FeatureList
          heading="Our Content"
          subheading="We strive for completeness..."
          features={[
            {
              title: "Secure",
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
      </section>
      {/* ABOUT  /about/page.tsx */}

      {/* PORTFOLIO */}
      {/* TESTIMONIALS /customers/page.tsx*/}

      {/* BLOG (preview) */}
      {/* STATS/MILESTONES */}
      {/* VIDEO/MEDIA */}
      {/* FAQ */}
      <Faq
        faqs={[
          { question: "Question1", answer: "Answer1" },
          { question: "Question2", answer: "Answer2" },
        ]}
      />
    </main>
  );
}
