{
  /* 1.0.0


  CSS:
  --surface
  --border
  --primary
  --secondary
  

12:1  Error: Expected an assignment or function call and instead saw an expression.  @typescript-eslint/no-unused-expressions

  */
}



import React from 'react';
import Image from 'next/image';

export interface Benefit {
  title: string;
  description: string;
  imageUrl?: string;
}

interface BenefitsProps {
  benefits: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-(--surface) border border-(--border)  p-6 shadow hover:shadow-lg transition-all backdrop-blur-sm flex flex-col md:flex-row gap-4"
          >
            {benefit.imageUrl && (
              <Image
                src={benefit.imageUrl}
                alt={benefit.title}
                height={20}
                width={20}
                className="w-16 h-16 object-contain"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold text-(--primary) mb-1">
                {benefit.title}
              </h3>
              <p className="text-sm text-(--secondary)">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
