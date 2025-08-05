{/* 0.1.0 BROKEN
  
  > Adding files to next.js file for some reason...
  
  */}


import React from "react";
import Image from "next/image";
import Link from "next/link";
// Props interface
interface AffiliateIconsProps {
  urls: string[];
  iconSize?: number; // Optional size control
}

const getFaviconUrl = (url: string, size: number = 32): string => {
  const domain = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?sz=${size}&domain=${domain}`;
};

const AffiliateIcons: React.FC<AffiliateIconsProps> = ({
  urls,
  iconSize = 32,
}) => {
  return (
    <div className="flex gap-4 items-center">
      {urls.map((url, index) => (
        <Link
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src={getFaviconUrl(url, iconSize)}
            alt={`Affiliate ${index + 1}`}
            width={iconSize}
            height={iconSize}
            className="rounded"
          />
        </Link>
      ))}
    </div>
  );
};

export default AffiliateIcons;
