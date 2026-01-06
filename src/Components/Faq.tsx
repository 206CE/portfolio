"use client";

/*  1.0.3

  > Custom styling?

  CSS:
  --primary
  --surface
  --text-secondary
*/

import React, { useState } from "react";

export interface Faq {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs:Faq[];
}

const Faq: React.FC<FaqProps> = ({faqs}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="  mb-5">
      <div className="max-w-4xl mx-auto px-6">

        <div className="">
          {faqs.map((faq, index) => (
            <div key={index} className="mt-4 border border-(--border)  overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center  hover:text-(--primary) bg-(--bg-secondary) cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-md">{faq.question}</span>
                <span className="text-(--text-secondary)">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 p-6"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-(--text-secondary)">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
