/*
npm install @sentry/nextjs
npx sentry wizard -i nextjs 






lib/sentry.client.ts

import * as Sentry from "@sentry/nextjs";

export function initSentry() {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 1.0,
    });
  }
}

Sentry.tsx

import { useEffect } from "react";
import { initSentry } from "@/lib/sentry.client";

export default function SentryInit() {
  useEffect(() => {
    initSentry();
  }, []);

  return null;
}
  
*/