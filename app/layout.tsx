import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from '@/components/layout/navbar';
import Footer from "@/components/layout/footer";
import StarAnimation from "@/components/star-animation";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

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

            {/* TikTok Pixel Code Start */}
            <Script id="tiktok-pixel" strategy="afterInteractive">
              {`
                !function (w, d, t) {
                  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
                var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
                ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                
                
                  ttq.load('D88E2EBC77U6KT5BO8NG');
                  ttq.page();
                }(window, document, 'ttq');
              `}
            </Script>
            {/* TikTok Pixel Code End */}
            
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
