import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavBar from "./components/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WibuHub",
  description: "WibuHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-xs`}
      >
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
