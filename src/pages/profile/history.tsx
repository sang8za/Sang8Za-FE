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
import { useMemo, useRef, useState, useContext } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/Dialog";
import { AuthContext } from "@/context/AuthContext";

export default function ProfileContracts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isLandlordContractModalOpen, setIsLandlordContractModalOpen] =
    useState(false);
  const [isLandlordCancelModalOpen, setIsLandlordCancelModalOpen] =
    useState(false);
  const [filledHearts, setFilledHearts] = useState(0);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { user } = useAuth();
  const auth = useContext(AuthContext);

  const smoothScroll = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + amount,
        behavior: "smooth", // ✅ 스크롤 애니메이션 적용
      });
    }
  };

  const handleClickHeartFill = (index: number) => {
    setFilledHearts(index + 1); // Fill up to the clicked heart
  };

  const onWriteContractHandler = () => {
    setIsContractModalOpen(true);
  };

  const onCancelContractHandler = () => {
    setIsCancelModalOpen(true);
  };

  const onLandlordWriteContractHandler = () => {
    setIsLandlordContractModalOpen(true);
  };

  const onLandlordCancelContractHandler = () => {
    setIsLandlordCancelModalOpen(true);
  };

  // Click
  const handleClick = (index: number) => {
    setIndex(index);
    console.log(index);
  };

  const mockupUserReviewData = [
    {
      total_average_rating: 4,
      total_received: 5,
      total_received_average: 3,
      total_written: 4,
      total_written_average: 4,
    },
  ];

  // user type별 fetch
  const mockData = {
    tenant: [
      {
        point: 5,
        label: "$1500",
        review: false,
        name: "Home in Vancouver",
      },
      {
        point: 4,
        label: "$1000",
        review: false,
        name: "Home in Burnaby",
      },
      {
        point: 3,
        label: "$500",
        review: true,
        name: "Home in Vancouver",
      },
      {
        point: 2,
        label: "$800",
        review: false,
        name: "Home in Coquitlam",
      },
      {
        point: 1,
        label: "$2000",
        review: false,
        name: "Home in Surrey",
      },
    ],
    landlord: [
      {
        point: 5,
        label: "????",
        review: false,
        name: "Home in Vancouver",
      },
      {
        point: 2,
        label: "????",
        review: true,
        name: "Home in Burnaby",
      },
      {
        point: 3,
        label: "????",
        review: false,
        name: "Home in Vancouver",
      },
      {
        point: 4,
        label: "????",
        review: false,
        name: "Home in Coquitlam",
      },
      {
        point: 5,
        label: "????",
        review: false,
        name: "Home in Surrey",
      },
    ],
  };

  // mockData
  const selectedMockup = useMemo(() => {
    return user?.type === "tenant" ? mockData.tenant : mockData.landlord;
  }, [mockData.landlord, mockData.tenant, user?.type, user?.name]);

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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 border border-gray-400 w-8 h-8 bg-white flex items-center justify-center rounded-full cursor-pointer z-10"
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

          <button
            onClick={() => smoothScroll(200)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-400 w-8 h-8 bg-white flex items-center justify-center rounded-full cursor-pointer z-10"
          >
            <Image
              src="/lineArrow.svg"
              width={6}
              height={12}
              alt="right arrow"
            />
          </button>
        </div>

        {/* 역할별로 다른 컴포넌트 렌더링 */}
        <div className="mt-3">
          {user?.type === "tenant" ? (
            <UserMatchingContent
              currentIndex={index}
              mockupData={propertyData}
              extraProps={
                selectedMockup[index].review ? (
                  <div className="flex justify-evenly mt-10">
                    <button
                      className="button bg-gray-400 text-white"
                      onClick={onCancelContractHandler}
                    >
                      Cancel
                    </button>
                    <button
                      className="button bg-primary text-white"
                      onClick={onWriteContractHandler}
                    >
                      Go to write review
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-evenly mt-10">
                    <button
                      className="button bg-gray-400 text-white"
                      onClick={onCancelContractHandler}
                    >
                      Cancel
                    </button>
                    <button
                      className="button bg-primary text-white"
                      onClick={onWriteContractHandler}
                    >
                      Contract
                    </button>
                  </div>
                )
              }
            />
          ) : user?.type === "landlord" ? (
            <LandlordMatchingContent
              currentIndex={index}
              mockupData={tenantData}
              extraProps={
                selectedMockup[index].review ? (
                  <div className="flex justify-evenly mt-10">
                    <button
                      className="button bg-gray-400 text-white"
                      onClick={onLandlordCancelContractHandler}
                    >
                      Cancel
                    </button>
                    <button
                      className="button bg-primary text-white"
                      onClick={onLandlordWriteContractHandler}
                    >
                      Go to write review
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-evenly mt-10">
                    <button
                      className="button bg-gray-400 text-white"
                      onClick={onLandlordCancelContractHandler}
                    >
                      Cancel
                    </button>
                    <button
                      className="button bg-primary text-white"
                      onClick={onLandlordWriteContractHandler}
                    >
                      Contract
                    </button>
                  </div>
                )
              }
            />
          ) : null}
        </div>
      </div>

      {isContractModalOpen && user?.type === "tenant" && (
        <Dialog
          isOpen={isContractModalOpen}
          onClose={() => setIsContractModalOpen(false)}
        >
          <DialogHeader
            title={`Do you want to contract to ${selectedMockup[index].name}?`}
          />
          <DialogContent>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsContractModalOpen(false)}
                className="mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsContractModalOpen(false)}
                className="mt-10 text-sm px-5 py-2.5 me-2 mb-2 bg-orange-500 text-white border border-transparent rounded-lg font-medium focus:outline-none hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-500"
              >
                Contract
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {isCancelModalOpen && user?.type === "tenant" && (
        <Dialog
          isOpen={isCancelModalOpen}
          onClose={() => setIsCancelModalOpen(false)}
        >
          <DialogHeader
            title={`Do you not want to contract with ${selectedMockup[index].name}?`}
          />
          <DialogContent>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsCancelModalOpen(false)}
                className="mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsCancelModalOpen(false)}
                className="mt-10 text-sm px-5 py-2.5 me-2 mb-2 bg-orange-500 text-white border border-transparent rounded-lg font-medium focus:outline-none hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-500"
              >
                Confirm
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {isLandlordContractModalOpen && user?.type === "landlord" && (
        <Dialog
          isOpen={isLandlordContractModalOpen}
          onClose={() => setIsLandlordContractModalOpen(false)}
        >
          <DialogContent>
            <div className="flex justify-center gap-3 flex-col">
              <div className="flex items-center">
                <Image
                  className="mr-5 w-12 h-12 rounded-full object-cover ring-4 ring-orange-500 ring-offset-4 ring-offset-white"
                  src={user.image_url}
                  alt="user image icon"
                  width={20}
                  height={20}
                />
                <div>
                  <div className="flex gap-2">
                    <p>{user.name}</p>
                    <div className="flex items-center gap-1">
                      <Image
                        className="w-4 h-4"
                        src="/orange_heart.svg"
                        alt="orange heart icon"
                        width={24}
                        height={24}
                      />
                      <p>{mockupUserReviewData[0].total_average_rating}</p>
                    </div>
                  </div>
                  <div>Placeholder Email</div>
                </div>
              </div>
              <div className="flex mt-1 mb-1 justify-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    onClick={() => handleClickHeartFill(index)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < filledHearts ? "#F47F54" : "none"}
                    stroke={index < filledHearts ? "#F47F54" : "#000"}
                    className="w-6 h-6 cursor-pointer"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                ))}
              </div>
              <textarea
                name="reviewContent"
                rows={10}
                cols={40}
                className="border border-[#F47F54] bg-white text-gray-900 px-3 py-2 rounded-md focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white"
              />
              <label
                htmlFor="fileInput"
                className="flex justify-center items-center gap-2 border border-gray-300 rounded-full py-2 px-4 cursor-pointer hover:bg-gray-200 transition duration-300"
              >
                <Image
                  className="w-4 h-4"
                  src="/cameraIcon.svg"
                  alt="camera icon"
                  width={24}
                  height={24}
                />
                <span className="flex justify-center">Add Photos</span>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="image/*"
                  multiple
                />
              </label>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsLandlordContractModalOpen(false)}
                  className="mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsLandlordContractModalOpen(false);
                    setIsMessageModalOpen(true);
                  }}
                  className="mt-10 text-sm px-5 py-2.5 me-2 mb-2 bg-orange-500 text-white border border-transparent rounded-lg font-medium focus:outline-none hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-500"
                >
                  Post
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {isLandlordCancelModalOpen && user?.type === "landlord" && (
        <Dialog
          isOpen={isLandlordCancelModalOpen}
          onClose={() => setIsLandlordCancelModalOpen(false)}
        >
          <DialogHeader
            title={`Do you not want to write a review for ${selectedMockup[index].name}?`}
          />
          <DialogContent>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsLandlordCancelModalOpen(false)}
                className="mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setIsLandlordCancelModalOpen(false)}
                className="mt-10 text-sm px-5 py-2.5 me-2 mb-2 bg-orange-500 text-white border border-transparent rounded-lg font-medium focus:outline-none hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-500"
              >
                Confirm
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {isMessageModalOpen && (
        <Dialog
          isOpen={isMessageModalOpen}
          onClose={() => setIsMessageModalOpen(false)}
        >
          <DialogContent>
            <p className="flex justify-center">You are done!</p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setIsMessageModalOpen(true);
                  setIsLandlordCancelModalOpen(false);
                }}
                className="ml-1 mt-10 text-sm px-5 py-2.5 me-2 mb-2 bg-orange-500 text-white border border-transparent rounded-lg font-medium focus:outline-none hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-500"
              >
                Confirm
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </UserLayout>
  );
}
