import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { UserRole } from "@/types/user";
import { loginData } from "@/mock/loginData";

export default function LoginPage() {
  const { login } = useAuth();

  const [role, setRole] = useState<UserRole>("user");
  const router = useRouter();

  const handleLogin = () => {
    const selectedUser = loginData[role]; // 선택된 역할의 유저 정보 가져오기
    login(selectedUser); // Context API에 저장
    router.push("/"); // 로그인 후 프로필 페이지로 이동
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {/* 역할 선택 */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as UserRole)}
        className="border p-2 mb-2"
      >
        <option value="user">User</option>
        <option value="landlord">Landlord</option>
      </select>

      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
