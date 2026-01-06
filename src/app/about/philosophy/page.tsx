import FeatureList from "../../../Components/FeatureList";


export default function Philosophy() {
    return (
      <div>

        <FeatureList
          heading="Our Philosophy"
          subheading="If we cant create it, we dont understand it - Richard Fynneman"
          layout="grid"
          features={[
            {
              title: "Ontology",
              description: "What is real? (Does it matter?)",
              icon: "",
              imageUrl: "/Philosopy/Ontology.png",
              imageSize: 100,
            },
            {
              title: "Cosmology",
              description: "Where does it all come from? (Does it matter?)",
              icon: "",
              imageUrl: "/Philosopy/Cosmology.png",
              imageSize: 100,
            },
            {
              title: "Anthropology",
              description: "What are human beings?",
              icon: "",
              imageUrl: "/Philosopy/Anthropology.png",
              imageSize: 100,
            },
            {
              title: "Epistemology",
              description: "How do you know the truth?",
              icon: "",
              imageUrl: "/Philosopy/Epistemology.png",
              imageSize: 100,
            },
            {
              title: "Ethics",
              description: "What is right and wrong?",
              icon: "",
              imageUrl: "/Philosopy/Ethics.png",
              imageSize: 100,
            },
            {
              title: "Purpose",
              description: "What is the meaning of life?",
              icon: "",
              imageUrl: "/Philosopy/Purpose.png",
              imageSize: 100,
            },
            {
              title: "Soteriology",
              description: "What is wrong with the world?",
              icon: "",
              imageUrl: "/Philosopy/Soteriology.png",
              imageSize: 100,
            },
            {
              title: "Eschatology",
              description: "What does the future hold?",
              icon: "",
              imageUrl: "/Philosopy/Eschatology.png",
              imageSize: 100,
            },
            {
              title: "Axiology",
              description: "What is worth pursuing?",
              icon: "",
              imageUrl: "/Philosopy/Axiology.png",
              imageSize: 100,
            },
            {
              title: "Practice",
              description: "How is our view lived?",
              icon: "",
              imageUrl: "/Philosopy/Practice.png",
              imageSize: 100,
            },
          ]}
        />
      </div>
    );
}