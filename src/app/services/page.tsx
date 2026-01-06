import FeatureList from "../../Components/FeatureList"

export default function Services() {
    return (
      <section>
        <FeatureList
          heading="Services"
          subheading="After more than 50000 years of exsistance we are finaly moving towards an economy not based on resources but on services. "
          features={[
            {
              title: "Web Development",
              description: "Our digital presence are now more important than ever when everything is interconnected we must also be.",
              icon: "",
              imageUrl: "",
              imageSize: 100,
              link: { label: "More ...", href: "/services/webdev" },
            },
            {
              title: "Service Management",
              description: "Now more than ever it is important to have systems that produce services stable and secure for service delivery.",
              icon: "",
              imageUrl: "",
              imageSize: 100,
              link: { label: "More ...", href: "/services/management" },
            },

            {
              title: "Adapting and Learning",
              description: "The speed of knowledge expansion is essential if we are to survive.",
              icon: "",
              imageUrl: "",
              imageSize: 100,
              link: { label: "More ...", href: "/services/training" },
            },
          ]}
          layout="grid"
          columns={3}
        />
      </section>
    );}