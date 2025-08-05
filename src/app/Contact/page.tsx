import Contacts from "@/Components/Api/Contacts";
import Faq from "@/Components/Content/Faq";

export default function Contact() {
  return (
    <>
      <section>
        <h1 className="text-4xl font-bold text-center m-5">FAQ</h1>
        <Faq
          faqs={[
            { question: "Question1", answer: "Answer1" },
            { question: "Question2", answer: "Answer2" },
          ]}
        />
      </section>
      <section>
        <Contacts />
      </section>
    </>
  );
}
