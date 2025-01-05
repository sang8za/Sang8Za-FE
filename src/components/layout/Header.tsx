import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "../ui/separator";

export default function Header() {
  const { user, logout } = useAuth();
  const [isMyReviewOpen, setIsMyReviewOpen] = useState(false);
  const mockupUserReviewData = [
    {
      total_average_rating: 4,
      total_received: 5,
      total_received_average: 3,
      total_written: 4,
      total_written_average: 4,
    },
  ];

  const menuItems = [
    { path: "/profile/history", label: "History" },
    { path: "/profile", label: "User Profile" },
    { path: "/profile/reviews", label: "Review List" },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      {/** left */}
      <div className="flex-1"></div>

      {/** logo */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={93} height={70} />
        </Link>
      </div>

      {/** nav */}
      <nav className="flex gap-5 flex-1 justify-end">
        {user && (
          <div className="flex gap-4 header_menu_container">
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => setIsMyReviewOpen(true)}
            >
              <Image
                className="w-7 h-7"
                src="/orange_heart.svg"
                alt="orange heart icon"
                width={24}
                height={24}
              />
              <text className="text-xl">
                {mockupUserReviewData[0].total_average_rating}
              </text>
            </div>
            <Link key={menuItems[0].path} href={menuItems[0].path} passHref>
              <Image
                className="w-7 h-7"
                src="/history.svg"
                alt="history clock icon"
                width={24}
                height={24}
              />
            </Link>
            <Link key={menuItems[1].path} href={menuItems[1].path} passHref>
              <Image
                className={`w-7 h-7 rounded-full cursor-pointer`}
                src={user.image_url}
                alt="user image icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        )}
      </nav>

      {/* Inline Modal */}
      {isMyReviewOpen && (
        <div className="fixed inset-0 flex items-start justify-end z-50 mt-[65px] ml-[7px]">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-[422px] max-h-[391px] relative left-[-1em]">
            <div className="flex items-center gap-5">
              <button
                onClick={() => setIsMyReviewOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h2 className="text-xl">My Review</h2>
            </div>
            <div className="flex flex-col p-10 gap-5">
              <div>
                <div className="flex justify-center">
                  <div className="flex gap-10 items-end">
                    <p className="text-xl">Total</p>
                    <p className="text-sm">
                      {mockupUserReviewData[0].total_written} Written
                    </p>
                  </div>
                </div>
                <div className="flex mt-4 justify-center">
                  <Image
                    className="w-7 h-7"
                    src="/orange_heart.svg"
                    alt="orange heart icon"
                    width={24}
                    height={24}
                  />
                  <text className="text-xl ml-1">
                    {mockupUserReviewData[0].total_written_average}
                  </text>
                </div>
              </div>
              <Separator className="bg-orange-300" />
              <div>
                <div className="flex justify-center">
                  <div className="flex gap-10  items-end">
                    <p className="text-xl">Total</p>
                    <p className="text-sm">
                      {mockupUserReviewData[0].total_received} Received
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    className="w-7 h-7"
                    src="/orange_heart.svg"
                    alt="orange heart icon"
                    width={24}
                    height={24}
                  />
                  <text className="text-xl ml-1">
                    {mockupUserReviewData[0].total_received_average}
                  </text>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 opacity-30"
            onClick={() => setIsMyReviewOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
}
