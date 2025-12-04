import Benefits, { Benefit } from "@/Components/Content/_Benefits";

const benefitsD: Benefit[] = [
  {
    title: "Blazing Fast Performance",
    description:
      "Next.js and C++ deliver lightning-fast rendering and backend computation, ideal for high-traffic or real-time applications.",
    imageUrl: "/Fast.png",
  },
  {
    title: "Scalable Architecture",
    description:
      "Node.js and Express.js enable modular, event-driven APIs, while MySQL handles structured data at scale with reliability.",
    imageUrl: "/Architecture.png",
  },
  {
    title: "Modern UI/UX",
    description:
      "React.js and TailwindCSS combine to create responsive, accessible, and beautifully animated interfaces with minimal CSS overhead.",
    imageUrl: "/UI.png",
  },
  {
    title: "SEO & Accessibility",
    description:
      "Next.js provides server-side rendering and static generation, ensuring excellent SEO and fast first-paint performance.",
    imageUrl: "/SEO.png",
  },
  {
    title: "Full-Stack Flexibility",
    description:
      "From frontend to backend to low-level computation, this stack supports everything from dashboards to data pipelines.",
    imageUrl: "/Flexability.png",
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "C++ modules can be compiled across platforms, while the rest of the stack runs seamlessly on Linux, macOS, and Windows.",
    imageUrl: "/Cross.png",
  },
  {
    title: "Security & Stability",
    description:
      "MySQL’s mature security model and C++’s deterministic memory control help build robust, secure systems.",
    imageUrl: "/Security.png",
  },
  {
    title: "Developer Velocity",
    description:
      "Tailwind’s utility-first styling and React’s component model accelerate development without sacrificing maintainability.",
    imageUrl: "/Developer.png",
  },
  {
    title: "Real-Time Capabilities",
    description:
      "Node.js excels at handling WebSockets and real-time data streams, perfect for live dashboards or collaborative tools.",
    imageUrl: "/Realtime.png",
  },
  {
    title: "Custom Native Extensions",
    description:
      "C++ can be used to write high-performance modules (e.g., image processing, encryption) that plug into your Node.js backend.",
    imageUrl: "/Custom.png",
  },
];

export default function Expand() {
  return (
    <div className="text-(--primary) p-10">
      <section className="flex"></section>
      <section>
        <h1 className="text-4xl pb-4">Our Web Stack</h1>
        {/* Benefits */}
        <Benefits benefits={benefitsD} />
      </section>
    </div>
  );
}
