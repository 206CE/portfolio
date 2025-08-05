/* Pages Router use only not App router
 */

import React from "react";
import Head from "next/head";
import { NextSeo, NextSeoProps } from "next-seo";
import Link from "next/link";

type CustomSeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: NextSeoProps["openGraph"];
  twitter?: NextSeoProps["twitter"];
  icons?: {
    icon?: { url: string }[];
  };
};

const Seo: React.FC<CustomSeoProps> = ({
  title = "Default Site Title",
  description = "Default site description.",
  canonical,
  openGraph,
  twitter,
  icons,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={openGraph}
        twitter={twitter}
      />
      <Head>
        {icons?.icon?.map((i, idx) => (
          <Link key={idx} rel="icon" href={i.url} />
        ))}
      </Head> 
    </>
  );
};

export default Seo;
