import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FaGithub, FaDribbble, FaFigma } from "react-icons/fa6";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilyas Audy",
  description: "Web designer and front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firaCode.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-mono text-foreground bg-background relative selection:bg-primary/30 selection:text-white">
        {/* Background glow meshes */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10 pointer-events-none" />
        
        {/* Left Side Social Rail */}
        <div className="hidden lg:flex fixed left-5 top-0 flex-col items-center gap-4 z-50 animate-[slide-up_1s_ease-out_forwards]">
          <div className="w-px h-32 bg-secondary" />
          <a href="#" className="text-secondary hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-secondary hover:text-white transition-colors">
            <FaDribbble size={24} />
          </a>
          <a href="#" className="text-secondary hover:text-white transition-colors">
            <FaFigma size={24} />
          </a>
          <div className="w-px h-32 bg-secondary" />
        </div>

        <Navbar />
        <main className="flex-grow pt-24 px-4 lg:px-0">
          <div className="max-w-[1024px] mx-auto w-full">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
