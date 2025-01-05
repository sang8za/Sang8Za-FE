import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import AvatarMenu from "../ui/AvatarMenu";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      {/** left */}
      <div className="flex-1"></div>

      {/** logo */}
      <div className="text-2xl font-bold">
        <Link href="/">
<<<<<<< HEAD
          <Image src="/logo.svg" alt="logo" width={70} height={28} />
=======
          <Image src="/logo.svg" alt="logo" width={93} height={70} />
>>>>>>> aef8b83f0670fae0b1b9a074d4f5cf1cebfa0765
        </Link>
      </div>

      {/** nav */}
      <nav className="flex gap-4 flex-1 justify-end">
        {user ? (
          <AvatarMenu />
        ) : (
          <>
            <Link href="/login" className="text-sm p-2">
              Login
            </Link>
            <Link href="/signup" className="text-sm p-2">
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}