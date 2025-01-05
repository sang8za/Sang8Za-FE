import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center text-center p-3 bottom-0 w-full">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image src="/logo.svg" alt="logo" width={93} height={70} />
        <div className="px-6 text-sm hover:text-blue-800">
          <Link href="/about">About</Link>
        </div>
        <span className="text-xs">©Sang8Za. ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
