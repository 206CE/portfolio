/* 1.0.1

*/


'use client';



import React from "react";
import Link from "next/link";

export interface Cta {
  label: string;
  href: string;

}

interface CtaProps {
  ctas: Cta[];
  itemClassFormat?: string;
}

const Cta: React.FC<CtaProps> = ({ ctas, itemClassFormat }) => {
  return (
    <div className="">
      <ul>
        {
          ctas.map((cta, index) => (
            <Link key={index} href={cta.href}>
              <li className={` ${itemClassFormat}`}>
                <span>{cta.label}</span>
              </li>
            </Link>
          )
        )}
      </ul>
    </div>
  );
};

export default Cta;
