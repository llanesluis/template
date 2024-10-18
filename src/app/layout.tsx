import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/_components/providers/providers";
import Footer from "@/app/_components/footer";
import Navbar from "@/app/_components/navbar";
import { DynamicScreenDevTools } from "./_components/indicators/screen-indicators";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template Next.js - Tailwind CSS - TypeScript",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased selection:bg-green-300 dark:selection:bg-green-900"
      suppressHydrationWarning
    >
      <body className={cn(inter.className, "flex min-h-screen flex-col")}>
        <Providers>
          <Navbar />
          <div className="isolate grid grow">{children}</div>
          <Footer />

          <DynamicScreenDevTools />
        </Providers>
      </body>
    </html>
  );
}
