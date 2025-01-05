import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white-200 p-4 bottom-0 w-full">
      <div className="flex py-4 justify-center items-center">
        <Image src="/logo.svg" alt="logo" width={70} height={28} />
        {/* <div className="px-6 text-sm hover:text-blue-800"> */}
        {/* <Link href="/about">About</Link> */}
        {/* </div> */}
      </div>
      {/* <span className="text-xs">©Sang8Za. ALL RIGHTS RESERVED</span> */}
    </footer>
  );
}
