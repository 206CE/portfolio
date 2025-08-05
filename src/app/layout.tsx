/* STYLES */
import "./globals.css";

/* FONTS */
import { Syne_Mono } from "next/font/google";
import { Space_Mono } from "next/font/google";

const syne = Syne_Mono({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: "400",
});

const space = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: "400",
});

/* COMPONENTS */
import Logo from "../Components/Content/Logo";
import Navigation from "../Components/Nav/Navigation";
import Social from "../Components/Nav/Social";
import Cta from "../Components/Ctas/Cta";
import ContactInfo from "@/Components/Content/ContactInfo";

const nItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    dropdown: [{ label: "Web Development", href: "/Services/web-development" }],
  },
  { label: "About", href: "/About" },
  { label: "Customers", href: "/Customers" },
  { label: "Contact", href: "/Contact" },
];

const social = [
  "https://www.linkedin.com/in/jaco-botha-886b7b95/",
  "https://www.facebook.com/jaco.botha.12139",
];


/* App router SEO  */
export const metadata = {
  title: "206ce",
  description: "Computer technology for the future.",
  metadataBase: new URL("https://206ce.github.io"),
  openGraph: {
    title: "206_CE Technologies",
    description: "Scalable technologies",
    url: "https://206ce.github.io",
    siteName: "206_CE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "206CE Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // Your Twitter handle
    description: "Website development",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/Logo.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} ${space.className} antialiased`}>
        {/*BACKGROUND*/}
        <div className="absolute inset-0 -z-10 bg-(--background)"></div>
        
        {/* HEADER */}
        <header className="flex flex-row gap-6 justify-between mx-2 items-center ">
          {/* LOGO */}
          <Logo text="CE_206..." size={50} imagePath="/Logo.png" />

          {/* NAV */}
          <Navigation
            items={nItems}
            itemClassName="btn p-4 md:p-2 md:text-xl lg:text-2xl "
          />

          {/* CTA */}
          <Cta
            ctas={[{ label: "Get a Quote", href: "/Contact" }]}
            itemClassFormat="hidden lg:block text-(--primary) text-1xl p-2  btn mr-10 font-bold border"
          />

          {/* SEARCH */}

          {/* LOGIN */}

          {/* CART */}

          {/* LANG */}
          {/* ACCESSABILTY */}

          {/* ANOUNCE */}
        </header>
        {children}
        {/* FOOTER */}
        <footer>
          {/* PRIVACY */}
          {/* TERMS */}
          {/* TRUST (badges)*/}
          {/* NEWS */}
          {/* SOCIAL */}
            <Social linkStyle="btn" urls={social} />
          {/* CONTACTINFO */}
          <ContactInfo
            cellphone="+27(0)79 497 2646"
            email="jacobotha206@gmail.com"
          />
          {/* COPY */}
          {/* MINIABOUT */}
        </footer>
      </body>
    </html>
  );
}
