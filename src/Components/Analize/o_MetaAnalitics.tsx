/* 0.1.0

Testing phase
  > Add Sentry
  > Add Google analitics 4
   
*/

// components/MetaAnalytics.tsx

import Head from "next/head";
import { useEffect } from "react";
//import * as Sentry from "@sentry/react";
//import ReactGA from "react-ga4";

type MetaAnalyticsProps = {
  // SEO
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;

  // Analytics config
  googleAnalyticsId?: string;
  sentryDsn?: string;
  environment?: string;
  enableConsoleLog?: boolean;
};

const MetaAnalytics: React.FC<MetaAnalyticsProps> = ({
  title,
  description,
  keywords = "",
  author = "206CE",
  image = "/default-og.jpg",
  url = "https://www.206ce.github.io",
  googleAnalyticsId,
  sentryDsn,
  environment = "production",
  enableConsoleLog = false,
}) => {
  useEffect(() => {
    if (googleAnalyticsId) {
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.send("pageview");
      if (enableConsoleLog)
        console.log("[MetaAnalytics] Google Analytics initialized");
    }

    if (sentryDsn) {
      Sentry.init({
        dsn: sentryDsn,
        environment,
        integrations: [new Sentry.BrowserTracing()],
        tracesSampleRate: 1.0,
      });
      if (enableConsoleLog) console.log("[MetaAnalytics] Sentry initialized");
    }
  }, [googleAnalyticsId, sentryDsn, enableConsoleLog, environment]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default MetaAnalytics;
