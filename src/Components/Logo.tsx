{/* 1.0.4
  
 
  CSS:
    text-(--text-primary)

  
  */}
  
import Image from "next/image";
import Link from "next/link";



interface LogoProps {
  text: string;
  imagePath?: string;
  size: number;
  href?: string;
}


export default function Logo({ text, imagePath = "/Logo.png", size, href='/' }: LogoProps) {
  return (
    <div className=" gap-2 text-2xl font-extrabold cursor-pointer">
      <Link href={href || ""}>
      <div className="flex flex-row items-center  gap-2 mr-4">
        <Image
          src={imagePath}
          alt={text}
          width={size}
          height={size}
          style={{ width: size, height: size }}
          priority
        />
        <span className="text-(--text-primary) shrink-0">{text}</span>
        </div>
      </Link>
    </div>
  );
}
