// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import MatchingItem from "@/components/MatchingItem";
import { useAuth } from "@/hooks/useAuth";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  const { user, logout } = useAuth();
  return <div>{user ? <MatchingItem /> : <div>login 하세요</div>}</div>;
}
