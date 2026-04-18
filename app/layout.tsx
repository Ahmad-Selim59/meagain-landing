import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeAgain,  Support for women affected by breast cancer",
  description: "...",
  openGraph: {
    title: "MeAgain, Support for women affected by breast cancer",
    description: "...",
    url: "https://mymeagain.ie",
    siteName: "MeAgain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
