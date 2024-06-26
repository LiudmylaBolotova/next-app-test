import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from './header/header';
import Footer from './footer/footer';
import "../app/styles/globals.css";
import Loader from "react-loader-spinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lectures on programming",
  description: "Affordable programming lessons from leading experts in their field",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
  

        {children}
        <Footer/>
        </body>
    </html>
  );
}
