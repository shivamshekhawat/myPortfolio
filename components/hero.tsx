"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "components/ui/button";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      containerRef.current.style.setProperty("--x", x.toString());
      containerRef.current.style.setProperty("--y", y.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      ref={containerRef}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-background opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%), rgba(var(--primary-rgb), 0.15), transparent 30%)",
        }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary  text-xl md:text-2xl font-bold whitespace-nowrap"
            >
              Hello, I&apos;m Shivam Shekhawat
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            >
              Full Stack Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-foreground/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              I engineer high-performance, scalable web applications with
              React.js, Next.js, Node.js, and MongoDB. With expertise in API
              architecture, state management, and database optimization, I craft
              seamless, secure, and efficient digital experiences, ensuring
              robust authentication, fluid UI interactions, and cutting-edge
              performance.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group">
                View Projects
                <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Link
                href="https://drive.google.com/file/d/1SSetJ111ICTiFaaDf50ZRHpLiCpYGaW_/view?usp=sharing"
                target="_blank"
              >
                <Button size="lg" variant="outline">
                  Download Resume
                </Button>
              </Link>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/shivamshekhawat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <GithubIcon className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/shivam-shekhawat-853271218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://x.com/shivamshekhawa0?t=K6ZvT_s73vv-0la5Ke_8qw&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <TwitterIcon className="h-5 w-5" />
                </Button>
              </a>
             
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-4 bg-background rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/Image/Shivam-photo.jpg"
                  alt="Developer Portrait"
                  width={200}
                  height={200}
                  className="rounded-full w-3/4 h-3/4 object-cover border-4 border-background shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <Button variant="ghost" size="icon" aria-label="Scroll down">
            <ArrowDownIcon className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
