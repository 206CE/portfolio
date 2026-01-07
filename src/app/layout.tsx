/* SEO */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "206_CE Services",
  description: "Everything Simplified",
  openGraph: {
    title: "206_CE Services",
    description: "Everything Simplified",
    url: "https://206CE.github.io/",
    siteName: "206_CE Services",
    images: [
      {
        url: "https://206CE.github.io/Logo/logo_res_OG.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "206_CE Services",
    description: "Everything Simplified",
    images: "https://206CE.github.io/Logo/logo_res_OG.png",
  },
};

/* CSS */
import "./globals.css";

/* FONT */
import { Audiowide } from "next/font/google";

const AudioW = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

/* LAYOUT */
import Container from "../Components/Container";

/* CONTENT */
import Logo from "../Components/Logo";
import ContactInfo from "../Components/ContactInfo";

/* CTA */
import Cta from "../Components/_Cta";

/* NAV */
import Navigation from "../Components/Navigation";
import Social from "../Components/Social";

const nItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    dropdown: [
      { label: "Web Development", href: "/services/webdev" },
      { label: "Service Management", href: "/services/management" },
      { label: "Training", href: "/services/training" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const social = [
  "https://www.linkedin.com/in/jaco-botha-886b7b95/",
  "https://www.facebook.com/jaco.botha.12139",
  "https://github.com/206CE",
  "https://discord.com/users/1337346807100866580",
  "https://x.com/206Roaches",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AudioW.className} antialiased`}>
        {/*BACKGROUND*/}
        <div className="bg-(--background)"></div>

        {/* HEADER */}
        <Container
          as={"header"}
          className="flex flex-row fixed w-full left-0 gap-6 justify-between items-center bg-(--bg-primary) mb-20 z-50"
        >
          {/* LOGO */}
          <Logo text="CE_206..." size={50} imagePath="/Logo.png" />

          {/* NAV */}
          <Navigation
            items={nItems}
            itemClassName="btn p-4 md:p-2 text-2xl lg:text-3xl b-(--bg-primary) z-10"
          />

          {/* CTA */}
          <Cta
            ctas={[{ label: "Get in Touch", href: "/contact" }]}
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
        <Container as={"footer"} className="mt-10">
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
