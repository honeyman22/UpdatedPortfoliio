import type { Metadata } from "next";import { Bitter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/new-design/NavBar";

const inter = Bitter({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: ` Senior Frontend Developer | JavaScript, React, UI/UX Design | Nishan
        Bhattarai`,
  description:
    "Experienced Senior Frontend Developer specializing in React, JavaScript, and UI/UX design. Explore my projects and skills.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `Senior Frontend Developer | JavaScript, React, UI/UX Design | Nishan Bhattarai`,
    description:
      "Experienced Senior Frontend Developer specializing in React, JavaScript, and UI/UX design. Explore my projects and skills.",
    url: "https://www.nishan-bhattarai.com.np/",
    siteName: "Portfolio | Nishan Bhattarai",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: "Nishan Bhattarai",
              url: "https://www.nishan-bhattarai.com.np/",
              image:
                "https://media.licdn.com/dms/image/v2/C5603AQF1mihHOxZFgw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1648211179565?e=2147483647&v=beta&t=zrYt6YLfraj5p3bb02x1YfzWIUb0-pHkhG4wZoouCwk",
              sameAs: [
                "https://www.facebook.com/people/Nishan-Bhattarai/pfbid0p5zkBHczY1fXmA7Eo7mTSnvYgDwRcAnRTtwstuXgNvoReHDPyXJBbjCBD1D8So8Zl/",
                "https://www.instagram.com/nishan_bhatarai/",
                "https://np.linkedin.com/in/nishan-bhattarai-4529b9235",
              ],
              jobTitle: "Frontend Developer",
            }),
          }}
        />
      </head>
      <body className={inter.className + " bg-neutral-900"}>
        <Navbar />
        <div className="mt-[112px]"></div>
        {children}
      </body>
    </html>
  );
}
