import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinuka Priyanath | Full Stack Developer",
  description: "Portfolio of a passionate full stack developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-900 text-white p-4 shadow">
          <nav className="flex gap-6 justify-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="p-6 bg-white">{children}</main>
        <footer className="text-center text-sm text-gray-500 mt-10 p-4 border-t">
          © 2025 Dinuka Priyanath
        </footer>
      </body>
    </html>
  );
}
