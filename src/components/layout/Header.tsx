import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      {/** left */}
      <div className="flex-1"></div>

      {/** logo */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <Image src="/next.svg" alt="logo" width={150} height={50} />
        </Link>
      </div>

      {/** nav */}
      <nav className="flex gap-4 flex-1 justify-end">
        {user ? (
          <div className="flex gap-4">
            <Link href="/profile">{user.name}의 프로필</Link>
            <button onClick={logout} className="bg-secondary px-4 py-2 rounded">
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="bg-blue-500 px-4 py-2 rounded">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
