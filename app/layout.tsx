import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head from next/head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bellroys Robot",
  description: "A robot to aide the jobsearch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
