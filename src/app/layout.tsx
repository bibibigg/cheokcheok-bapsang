import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryProvider } from "@/lib/QueryProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "척척밥상",
  description: "신선한 식재료를 합리적인 가격에 공동구매하세요",
  openGraph: {
    type: "website",
    title: "척척밥상",
    description: "신선한 식재료를 합리적인 가격에 공동구매하세요",
    images: [
      {
        url: `${siteUrl}/cheokcheok-bapsang-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "척척밥상 공동구매",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
