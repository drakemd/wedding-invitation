import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@dotlottie/react-player/dist/index.css';
import { MusicProvider } from "./__providers/bgmprovider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <Suspense fallback={<div>loading...</div>}>
          <MusicProvider>
            {children}
          </MusicProvider>
        </Suspense>
      </body>
    </html>
  );
}
