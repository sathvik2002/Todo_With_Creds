import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import ToDo from "@/components/ToDo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TODO",
  description: "Just a todo app but a little more fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <NavBar />
        <div className="w-full h-[90vh] flex">
          <div className="w-[60%] h-[100%]">{children}</div>
          <div className="w-[40%] h-[100%] flex justify-center items-center">
            <ToDo />
          </div>
        </div>
      </body>
    </html>
  );
}
