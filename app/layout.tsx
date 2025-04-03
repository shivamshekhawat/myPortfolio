import React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "components/theme-provider";
import { ToastProvider } from "components/ui/use-toast";
import Navbar from "components/navbar";
import Footer from "components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Full Stack Developer Portfolio showcasing React, Node.js, and MongoDB projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ToastProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
