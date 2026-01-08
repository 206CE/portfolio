import Cards from "../../../Components/Cards";
import Quote from "../../../Components/Quote";
import FeatureList from "../../../Components/FeatureList";

import Container from "../../../Components/Container";


const customers = [
  {
    id: 1,
    name: "Aurora Group South Africa",
    subName: "AuroraTax",
    imageUrl: "/logo1.png",
    imageSize: 200,
    description: ["Tax & Finance Consultants"],
    website: "https://site03-22kz10wmc-jacos-projects-750bc226.vercel.app",
  },
  {
    id: 2,
    name: "Per-Gratiam",
    subName: "Recovery & Wellness",
    imageUrl: "/logo2.png",
    imageSize: 200,
    description: ["Counceling & Crisis Management"],
    website: "https://www.pergratiam.co.za",
  },
  {
    id: 3,
    name: "Play2Heal",
    subName: "Recovery & Wellness",
    imageUrl: "/logo3.jpg",
    imageSize: 200,
    description: ["Child Therapists"],
    website: "https://www.play2heal.co.za",
  },
];

export default function WebDevelopment() {
  return (
    <Container as={"section"} className="">
      {/* Testimonials Section */}
      <div className="flex justify-center">
        <Quote
          variant="minimal"
          text="What I cannot create, I do not understand."
          author="Richard Feynman"
          title="Theoretical Physicist"
        />
      </div>
      <section>
        <div className="flex flex-col gap-4 p-4  text-center text-(--text-primary)">
          <h2 className="text-4xl">What Our Customers Say</h2>
          <p className="text-(--text-secondary)">
            We value our customers&apos; feedback and strive to improve
            continuously.
          </p>
        </div>
        <div className="">
          <FeatureList
            heading="Portfolio Sites"
            subheading="subheading"
            layout="grid"
            columns={3}
            features={[
              {
                title: "Aurora Group",
                description: "Tax & Finance Consultants",
                imageUrl: "/logo1.png",
                imageSize: 100,
                link: {
                  label: "Visit Site...",
                  href: "https://site03-22kz10wmc-jacos-projects-750bc226.vercel.app",
                },
              },
              {
                title: "Per-Gratiam",
                description: "Counceling & Crisis Management",
                imageUrl: "/logo2.png",
                imageSize: 100,
                link: {
                  label: "Visit Site...",
                  href: "https://pergratiam-p07ytdiek-jacos-projects-750bc226.vercel.app",
                },
              },
              {
                title: "Play-2-Heal",
                description: "Child Therapists",
                imageUrl: "/logo3.jpg",
                imageSize: 100,
                link: {
                  label: "Visit Site...",
                  href: "https://play-kfaoq4nre-jacos-projects-750bc226.vercel.app",
                },
              },
            ]}
          />
        </div>
      </section>
    </Container>
  );
}
