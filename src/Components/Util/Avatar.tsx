/* 0.2.0 

  >Standard sizing will help
*/


import React from "react";
import Image from "next/image";

type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string; // Used for initials fallback
  className?: string; // Tailwind classes
};

const getInitials = (name?: string) => {
  if (!name) return "";
  const words = name.trim().split(" ");
  return words.length >= 2 ? `${words[0][0]}${words[1][0]}` : `${words[0][0]}`;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  name,
  className = "",
}) => {
  const initials = getInitials(name).toUpperCase();

  return (
    <div className={`overflow-hidden ${className}`}>
      {src ? (
        <Image src={src} alt={alt}  width={20} height={20}className="w-full h-full object-cover" />
      ) : (
        <span className="w-full h-full flex items-center justify-center font-bold">
          {initials}
        </span>
      )}
    </div>
  );
};

export default Avatar;
