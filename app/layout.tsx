import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeAgain | Hormone Support Pathway",
  description: "MeAgain helps women prepare for, and manage, menopause symptoms caused by breast cancer treatment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background-light font-display text-text-light transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
