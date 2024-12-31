import type { Metadata } from "next";
import { Gelasio } from "next/font/google";
import "./globals.css";
import { Header, CustomCursor } from "@/components/ui";

const gelasio = Gelasio({ subsets: ["latin"], variable: "--font-gelasio" });

export const metadata: Metadata = {
  title: "Pastelin",
  description: "Pastelin's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white dark:bg-black">
      <body className={`${gelasio.variable} font-sans`}>
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
