import Container from "../../../Components/Container";
import FeatureList from "../../../Components/FeatureList";
import BackButton from "../../../Components/BackNav";
export default function ServiceManagement() {
  return (
    <Container as={"section"} className="">
      <FeatureList
        heading="Services available:"
        subheading="How I can improve your business..."
        features={[
          {
            title: "Operational & Support Services",
            description:
              "Working directly with users and customers to make approved changes, manage incidents and become a single point of contact for your people.",
          },
          {
            title: "Coordination & Governance Services",
            description:
              "Monitoring events, managing events and making it easier to adapt to change.",
          },
          {
            title: "Relationship & Value Services",
            description:
              "Make sure IT meets business requirements, Improve systems to save money and time. Ensure that IT systems align with what customers realy need.",
          },
        ]}
      />
      <BackButton />
      {/*<section className="text-(--text-primary)">
        <h1 className="text-(--text-primary)">Security</h1>
        <h2>Level of importance of security:</h2>
        <ol>
          <li>Physiological</li>
          <li>Food&Water</li>
          <li>Safety</li>
          <li>Love&Belonging</li>
          <li>Esteem</li>
          <li>Self Actualization</li>
        </ol>
      </section>*/}
    </Container>
  );
}
