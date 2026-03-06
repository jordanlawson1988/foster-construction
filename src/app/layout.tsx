import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Foster Construction Services | Premier Remodeling in Marietta, GA",
  description:
    "Transform your home with Foster Construction Services. Expert kitchen remodeling, bathroom renovations, home additions, and more serving Marietta, GA and surrounding areas.",
  keywords: [
    "construction",
    "remodeling",
    "Marietta GA",
    "kitchen remodel",
    "bathroom renovation",
    "home additions",
    "Foster Construction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
