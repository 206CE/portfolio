/* 1.0.0 */

import React from "react";
import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?:string;
};

const Card: React.FC<CardProps> = ({
  children,
  className = "bg-white rounded-lg shadow p-4",
  href ="",
}) => {
  return (
    <div className={className}>
        {(href = "") ?  ( children )  : (
            <Link className="cursor-pointer" href={href}>
                {children}
            </Link>
        )}
      
    </div>
  );
};

export default Card;
