import { useState } from "react";
import MatchingImage from "./MatchingImage";
import { Separator } from "./ui/separator";

export default function MatchingItem() {
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
    <div className="max-w-custom-md flex justify-between mx-auto">
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
          <div className="my-5">
            <section className="flex flex-col section">
              <div className="flex justify-between py-5">
                <h1 className="h1">{mockupData[currentIndex].title}</h1>
                <h3 className="text-xl">${mockupData[currentIndex].price}</h3>
              </div>
              <span className="text-xl">{mockupData[currentIndex].city}</span>
            </section>
            <section className="section">
              <ul className="filter_container">
                {items.map((item) => (
                  <li key={item} className="filter__item">
                    No Smoking
                  </li>
                ))}
              </ul>
            </section>
            <Separator />
            <section>
              <h1 className="h1">Reviews</h1>
              <div>
                {items.map((item) => (
                  <div key={item} className="">
                    <p>Elias Hong</p>
                    <p>완벽한 집주인!</p>
                    <span>
                      매우 친절하고 응답이 빨라요. 유지보수도 신속하게 처리해
                      주셨습니다.
                    </span>
                    {items.length - 1 === item ? "" : <Separator />}
                  </div>
                ))}
              </div>
              <p className="text-center mt-10 py-2">view more {">"}</p>
            </section>
            {/** end review */}
            <Separator />
            <section>
              <h1 className="h1">Location</h1>
              <div className="w-[600px] h-[600px] bg-gray-200"></div>
            </section>
            {/** end Location */}
            <Separator />
            <section>
              <h1 className="h1">Host</h1>
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
