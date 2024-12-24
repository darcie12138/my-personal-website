import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from '@/components/layout/navbar';
import Footer from "@/components/layout/footer";
import StarAnimation from "@/components/star-animation";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Outfit } from "next/font/google"

const outfit = Outfit({
  weight: ["300", "400", "500", "700"], 
  subsets: ["latin"],
  display: "swap",  
  // display: "swap" 可以让页面先用系统字体渲染，
  // 等自定义字体加载完后再切换，避免文字闪烁。
});


// import CoverLetter from "@/components/cover-letter";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Yuwei Ding | Data Analyst",
  description: "Hi there, I'm Yuwei (Darcie) Ding, a data analyst. Welcome to my personal blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"  suppressHydrationWarning={true}>
      <body className={`${outfit.className} dot-grid`}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <Navbar />
            <main className="flex flex-col items-center md:p-24 px-2 py-24 max-w-[1000px] my-0 mx-auto light-green" style={{ minHeight: "calc(100vh - 6rem)" }}>

              {children}
            </main>
            <Footer />

            <StarAnimation />
            <Analytics />
            <SpeedInsights />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
