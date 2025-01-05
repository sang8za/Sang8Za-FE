// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import MatchingItem from "@/components/MatchingItem";
import { useAuth } from "@/hooks/useAuth";
import { UserType, UserProfile } from "@/types/user";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const { user, login } = useAuth();
  const router = useRouter();
  const [isTenantValue, setIsTenantValue] = useState<UserProfile>();
  const [isLandlordValue, setIsLandlordValue] = useState<UserProfile>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3021/user");

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        const tenant = data.data.find((x: UserProfile) => x.type === "tenant");
        const landlord = data.data.find(
          (x: UserProfile) => x.type === "landlord"
        );

        if (tenant) {
          setIsTenantValue(tenant);
        }
        if (landlord) {
          setIsLandlordValue(landlord);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = async (type: UserType) => {
    const selectedUser = isTenantValue ? isTenantValue : isLandlordValue; // 선택된 역할의 유저 정보 가져오기

    if (!selectedUser) {
      console.error("User not found for the selected role.");
      return;
    }

    login(selectedUser); // Context API에 저장
    router.push("/"); // 로그인 후 프로필 페이지로 이동
  };

  return (
    <div>
      {user ? (
        <MatchingItem />
      ) : (
        <div className="max-w-custom-md mx-auto flex justify-center gap-10">
          <div onClick={() => handleLogin("tenant")}>
            <div className="bg-gray-200 w-48 h-[211px] overflow-hidden">
              <Image
                src={isTenantValue?.image_url ?? ""}
                className="object-cover w-full h-full"
                width={192}
                height={211}
                alt="Tenant"
              />
            </div>
            <h2 className="h2 text-center">Tenant</h2>
          </div>
          <div onClick={() => handleLogin("landlord")}>
            <div className="bg-gray-200 w-48 h-[211px] overflow-hidden">
              <Image
                src={isLandlordValue?.image_url ?? ""}
                className="object-cover w-full h-full"
                width={192}
                height={211}
                alt="Landlord"
              />
            </div>
            <h2 className="h2 text-center">Landlord</h2>
          </div>
        </div>
      )}
    </div>
  );
}
