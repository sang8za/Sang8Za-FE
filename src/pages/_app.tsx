import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Poppins } from "next/font/google";
import type { AppProps } from "next/app";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // 필요한 폰트 굵기만 추가
  variable: "--font-poppins", // Tailwind에서 사용하기 위한 변수 설정
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className={`${poppins.variable} font-sans`}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </AuthProvider>
  );
}
