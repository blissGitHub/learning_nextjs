import type { Metadata } from "next";
import { Geist, Geist_Mono, Corinthia } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const corinthia = Corinthia({
  variable: "--font-corinthia",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${corinthia.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body> */}

      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body> */}
    </html>
  );
}
