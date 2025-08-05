
/* COMPONENTS */
import Hero from "../Components/Ctas/Hero";
import FeatureList from "@/Components/Content/FeatureList";
import About from "@/Components/Content/About";
import Testify from "@/Components/Content/Testify";
import Faq from "@/Components/Content/Faq";


export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center">
      <section className="justify-center">
        {/* HERO */}
        <Hero
          title="CE  206"
          tagline="One number, many forms."
          ctas={[{ label: "Contact Us", href: "/Contact" }]}
          itemformat=" btn text-2xl p-2  mr-10 font-bold border"
          imageSrc="/Logo.png"
          imageSize={500}
          imageAlt="Picture of Logo, a hexa-devided star."
        />
      </section>
      {/* FEATURES */}
      <section>
        <FeatureList
          heading="Heading"
          subheading="Subheading"
          features={[
            {
              title: "title",
              description: "description",
              icon: "fdas",
              imageUrl: "/Logo.png",
              imageSize: 10,
              link: { label: "label", href: "/" },
            },
          ]}
          layout="grid"
          columns={1}
        />
      </section>
      {/* ABOUT */}
      <About
        companyName="206CE"
        tagline="Compute Everything"
        description="At 206_CE, we believe the future belongs to energy—not matter. Inspired by the Sun, the source of all terrestrial life, we build technologies that convert light into logic, and logic into life. We do not chase ownership—we pursue efficiency. We do not build empires—we architect convergence. Our systems are designed to preserve life, because life is the only source of meaning. In a world where everything becomes code, and every code becomes light, we compute the Sun."
        mission="206_CE exists to compute everything—designing systems that convert light into life, logic into meaning, and energy into sustainable futures. We build tools not for ownership, but for efficiency. Not for profit, but for preservation."
        vision="To architect the convergence of computation, biology, and energy—transforming code into consciousness and corporations into radiant waveforms."
        values={[
          "Preservation, of Life.",
          "Convergence, of goals.",
          "Computation, of Everything.",
        ]}
      />
      {/* PORTFOLIO */}
      {/* TESTIMONIALS */}
      <Testify
        heading="What our customers say..."
        subheading="subheading"
        testimonials={[
          {
            name: "name",
            role: "role",
            message: "message",
            avatarUrl: "/logo1.png",
            company: "company",
            companyLogoUrl: "/logo1.png",
            link: "/",
            linkText: "Go to Page",
          },
        ]}
        layout="carousel"
        background="bg-(--bg-primary)"
      />
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
