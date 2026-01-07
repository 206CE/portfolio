import About from "../../Components/About";



export default function AboutPage() {
  return (
    <section className="text-(--primary) flex flex-col text-2xl  p-5   items-center justify-center ">
      <About
        companyName="CE_206"
        tagline="One number, many forms."
        description="At CE_206, we believe that the funture economy is service centered. Products have taken the back seat in the economy. The line between consumer and producer is increasingly hard to destinguish. Using technology we can create a network of services that can serve everyone and create a space in the economy for everyone to deliver services. You dont need to be a big coorporation to organize."
        mission="Deliver services so that others can deliver their services and expand the economy to a sustainable, interdependent network of service providers and consumers that all play a part in contributing to the betterment of mankind as a whole."
        vision="To architect this framework we must aproach the economy from a service management perspective. This will increase the amount of services available and provide services to those that need it."
        values={[
          "Everyone has something to offer.",
          "Everyone needs something sometimes.",
          "Improvement of services improve quality of life.",
        ]}
      />
      {/*
      <FeatureList
        features={[
          {
            title: "Philosophy",
            description: "Detailed Philosophy:",
            icon: "",
            imageUrl: "",
            imageSize: 100,
            link: { label: "More...", href: "/about/philosophy" },
          },
          {
            title: "Auto-Biography",
            description: "Personal Details:",
            icon: "",
            imageUrl: "/My_Pic.jpg",
            imageSize: 100,
            link: { label: "More...", href: "/about/biography" },
          },
        ]}
      />*/}
      
      <section></section>
    </section>
  );
}
