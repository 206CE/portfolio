import FeatureList from "../../../Components/FeatureList";
import Container from "../../../Components/Container";
import BackButton from "../../../Components/BackNav";


export default function Adapt() {
  return (
    <Container as={"section"} className="">
      <FeatureList
        heading="Teaching & Training"
        subheading="From complex logical systems to practical tools"
        layout="grid"
        columns={2}
        features={[
          {
            title: "Corporate Technical Training",
            description:
              "Data Literacy for profesionals. Software adoption training. Cybersecurity awareness",
          },
          {
            title: "Specialized Bootcamp Instruction",
            description:
              "Data Science/Analtics Instructor. Foundational Coding for Adults. ITIL 4 Foundation Trainer",
          },
          {
            title: "Curriculum & Instructional Design",
            description: "Subject Matter Expert. E-Learning Development",
          },
          {
            title: "Academic Coaching & Specialized Tutoring",
            description:
              "Advanced Placement (AP) / IB Tutoring. Entrance Exam Prep. Bridge Programs.",
          },
        ]}
      />
      <BackButton />
      {/*
      <section>
        <h1>Adapt</h1>
        <h2>Level of importance of adapting</h2>
        <ol>
          <li>Tools</li>
          <li>Social Cooperation</li>
          <li>Agriculture</li>
          <li>Organized labour Walls</li>
          <li>Law & Currency</li>
          <li>Industrialization</li>
          <li>Computer & Digital Networks</li>
          <li>Cybersecurity & Data Privacy</li>
        </ol>
      </section>*/}
    </Container>
  );
}
