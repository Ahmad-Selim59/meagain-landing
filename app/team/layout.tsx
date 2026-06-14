import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeAgain Team",
  description:
    "Meet the MeAgain team — combining lived experience, clinical insight, and technical excellence to support women navigating treatment-induced menopause.",
  openGraph: {
    title: "MeAgain Team",
    description:
      "Meet the people building MeAgain — a mission-driven team supporting women through treatment-induced menopause.",
    url: "https://www.mymeagain.ie/team",
    siteName: "MeAgain",
  },
};

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
