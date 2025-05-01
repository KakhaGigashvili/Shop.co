import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Signupnow from "@/app/components/signupnow";
import Footer from "@/app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-#F2F0F1 antialiased`} >
      <Signupnow />
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
