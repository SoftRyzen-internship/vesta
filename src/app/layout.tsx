import type { Metadata } from "next";

import localFont from "next/font/local";

import meta from "@/data/meta.json";

import "./globals.css";

const eUkraine = localFont({
  src: [
    {
      path: "../../public/fonts/e-UkraineHead-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/e-UkraineHead-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/e-UkraineHead-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/e-UkraineHead-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-eUkraine",
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { title, description, manifest, keywords, twitter, openGraph, icons } =
    meta;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    manifest,
    keywords,
    twitter,
    openGraph: { ...openGraph, url: `${baseUrl}` },
    icons,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${eUkraine.className} bg-color-bg`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
