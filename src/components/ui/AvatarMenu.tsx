import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useState, useRef } from "react";

export default function AvatarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  const menuItems = [
    { path: "/profile", label: "User Profile" },
    { path: "/profile/reviews", label: "Review List" },
    { path: "/profile/contracts", label: "History" },
  ];

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* 아바타 아이콘 */}
      <div
        className={`w-7 h-7 rounded-full 
          ${user?.type === "tenant" ? `bg-orange-300` : `bg-pink-300`} 
           cursor-pointer`}
        onMouseEnter={() => setIsOpen(true)}
      ></div>

      {/* 드롭다운 메뉴 */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg 
          transition-all duration-300 transform 
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul className="py-2">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} passHref>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer list-none">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
