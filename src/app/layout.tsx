import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SimpleNav from "@/components/SimpleNav";
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
  title: "Habit Tracker AI",
  description: "Track your habits and build streaks with AI-powered insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SimpleNav />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
