import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import { QueryProvider } from "@/components/mycomponents/queryProvider";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ActFlow",
  description: "Full Stack Jira Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(mont.className, "antialiased min-h-screen")}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
