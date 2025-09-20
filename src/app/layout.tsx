import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundora",
  description:
    "Building a movement for Wyoming, through collateralization in Web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={` ${unbounded.variable} text-ddin-normal antialiased bg-black text-white`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
