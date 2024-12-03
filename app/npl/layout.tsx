import Header from "@/components/npl/layout/Header";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: `NPL ${new Date().getFullYear()} - Nepal Premier League : Festivals of Himalayas `,
  description:
    "NPL 2024! Witness top teams compete in the Nepal Premier League's most thrilling season yet. Stay updated with schedules, scores, and news.",
  keywords:
    "NPL 2024, Nepal Premier League, sports, football, cricket, teams, schedules, matches , Janakpur Bolts ,Pokhara Avengers, Biratnagar Kings, Lumbini Lions, Chitwan Rhinos , Karnali Yaks ,Sudur Paschim Riders,  ",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `Nepal Premier League : Festivals of Himalayas`,
    description:
      "NPL 2024! Witness top teams compete in the Nepal Premier League's most thrilling season yet. Stay updated with schedules, scores, and news.",
    url: "https://www.nishan-bhattarai.com.np/npl",
    siteName: `NPL ${new Date().getFullYear()} - Nepal Premier League : The Ultimate Cricket Experience`,
    images: ["/npl-logo.png"],
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className="px-6 sm:px-10 "></div>
      {children}
    </div>
  );
};

export default Layout;
