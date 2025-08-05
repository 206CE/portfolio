"use client";

/* 1.0.0

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

const Card: React.FC<CardsProps> = ({ cards }) => {
  return (
    <div className="grid p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((cards, index) => (
        <div
          key={index}
          className=" bg-(--accent-two) border border-(--border) rounded-lg p-2 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-(--hover)"
        >
          {cards.imageUrl && (
            <Image
              className="flex w-64 h-64 object-cover justify-self-center"
              src={cards.imageUrl}
              alt={cards.imageAlt || "Default"}
              height={cards.imageSize}
              width={cards.imageSize}
            />
          )}
          <h4 className="text-2xl font-bold text-(--primary) text-center mb-2">{cards.name}</h4>
          {cards.subName && (
            <h5 className="text-lg font-semibold text-(--secondary) text-center mb-2">
              {cards.subName}
            </h5>
          )}

          {cards.description.map((description, descindex) => (
            <ul className="list-disc list-inside" key={descindex}>
              <li className="text-md text-(--tertiary)">
                {cards.description[descindex]}
              </li>
            </ul>
          ))}

          {cards.website && (
            <Link
              className="inline-block text-sm hover:text-(--accent-one)"
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
export default Card;
