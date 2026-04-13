import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeAgain — Support for women affected by breast cancer",
  description: "MeAgain is being developed to help women prepare for and stabilise menopause symptoms across the breast cancer treatment journey.",
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
