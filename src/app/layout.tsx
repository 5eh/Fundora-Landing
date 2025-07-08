import type { Metadata } from "next";
import { Montserrat, Hind_Madurai } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const hindMadurai = Hind_Madurai({
  variable: "--font-hind-madurai",
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${montserrat.variable} ${hindMadurai.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
