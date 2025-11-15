import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NULLXES AIRLANE - WE FLIGHT EVERYONE",
  description:
    "NULLXES AIRLANE 2026 - premium black glass universe airline created by MagistrTheOne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
