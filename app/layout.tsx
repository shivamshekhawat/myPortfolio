import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "components/theme-provider";
import { ToastProvider } from "components/ui/use-toast";
import Navbar from "components/navbar";
import Footer from "components/footer";
import ".././pages/globals.css"; // Correcting import path

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Full Stack Developer Portfolio showcasing React, Node.js, and MongoDB projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ToastProvider>
        <div className={`${inter.className} flex min-h-screen flex-col antialiased`}>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
