"use client";

/* 1.0.1

  CSS:
  --surface
  --border
  --primary
  --text-primary
  --text-secondary
  --text-tertiary
  


*/

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CardContent {
  id: string | number;
  name: string;
  subName?: string;
  description: string[];
  imageUrl?: string;
  imageAlt?: string;
  imageSize?: number;
  website?: string;
}

interface CardsProps {
  cards: CardContent[];
}

const Cards: React.FC<CardsProps> = ({ cards }) => {
  return (
    <div className="flex gap-5 flex-wrap">
      {cards.map((cards, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 bg-(--surface) border-5 border-(--border) p-2 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer hover:text-(--primary)"
        >
          {cards.imageUrl && (
            <div className="m-4">
              <Image
                className="flex flex-auto w-64 h-64 object-cover justify-self-center"
                src={cards.imageUrl}
                alt={cards.imageAlt || "Default"}
                height={cards.imageSize || 64}
                width={cards.imageSize || 64}
              />
            </div>
          )}
          <h4 className="text-2xl font-bold text-(--text-primary) text-center mb-2">
            {cards.name}
          </h4>
          {cards.subName && (
            <h5 className="text-lg font-semibold text-(--text-secondary) text-center mb-2">
              {cards.subName}
            </h5>
          )}

          {cards.description.map((description, descindex) => (
            <ul className="list-disc list-inside" key={descindex}>
              <li className="text-md text-(--text-tertiary)">
                {cards.description[descindex]}
              </li>
            </ul>
          ))}

          {cards.website && (
            <Link
              className="inline-block text-sm text-(--primary) hover:text-(--primary)"
              href={cards.website}
              target="_blank"
            >
              Visit Website
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
export default Cards;
