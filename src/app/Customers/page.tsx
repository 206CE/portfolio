import Cards from "@/Components/Util/_Cards";
import Testify from "@/Components/Content/Testify";

const customers = [
  {
    id: 1,
    name: "Aurora Group South Africa",
    subName: "AuroraTax",
    imageUrl: "/logo1.png",
    imageSize: 200,
    description: ["Tax & Finance Consultants"],
    website: "https://www.auroratax.co.za",
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

export default function Customers() {
  return (
    <div>
      {/* Testimonials Section */}
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
            linkText: 'Go to Page',
          },
        ]}
        layout="carousel"
        background="bg-(--bg-primary)"
      />
      <section>
        <div className="flex flex-col gap-4 p-4  text-center text-(--text-primary)">
          <h2 className="text-4xl">What Our Customers Say</h2>
          <p className="text-(--text-secondary)">
            We value our customers&apos; feedback and strive to improve
            continuously.
          </p>
        </div>
        <div className="">
          <Cards cards={customers} />
        </div>
      </section>
    </div>
  );
}
