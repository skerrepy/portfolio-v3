import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Hanafi",
  description:
    "Omar Hanafi is a passionate full-stack developer committed to creating intuitive web experiences with a focus on user-centric design and scalable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/placeholder.png" />
        <meta property="og:image:width" content="1200" />
        <meta name="og:image:type" content="image/png" />

        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/placeholder.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>

      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
