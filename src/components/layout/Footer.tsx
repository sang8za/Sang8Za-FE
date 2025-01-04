import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-4 bottom-0 w-full">
      <div className="flex py-4">
        <Image src="/next.svg" alt="logo" width={80} height={50} />
        <div className="px-6 text-sm hover:text-blue-800">
          <Link href="/about">About</Link>
        </div>
      </div>
      <span className="text-xs">©Sang8Za. ALL RIGHTS RESERVED</span>
    </footer>
  );
}
