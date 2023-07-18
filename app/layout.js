"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";
import "@/styling/App.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
