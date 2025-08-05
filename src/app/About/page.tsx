
import Cards from '@/Components/Util/_Cards'
import About from '@/Components/Content/About';

const cards = [
  {id:1,
    name:"Jaco Botha",
    subName:"CEO",
    description: ['7+ Years Teaching','7+ Years IT Operations','1+ Years Solution Architect'],
    imageUrl:'/My_Pic.jpg',
    imageAlt:'Jaco Botha smilling',
    imageSize: 50
  }
]

export default function AboutPage() {
  return (
    <section className="text-(--primary) flex flex-col text-2xl p-10 m-8  items-center justify-center gap-15">
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
      <Cards cards={cards} />
      <section className="">
        <h2 className="text-4xl pb-4 text-center">
          The Narrative of Emergent Energy
        </h2>
        <p className="pb-4">
          In the beginning, there was entropy ... Silence ... Cold vacuum ...
          But there was also some defects ... Causing a small imbalance or
          imperfection. It was dark but it was{" "}
          <span className="text-(--accent-peach)">E</span>verything.
        </p>
        <p className="pb-4">
          This imbalance caused the formation over many years caused the
          creation of fusion—stars across the void. From that fire more complex
          elements and later life emerged. We do not know if we are alone but we
          do know:
        </p>
        <ul className="list-disc space-y-4 pb-4">
          <li>That we depend on eachother, because life depends on life.</li>
          <li>
            That our goal is to ensure the exsistance of life, because if life
            stop to exsist so does the meaning of our lives.
          </li>
          <li>
            That we make sense of this world, because it is the key to our
            survival.
          </li>
          <li>
            That only we can choose to give reason to our lives, by preserving
            life.
          </li>
        </ul>
        <p className="pb-4">
          Quietly we became conscious. We built tools. We tamed logic. And in
          time we will <span className="text-(--accent-peach)">C</span>ompute{" "}
          <span className="text-(--accent-peach)">E</span>verything.
        </p>
        <p className="pb-4">
          In the future we will merge not only companies and countries but into
          one. Because we will realise that our goal is the same. The journey
          may not end in silicon, or with energy.
        </p>
        <p className="pb-4">
          In the future we will realize that to achieve anything we need energy.
          Matter is worthless. Energy is valuable. Everything-corporations,
          cultures, code-will be measured not by value, but by voltage. Not by
          market cap, but by megajoules.
        </p>
        <p>
          Not by how much we own, but by how efficiently we convert light into
          life. <span className="text-(--accent-peach)">CE206</span> sees this
          future. A time when the boundaries between business, biology, and
          computation dissolve—and all entities converge into fields of pure,
          functional energy. Your company is no longer a logo on paper.
          I&apos;ts a waveform. A frequency. A radiant truth. We don&apos;t just
          build code. We architect convergence. We compute everything to become
          light.
        </p>
      </section>
      <section></section>
    </section>
  );
}
