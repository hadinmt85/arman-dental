const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;

/**
 * Absolute site URL used for canonical metadata, sitemap and robots.
 * Priority: explicit NEXT_PUBLIC_SITE_URL → Vercel production domain → real domain.
 */
export const siteUrl =
  configured ??
  (vercelProduction ? `https://${vercelProduction}` : "https://armandental.ir");
