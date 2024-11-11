import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "HLTV Clone",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
