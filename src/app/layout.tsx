import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from '@/components/layout/Navbar'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AudioPlayer } from "@/components/AudioPlayer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${openSans.className} min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 antialiased`}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
