import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      {/* 고정된 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="flex-1 mt-16 mb-16 p-4">{children}</main>

      {/* 고정된 푸터 */}
      <Footer />
    </div>
  );
}
