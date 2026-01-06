import Cards from "../../../Components/Cards";

const cards = [
  {
    id: 1,
    name: "Jaco Botha",
    subName: "CEO",
    description: [
      "7+ Years Teaching",
      "7+ Years IT Operations",
      "1+ Years Solution Architect",
    ],
    imageUrl: "/My_Pic.jpg",
    imageAlt: "Jaco Botha smilling",
    imageSize: 500,
  },
];

export default function Biography() {
    return (
              <section className="">
        <Cards cards={cards} />

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
            creation of fusion—stars across the void. From that fire more
            complex elements and later life emerged. We do not know if we are
            alone but we do know:
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
            In the future we will merge not only companies and countries but
            into one. Because we will realise that our goal is the same. The
            journey may not end in silicon, or with energy.
          </p>
          <p className="pb-4">
            In the future we will realize that to achieve anything we need
            energy. Matter is worthless. Energy is valuable.
            Everything-corporations, cultures, code-will be measured not by
            value, but by voltage. Not by market cap, but by megajoules.
          </p>
          <p>
            Not by how much we own, but by how efficiently we convert light into
            life. <span className="text-(--accent-peach)">CE206</span> sees this
            future. A time when the boundaries between business, biology, and
            computation dissolve—and all entities converge into fields of pure,
            functional energy. Your company is no longer a logo on paper.
            I&apos;ts a waveform. A frequency. A radiant truth. We don&apos;t
            just build code. We architect convergence. We compute everything to
            become light.
          </p>
        </section>
    );
}