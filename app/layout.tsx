import type { Metadata } from "next";
import { Gelasio } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui";
import { routes } from "@/constants";

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
        <Header routes={routes}/>
        {children}
      </body>
    </html>
  );
}
