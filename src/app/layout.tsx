import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from '@/components/layout/Navbar'
import { SpeedInsights } from "@vercel/speed-insights/next"
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
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
    // The property below ensures browsers use this favicon over any default
    other: {
      rel: 'icon',
      url: '/icon.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${urbanist.variable}`} suppressHydrationWarning>
      <body className={`${urbanist.className} min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-16">
            <div className="container relative mx-auto px-4 py-8">
              {children}
            </div>
          </main>
          <AudioPlayer />
          <SpeedInsights />
          <Toaster richColors closeButton theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
