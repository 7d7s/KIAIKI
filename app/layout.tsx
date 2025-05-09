import type { Metadata } from "next";
import { Inter ,Raleway} from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KIAKIA",
  description: "Interior",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${raleway.variable}antialiased`}
      >
        <NavigationBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
