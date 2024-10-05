"use client";

import { Inter } from "next/font/google";

import { useEffect } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import getTheme from "@/lib/getTheme";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  useEffect(() => {
    const isDark = "dark" === getTheme();
    localStorage.theme = isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return (
    <body
      className={`${inter.className} bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-200 antialiased transition`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
}
