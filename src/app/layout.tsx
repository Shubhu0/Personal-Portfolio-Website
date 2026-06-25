import type { Metadata } from "next";
import { Instrument_Serif, Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";

import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubhankar Mishra — Software Engineer",
  description:
    "Software engineer turning designs into functional, high-performing web applications — full-stack React interfaces, scalable Java backends, and cloud-native systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          serif.variable,
          sans.variable,
          mono.variable,
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
