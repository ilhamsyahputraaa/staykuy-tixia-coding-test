import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/general/NavigationBar";
import { City, CityResponse } from "@/lib/type";
import { getListKota } from "@/lib/api";
import CityProvider from "@/components/general/CityProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const res: CityResponse = await getListKota();

  const cities: City[] = res.data;
  return (
    <html lang="en">
      {/* <NavigationBar /> */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
      <CityProvider  cities={cities}>
        {children}
        </CityProvider>
      </body>
    </html>
  );
}
