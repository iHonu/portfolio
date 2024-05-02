import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { CSPostHogProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anastasia Tikhonova",
  description: "Full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
