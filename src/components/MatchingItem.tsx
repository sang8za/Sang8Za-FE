import { useState } from "react";
import MatchingImage from "./MatchingImage";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { useAuth } from "@/hooks/useAuth";

export default function MatchingItem() {
  const { user, logout } = useAuth();

  const mockupData = [
    {
      photo_url: ["next.svg", "file.svg"],
      title: "Home in Vancouver",
      city: "120 Garden dr, Vancouver, BC, Canada",
      price: 1500,
    },
    {
      photo_url: ["globe.svg", "vercel.svg"],
      title: "2br - Private room with bathroom",
      city: "Downtown",
      price: 1000,
    },
    {
      photo_url: ["window.svg", "next.svg"],
      title: "Furnished Upstair Quite room",
      city: "Port Moody",
      price: 900,
    },
  ];

  const [mock, setMock] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mockupData.length);
    setCurrentImageIndex(0);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mockupData.length - 1 : prevIndex - 1
    );
    setCurrentImageIndex(0);
  };

  const count = 3; // 반복 개수 (수동 설정)
  const items = Array.from({ length: count }, (_, index) => index);

  return (
    <div className="max-w-custom-md flex items-center justify-between mx-auto">
      <div>
        <button onClick={prevItem}>Dislike</button>
      </div>
      <div className="max-w-custom-sm mx-auto flex flex-col items-center">
        <div className="">
          <MatchingImage
            path={mockupData[currentIndex].photo_url[currentImageIndex]}
            title={mockupData[currentIndex].title}
          />
          <div className="flex py-3 gap-3">
            <div className="w-12 h-12 bg-primary"></div>
            <div className="w-12 h-12 bg-primary"></div>
            <div className="w-12 h-12 bg-primary"></div>
            <div className="w-12 h-12 bg-primary"></div>
            <div className="w-12 h-12 bg-primary"></div>
          </div>
          <div className="">
            <section className="flex flex-col">
              <h1 className="text-2xl font-bold">
                {mockupData[currentIndex].title}
              </h1>
              <span className="text-xl">{mockupData[currentIndex].city}</span>
              <span>${mockupData[currentIndex].price}</span>
            </section>
            <section className="border-b py-6 mb-6">
              <ul className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 inline-flex rounded-full border "
                  >
                    No Smoking
                  </li>
                ))}
                <li className="px-4 py-2 inline-flex rounded-full border ">
                  No Pets
                </li>
                <li className="px-4 py-2 inline-flex rounded-full border ">
                  Party
                </li>
                <li className="px-4 py-2 inline-flex rounded-full border ">
                  No Pets
                </li>
                <li className="px-4 py-2 inline-flex rounded-full border ">
                  No Smoking
                </li>
                <li className="px-4 py-2 inline-flex rounded-full border ">
                  Party
                </li>
                <li className="px-4 py-2 inline-flex rounded-full border ">
                  Party
                </li>
                <li className="px-4 py-2 inline-flex rounded-full border ">
                  Party
                </li>
                <li className="px-4 py-2 inline-flex rounded-full border ">
                  Party
                </li>
              </ul>
            </section>
            <section className="border-b py-6 mb-6">
              <h1 className="text-2xl font-bold">Reviews</h1>
              <div>
                {items.map((item) => (
                  <div key={item} className="">
                    <p>Elias Hong</p>
                    <p>완벽한 집주인!</p>
                    <span>
                      매우 친절하고 응답이 빨라요. 유지보수도 신속하게 처리해
                      주셨습니다.
                    </span>
                  </div>
                ))}
              </div>
              <p>view more {">"}</p>
            </section>
            {/** end review */}
            <section className="border-b py-6 mb-6">
              <h1 className="text-2xl font-bold">Location</h1>
              <div className="w-[600px] h-[600px] bg-gray-200"></div>
            </section>
            {/** end Location */}
            <section>
              <h1 className="text-2xl font-bold">Host</h1>
              <div className="rounded-md shadow-full m-6 p-6 flex justify-between">
                <div>photo</div>
                <div className="flex flex-col">
                  <p>8.5</p>
                  <span>Avg Rates</span>
                  <p>300</p>
                  <span>Review</span>
                  <p>??</p>
                  <span>??</span>
                </div>
              </div>
              {/** host box */}
              <p>
                {`Hi, I'm Emily! I've been an Airbnb host for over 3 years. I love
                meeting new people and ensuring they have a comfortable stay.`}
              </p>
              {/** host description */}
            </section>
            {/** end Host */}
          </div>
        </div>
      </div>
      <div>
        <button onClick={nextItem}>Like</button>
      </div>
    </div>
  );
}
