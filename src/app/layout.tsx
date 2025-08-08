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

/* LAYOUTS */
import Container from "@/Components/Layout/Container";

/* CONTENTS */
import Logo from "../Components/Content/Logo";
import ContactInfo from "@/Components/Content/ContactInfo";

/* CTA */
import Cta from "../Components/Ctas/Cta";

/* NAV */
import Navigation from "../Components/Nav/Navigation";
import Social from "../Components/Nav/Social";



const social = [
  "https://www.linkedin.com/in/jaco-botha-886b7b95/",
  "https://www.facebook.com/jaco.botha.12139",
];

/* SEO */
import { defaultMetadata } from "@/lib/metadata";
export const metadata = defaultMetadata;

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
        <Container
          as={"header"}
          className="flex flex-row gap-6 justify-between mx-2 items-center" 
        >
          {/* LOGO */}
          <Logo text="CE_206..." size={50} imagePath="/Logo.png" />

          {/* NAV */}
          <Navigation
            items={[
              { label: "Home", href: "/" },
              {
                label: "Services",
                dropdown: [
                  {
                    label: "Web Development",
                    href: "/Services/web-development",
                  },
                ],
              },
              { label: "About", href: "/About" },
              { label: "Customers", href: "/Customers" },
              { label: "Contact", href: "/Contact" },
            ]}
            itemClassName="btn p-4 md:p-2 md:text-xl lg:text-2xl "
          />

          {/* CTA */}
          <Cta
            ctas={[{ label: "Get a Quote", href: "/Contact" }]}
            itemClassFormat="btn hidden lg:block"
          />

          {/* SEARCH */}

          {/* LOGIN */}

          {/* CART */}

          {/* LANG */}
          {/* ACCESSABILTY */}

          {/* ANOUNCE */}
        </Container>
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
