import { useMemo, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import UserMatchingContent from "./UserMatchingContent";
import LandloadMatchingContent from "./LandloadMatchingContent";
import {
  PropertyDetail,
  propertyMockup,
  TenantDetail,
  tenantMockup,
} from "@/mock/loginData";

export default function MatchingItem() {
  const { user } = useAuth();

  // ✅ 역할별로 mockupData를 따로 관리
  const propertyData: PropertyDetail[] = useMemo(() => {
    return user?.role === "user" ? propertyMockup : [];
  }, [user?.role]);

  const tenantData: TenantDetail[] = useMemo(() => {
    return user?.role === "landlord" ? tenantMockup : [];
  }, [user?.role]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    if (
      (user?.role === "user" && propertyData.length > 0) ||
      (user?.role === "landlord" && tenantData.length > 0)
    ) {
      setCurrentIndex((prevIndex) => {
        const length =
          user?.role === "user" ? propertyData.length : tenantData.length;
        return (prevIndex + 1) % length;
      });
      alert("like");
    }
  };

  const prevItem = () => {
    if (
      (user?.role === "user" && propertyData.length > 0) ||
      (user?.role === "landlord" && tenantData.length > 0)
    ) {
      setCurrentIndex((prevIndex) => {
        const length =
          user?.role === "user" ? propertyData.length : tenantData.length;
        return prevIndex === 0 ? length - 1 : prevIndex - 1;
      });
      alert("dislike");
    }
  };

  return (
    <div className="relative flex gap-5 justify-center">
      {/* 왼쪽 화살표 버튼 */}
      <button
        onClick={prevItem}
        className="fixed left-5 top-1/2 transform -translate-y-1/2 p-2"
      >
        <Image src="/leftArrow.svg" width={30} height={30} alt="Previous" />
      </button>

      {/* 역할별로 다른 컴포넌트 렌더링 */}
      {user?.role === "user" ? (
        <UserMatchingContent
          currentIndex={currentIndex}
          mockupData={propertyData}
        />
      ) : (
        <LandloadMatchingContent
          currentIndex={currentIndex}
          mockupData={tenantData}
        />
      )}

      {/* 오른쪽 화살표 버튼 */}
      <button
        onClick={nextItem}
        className="fixed right-5 top-1/2 transform -translate-y-1/2 p-2"
      >
        <Image src="/rightArrow.svg" width={30} height={30} alt="Next" />
      </button>
    </div>
  );
}
