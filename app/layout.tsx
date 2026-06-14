import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const siteUrl = new URL("https://www.mymeagain.ie");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "MeAgain - Menopause Support During Breast Cancer Treatment",
  description:
    "MeAgain is being developed to help women prepare for and stabilise menopause symptoms across the breast cancer treatment journey",
  openGraph: {
    title: "MeAgain - Menopause Support During Breast Cancer Treatment",
    description:
      "MeAgain is being developed to help women prepare for and stabilise menopause symptoms across the breast cancer treatment journey",
    url: siteUrl,
    siteName: "MeAgain",
  },
  icons: {
    icon: [
      // Google Search favicons: square PNG, multiples of 48px (not the 1024px asset).
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: [{ url: "/favicon-192.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/favicon-192.png", type: "image/png", sizes: "192x192" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
