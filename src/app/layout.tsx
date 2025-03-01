import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Armandas Portfolio Preperation",
  description: "Don't read this Btw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // Margin top left right should be by default like as so below
        className="mt-32 relative mr-7 ml-7 min-h-screen bg-black font-sans antialiased text-white"
      >
        {children}
      </body>
    </html>
  );
}
