import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LitLoop",
  description: "An Online Bookstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <ToastContainer position="top-right"/>
      </body>
    </html>
  );
}
