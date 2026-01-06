"use client";

{/* 1.0.3
  
  */}

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaGlobe } from 'react-icons/fa';
import { ReactElement } from 'react';
import Link from 'next/link';

interface SocialProps {
  urls: string[];
  linkStyle?:string;
}

const iconMap: { [key: string]: ReactElement } = {
  twitter: <FaTwitter className="h-6 w-6" />,
  facebook: <FaFacebook className="h-6 w-6" />,
  instagram: <FaInstagram className="h-6 w-6" />,
  linkedin: <FaLinkedin className="h-6 w-6" />,
  github: <FaGithub className="h-6 w-6" />,
  youtube: <FaYoutube className="h-6 w-6" />,
  web: <FaGlobe className="h-6 w-6" />,
};

function getIcon(url: string) {
  if (url.includes('twitter.com')) return iconMap.twitter;
  if (url.includes('facebook.com')) return iconMap.facebook;
  if (url.includes('instagram.com')) return iconMap.instagram;
  if (url.includes('linkedin.com')) return iconMap.linkedin;
  if (url.includes('github.com')) return iconMap.github;
  if (url.includes('youtube.com')) return iconMap.youtube;
  return iconMap.web;
}
{/* CSS Properties
  --text-primary
  --primary-hover
  
  */}

export default function Social({ urls, linkStyle }: SocialProps) {
  return (
    <div className="flex justify-center gap-4 items-center w-full pb-3">
      {urls.map((url) => (
        <Link
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkStyle} text-(--text-primary) hover:text-(--primary)`}
        >
          {getIcon(url)}
        </Link>
      ))}
    </div>
  );
}
