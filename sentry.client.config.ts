// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

Sentry.init({
  // The NEXT_PUBLIC_ prefix is a Next.js-specific feature that makes server-side environment variables accessible in
  // client-side code.
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
})
