import { Header } from "next/dist/lib/load-custom-routes";

type CspSyntax = "" | "*" | `'${string}'` | `${string}:` | `https://${string}`;

export const cspHeaderValue = () => {
  const isDev = process.env.NODE_ENV !== "production";

  const cspPolicies: Record<string, CspSyntax[]> = {
    "base-uri": ["'self'"],
    "connect-src": ["'self'", "https://*.sentry.io"],
    "default-src": ["'self'"],
    "font-src": ["*"],
    "frame-src": ["https://www.google.com"],
    "img-src": ["'self'", "data:"],
    "script-src": [
      "'self'",
      "'unsafe-inline'",
      "blob:",
      "https://www.google.com/recaptcha/api.js",
      "https://www.gstatic.com",
      "'strict-dynamic'",
      isDev ? "'unsafe-eval'" : "",
    ],
    "style-src": ["'self'", "'unsafe-inline'"],
    "style-src-elem": [
      "'self'",
      "https://fonts.googleapis.com",
      "'unsafe-inline'",
    ],
    "upgrade-insecure-requests": [""],
  };

  return Object.entries(cspPolicies).reduce(
    (acc, [key, policies]) => `${acc}${key} ${policies.join(" ")}; `,
    "",
  );
};

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspHeaderValue(),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

export const headers = [
  {
    headers: securityHeaders,
    source: "/(.*)",
  },
  {
    headers: [
      {
        key: "Content-Type",
        value: "application/rss+xml;charset=utf-8",
      },
    ],
    source: "/feed.xml",
  },
] satisfies Header[];
