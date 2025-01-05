import InputField from "@/components/ui/InputField";
import UserLayout from "@/components/layout/UserLayout";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const { user, setUser, logout } = useAuth();
  const router = useRouter();

  const [isGender, setIsGender] = useState("");
  const [isBirthday, setIsBirthday] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isWishLocation, setIsWishLocation] = useState("");
  const [isPostalCode, setIsPostalCode] = useState("");
  const [isWishStartDate, setIsWishStartDate] = useState("");
  const [isWishEndDate, setIsWishEndDate] = useState("");
  const [isBio, setIsBio] = useState("");
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) return null;

  const handleEditClick = () => {
    if (isFormDisabled == true) {
      setIsFormDisabled(false);
    } else {
      setIsFormDisabled(true);
    }
  };

  const handleLogOut = () => {
    logout();
  };

  const handleSave = () => {
    // Code to save
  };

  return (
    <UserLayout>
      <div className="flex flex-column">
        <div className="flex items-baseline">
          <Image
            className="mr-2"
            src="/logo.svg"
            alt="logo"
            width={35}
            height={26}
          />{" "}
          <p className="mr-1 text-md">for</p>
          <p className="mr-1 text-xl font-medium"> {user.name} </p>
          <Image
            className="mr-2"
            src="/editIcon.svg"
            alt="edit pencil icon"
            width={21}
            height={20}
            onClick={handleEditClick}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="inline-block mt-[2em]">
          <div className="p-2 bg-orange-50 rounded-full">
            <Image
              className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-500 ring-offset-4 ring-offset-white"
              src={user.image_url}
              alt="user image icon"
              width={178}
              height={178}
            />
          </div>
        </div>
      </div>
      <p className="inline-block mt-[3em] font-medium">Basic Info</p>
      <form>
        <div className="flex flex-column">
          <div className="ml-10 w-1/4">
            <p>Gender</p>
            <p>Birthday</p>
            <p>E-mail</p>
            <p>Wish Location</p>
            <p>Postal Code</p>
            <p>Wish Start Date</p>
            <p>Wish End Date</p>
            <p>Bio</p>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              value={isGender}
              placeholder="Male/Female"
              onChange={(e) => setIsGender(e.target.value)}
              className="block"
              disabled={isFormDisabled}
            />
            <input
              type="date"
              value={isBirthday}
              placeholder="DD/MM/YY"
              onChange={(e) => setIsBirthday(e.target.value)}
              className="block"
              disabled={isFormDisabled}
            />
            <input
              type="text"
              value={isEmail}
              placeholder="example@domain.com"
              onChange={(e) => setIsEmail(e.target.value)}
              className="block"
              disabled={isFormDisabled}
            />
            <input
              type="text"
              value={isWishLocation}
              placeholder="Address"
              onChange={(e) => setIsWishLocation(e.target.value)}
              className="block"
              disabled={isFormDisabled}
            />
            <input
              type="text"
              value={isPostalCode}
              placeholder="Postal Code"
              onChange={(e) => setIsPostalCode(e.target.value)}
              className="block"
              disabled={isFormDisabled}
            />
            <input
              type="date"
              value={isWishStartDate}
              placeholder="DD/MM/YY"
              onChange={(e) => setIsWishStartDate(e.target.value)}
              className="block"
              disabled={isFormDisabled}
            />
            <input
              type="date"
              value={isWishEndDate}
              placeholder="DD/MM/YY"
              onChange={(e) => setIsWishEndDate(e.target.value)}
              className="block"
              disabled={isFormDisabled}
            />{" "}
            <textarea
              value={isBio}
              placeholder="Your bio..."
              onChange={(e) => setIsBio(e.target.value)}
              className="block"
              disabled={isFormDisabled}
            />
          </div>
        </div>
      </form>
      {isFormDisabled && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleLogOut}
            className="mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Log Out
          </button>
        </div>
      )}
      {!isFormDisabled && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSave}
            className="mt-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-orange-500 bg-white border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-300"
          >
            Save
          </button>
        </div>
      )}
    </UserLayout>
  );
}
