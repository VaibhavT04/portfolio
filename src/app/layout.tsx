import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import SmoothScrolling from "@/components/SmoothScrolling";
import SmoothFollower from "@/components/SmoothFollower";

const poppins = Poppins({
    subsets: ["latin"],
    weight:['500']
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <SmoothScrolling>
                {children}
            </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
