import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaapa Ride | Borderless Payments for Boda Bodas & Cabs",
  description: "Chaapa Ride offers borderless payments for boda bodas and cabs, revolutionizing mobility across Africa.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
          async
        />
        {children}
      </body>
    </html>
  );
}
