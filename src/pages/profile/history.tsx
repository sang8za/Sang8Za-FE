import LandlordMatchingContent from "@/components/LandlordMatchingContent";
import UserLayout from "@/components/layout/UserLayout";
import HistoryThumbsItem from "@/components/HistoryThumbs";
import UserMatchingContent from "@/components/UserMatchingContent";
import { useAuth } from "@/hooks/useAuth";
import {
  PropertyDetail,
  propertyMockup,
  TenantDetail,
  tenantMockup,
} from "@/mock/loginData";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";

export default function ProfileContracts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { user } = useAuth();

  const smoothScroll = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + amount,
        behavior: "smooth", // ✅ 스크롤 애니메이션 적용
      });
    }
  };

  // Click
  const handleClick = (index: number) => {
    setIndex(index);
    console.log(index);
  };

  // user type별 fetch
  const mockData = {
    tenant: [
      {
        point: 5,
        label: "$1500",
        review: false,
      },
      {
        point: 4,
        label: "$1000",
        review: false,
      },
      {
        point: 3,
        label: "$500",
        review: true,
      },
      {
        point: 2,
        label: "$800",
        review: false,
      },
      {
        point: 1,
        label: "$2000",
        review: false,
      },
    ],
    landload: [
      {
        point: 5,
        label: "????",
        review: false,
      },
      {
        point: 2,
        label: "????",
        review: true,
      },
      {
        point: 3,
        label: "????",
        review: false,
      },
      {
        point: 4,
        label: "????",
        review: false,
      },
      {
        point: 5,
        label: "????",
        review: false,
      },
    ],
  };

  // mockData
  const selectedMockup = useMemo(() => {
    return user?.type === "tenant" ? mockData.tenant : mockData.landload;
  }, [mockData.landload, mockData.tenant, user?.type]);

  const propertyData: PropertyDetail[] = useMemo(() => {
    return user?.type === "tenant" ? propertyMockup : [];
  }, [user?.type]);

  const tenantData: TenantDetail[] = useMemo(() => {
    return user?.type === "landlord" ? tenantMockup : [];
  }, [user?.type]);

  return (
    <UserLayout>
      <h1 className="text-2xl font-bold">Match</h1>
      <div className="w-full py-3">
        <div className="w-full relative">
          {/* 왼쪽 이동 버튼 */}
          <button
            onClick={() => smoothScroll(-200)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 border border-gray-400 w-8 h-8 bg-white flex items-center justify-center rounded-full cursor-pointer z-10 
                   transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
          >
            <div className="transform rotate-180">
              <Image
                src="/lineArrow.svg"
                width={6}
                height={12}
                alt="left arrow"
              />
            </div>
          </button>

          {/* ✅ 가로 스크롤 가능한 컨테이너 */}
          <div
            ref={scrollContainerRef}
            className="flex gap-2 px-8 w-full overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {selectedMockup.map((data, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className="rounded-md border-2 border-transparent hover:border-primary transition-all duration-150 ease-in-out cursor-pointer"
              >
                <HistoryThumbsItem
                  label={data.label}
                  point={data.point}
                  review={data.review}
                />
              </button>
            ))}
          </div>

          {/* 오른쪽 이동 버튼 */}
          <button
            onClick={() => smoothScroll(200)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-400 w-8 h-8 bg-white flex items-center justify-center rounded-full cursor-pointer z-10 
                   transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
          >
            <Image
              src="/lineArrow.svg"
              width={6}
              height={12}
              alt="right arrow"
            />
          </button>
        </div>
        <div className="mt-3">
          {/* 역할별로 다른 컴포넌트 렌더링 */}
          {user?.type === "tenant" ? (
            <UserMatchingContent
              currentIndex={index}
              mockupData={propertyData}
              extraProps={
                selectedMockup[index].review ? (
                  <div className="flex justify-evenly mt-10">
                    <button className="button bg-gray-400 text-white">
                      Cancel
                    </button>
                    <button className="button bg-primary text-white">
                      Go to write review
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-evenly mt-10">
                    <button className="button bg-gray-400 text-white">
                      Cancel
                    </button>
                    <button className="button bg-primary text-white">
                      Contract
                    </button>
                  </div>
                )
              }
            />
          ) : (
            <LandlordMatchingContent
              currentIndex={index}
              mockupData={tenantData}
            />
          )}
        </div>
      </div>
    </UserLayout>
  );
}
