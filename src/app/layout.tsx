import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from '@/components/layout/Navbar'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { AudioPlayer } from "@/components/AudioPlayer";
import { Toaster } from 'sonner';

const urbanist = Urbanist({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: "Srijan Telang | Portfolio",
  description: "My personal portfolio showcasing my projects and skills.",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
    other: [
      { rel: 'icon', url: '/icon.png' },
      { rel: 'shortcut icon', url: '/icon.png' }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${urbanist.variable}`} suppressHydrationWarning>
      <body className={`${urbanist.className} min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <Navbar />
          <main className="min-h-screen pt-16">
            <div className="container relative mx-auto px-4 py-8">
              {children}
            </div>
          </main>
          <AudioPlayer />
          <SpeedInsights />
          <Analytics />
          <Toaster richColors closeButton theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
