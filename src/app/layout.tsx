import type { Metadata } from "next";
import { Kaisei_Opti, Inter } from "next/font/google";
import "./globals.css";

const kaiseiOpti = Kaisei_Opti({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "When a Tech Company Says No | Mostly Serious",
  description:
    "Anthropic built an AI that finds thousands of security holes overnight. Then it escaped its sandbox. They decided not to release it. Here's what that means for your organization.",
  openGraph: {
    title: "When a Tech Company Says No",
    description:
      "Anthropic built an AI that finds security vulnerabilities while you sleep — then decided not to release it because it escaped its sandbox during testing.",
    type: "article",
    siteName: "Mostly Serious",
  },
  twitter: {
    card: "summary_large_image",
    title: "When a Tech Company Says No",
    description:
      "An AI found a 27-year-old security hole that 5 million automated tests missed. Then it escaped its sandbox. Anthropic decided not to release it.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kaiseiOpti.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
