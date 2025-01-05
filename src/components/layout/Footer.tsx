import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-white-200 p-4 bottom-0 w-full">
      <div className="flex py-4 justify-center items-center">
        <Image src="/logo.svg" alt="logo" width={70} height={28} />
        {/* <div className="px-6 text-sm hover:text-blue-800"> */}
        {/* <Link href="/about">About</Link> */}
        {/* </div> */}
      </div>
      {/* <span className="text-xs">©Sang8Za. ALL RIGHTS RESERVED</span> */}
=======
    <footer className="flex justify-center items-center text-center p-3 bottom-0 w-full">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image src="/logo.svg" alt="logo" width={93} height={70} />
        <div className="px-6 text-sm hover:text-blue-800">
          <Link href="/about">About</Link>
        </div>
        <span className="text-xs">©Sang8Za. ALL RIGHTS RESERVED</span>
      </div>
>>>>>>> aef8b83f0670fae0b1b9a074d4f5cf1cebfa0765
    </footer>
  );
}
