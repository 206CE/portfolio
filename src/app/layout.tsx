/* SEO */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "206ce",
  description: "Computer technology for the future.",
  metadataBase: new URL("https://206ce.github.io"),
  openGraph: {
    type: "website",
    url: "https://206ce.github.io",
    title: "206_CE Technologies",
    description: "Scalable technologies",
    siteName: "206_CE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "206CE Banner",
      },
    ],
    
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

/* CSS */
import "./globals.css";

/* FONT */
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

/* LAYOUT */
import Container from "@/Components/Layout/Container";

/* CONTENT */
import Logo from "../Components/Content/Logo";
import ContactInfo from "@/Components/Content/ContactInfo";

/* CTA */
import Cta from "../Components/Ctas/Cta";

/* NAV */
import Navigation from "../Components/Nav/Navigation";
import Social from "../Components/Nav/Social";

const nItems = [
  { label: "Home", href: "/" },
  {
    label: "Aspects",
    dropdown: [
      { label: "Secure", href: "/aspects/secure" },
      { label: "Expand", href: "/aspects/expand" },
      { label: "Gather", href: "/aspects/gather" },
      { label: "Adapt", href: "/aspects/adapt" },
    ],
  },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Customers", href: "/customers" },
  { label: "Contact", href: "/contact" },
];

const social = [
  "https://www.linkedin.com/in/jaco-botha-886b7b95/",
  "https://www.facebook.com/jaco.botha.12139",
];



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} ${space.className} antialiased`}>
        {/*BACKGROUND*/}
        <div className="bg-(--background)"></div>

        {/* HEADER */}
        <Container
          as={"header"}
          className="flex flex-row fixed w-full left-0 gap-6 justify-between items-center bg-(--bg-primary) mb-20"
        >
          {/* LOGO */}
          <Logo text="CE_206..." size={50} imagePath="/Logo.png" />

          {/* NAV */}
          <Navigation
            items={nItems}
            itemClassName="btn p-4 md:p-2 md:text-xl lg:text-2xl"
          />

          {/* CTA */}
          <Cta
            ctas={[{ label: "Get a Quote", href: "/contact" }]}
            itemClassFormat="btn hidden lg:block text-1xl p-2   mr-10 font-bold border"
          />

          {/* SEARCH */}

          {/* LOGIN */}

          {/* CART */}

          {/* LIGHT/DARK */}
          
          {/* LANG */}
          {/* ACCESSABILTY */}

          {/* ANOUNCE */}
        </Container>
        <div className="p-10"></div>
        {children}
        {/* FOOTER */}
        <Container as={"footer"}>
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
        </Container>
      </body>
    </html>
  );
}
