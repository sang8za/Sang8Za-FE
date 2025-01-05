// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import MatchingItem from "@/components/MatchingItem";
import { useAuth } from "@/hooks/useAuth";
import { loginData } from "@/mock/loginData";
import { UserRole } from "@/types/user";
import { useRouter } from "next/router";

export default function Home() {
  const { user, login } = useAuth();
  const router = useRouter();

  const handleLogin = (role: UserRole) => {
    const selectedUser = loginData[role]; // 선택된 역할의 유저 정보 가져오기
    login(selectedUser); // Context API에 저장
    router.push("/"); // 로그인 후 프로필 페이지로 이동
  };

  return (
    <div>
      {user ? (
        <MatchingItem />
      ) : (
        <div className="max-w-custom-sm mx-auto flex justify-center gap-10">
          <div onClick={() => handleLogin("user")}>
            <div className="bg-gray-200 w-48 min-h-64" />
            <h2 className="h2 text-center">Tenant</h2>
          </div>
          <div onClick={() => handleLogin("landlord")}>
            <div className="bg-gray-200 w-48 min-h-64" />
            <h2 className="h2 text-center">Landlord</h2>
          </div>
        </div>
      )}
    </div>
  );
}
