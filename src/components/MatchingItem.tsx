import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import UserMatchingContent from "./UserMatchingContent";
import LandlordMatchingContent from "./LandlordMatchingContent";
import {
  PropertyDetail,
  propertyMockup,
  TenantDetail,
  tenantMockup,
} from "@/mock/loginData";
import { Dialog, DialogContent } from "@/components/ui/Dialog";

export default function MatchingItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { user } = useAuth();

  const propertyData: PropertyDetail[] = useMemo(() => {
    return user?.type === "tenant" ? propertyMockup : [];
  }, [user?.type]);

  const tenantData: TenantDetail[] = useMemo(() => {
    return user?.type === "landlord" ? tenantMockup : [];
  }, [user?.type]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevItem();
      }
      if (e.key === "ArrowRight") {
        nextItem();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const nextItem = () => {
    if (
      (user?.type === "tenant" && propertyData.length > 0) ||
      (user?.type === "landlord" && tenantData.length > 0)
    ) {
      setCurrentIndex((prevIndex) => {
        const length =
          user?.type === "tenant" ? propertyData.length : tenantData.length;
        return (prevIndex + 1) % length;
      });
      setModalMessage("Like Sent");
      setIsModalOpen(true);
    }
  };

  const prevItem = () => {
    if (
      (user?.type === "tenant" && propertyData.length > 0) ||
      (user?.type === "landlord" && tenantData.length > 0)
    ) {
      setCurrentIndex((prevIndex) => {
        const length =
          user?.type === "tenant" ? propertyData.length : tenantData.length;
        return prevIndex === 0 ? length - 1 : prevIndex - 1;
      });
      setModalMessage("Disliked");
      setIsModalOpen(true);
    }
  };

  return (
    <div className="relative flex gap-10 justify-center">
      {/* 왼쪽 화살표 버튼 */}
      <div>
        <button
          onClick={prevItem}
          className="sticky left-5 top-2/4 transform -translate-y-1/2 p-2"
        >
          <Image src="/leftArrow.svg" width={30} height={30} alt="Previous" />
        </button>
      </div>

      {/* 역할별로 다른 컴포넌트 렌더링 */}
      {user?.type === "tenant" ? (
        <UserMatchingContent
          currentIndex={currentIndex}
          mockupData={propertyData}
        />
      ) : (
        <LandlordMatchingContent
          currentIndex={currentIndex}
          mockupData={tenantData}
        />
      )}

      {/* 오른쪽 화살표 버튼 */}
      <div>
        <button
          onClick={nextItem}
          className="sticky right-5 top-2/4 transform -translate-y-1/2 p-2"
        >
          <Image src="/rightArrow.svg" width={30} height={30} alt="Next" />
        </button>
      </div>

      <Dialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogContent>
          <div className="flex justify-center gap-3 flex-col">
            <p className="flex justify-center">{modalMessage}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-sm mt-4 px-4 py-2 bg-orange-500 text-white rounded-md w-[50%] self-center"
            >
              Confirm
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
