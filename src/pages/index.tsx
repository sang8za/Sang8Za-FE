// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>test</p>
      </main>
      <Footer />
    </>
  );
}
