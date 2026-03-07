import type { Metadata } from "next";
import { Geist, Geist_Mono, Corinthia } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import { Toaster } from "sonner";
import { getSession, SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <>
//       <html lang="en" suppressHydrationWarning>
//         <head />
//         <body>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//             <ModeToggle />
//             {children}
//           </ThemeProvider>
//         </body>
//       </html>
//     </>
//   );
// }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <head></head>
        <body className={`${geistSans.variable} ${geistMono.variable} ${corinthia.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Toaster position="top-center" />
            <ModeToggle />

            {children}
          </ThemeProvider>
        </body>
      </SessionProvider>

      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body> */}

      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body> */}
    </html>
  );
}
