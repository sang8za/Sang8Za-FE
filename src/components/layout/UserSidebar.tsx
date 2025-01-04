import Link from "next/link";
import { useRouter } from "next/router";

export default function UserSidebar() {
  const router = useRouter();

  const menuItems = [
    { path: "/profile", label: "User Profile" },
    { path: "/profile/reviews", label: "Review List" },
    { path: "/profile/contracts", label: "History" },
  ];

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">My Page</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <span
                className={`block p-2 rounded cursor-pointer ${
                  router.pathname === item.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
