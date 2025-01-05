import { Separator } from "./ui/separator";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { ReviewItem, reviewMock } from "./ReviewItem";
import { PropertyDetail } from "@/mock/loginData";

interface MatchingContentProps {
  currentIndex: number;
  mockupData: PropertyDetail[];
}

export default function UserMatchingContent({
  currentIndex,
  mockupData,
}: MatchingContentProps) {
  return (
    <div className="max-w-custom-sm overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <section>
          <EmblaCarousel slides={mockupData[currentIndex].photo_url} />
        </section>
        <section className="flex flex-col flex-wrap section w-full ">
          <div className="flex justify-between py-5">
            <h1 className="h1">{mockupData[currentIndex].title}</h1>
            <h3 className="text-xl">${mockupData[currentIndex].price}</h3>
          </div>
          <span className="text-xl">{mockupData[currentIndex].city}</span>
        </section>
        <section className="section w-full">
          <ul className="filter_container">
            {mockupData[currentIndex].preference.map((item, index) => (
              <li key={index} className="filter__item">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <Separator />
        <section className="flex flex-col w-full">
          <h1 className="h1">Reviews</h1>
          <div>
            {reviewMock.map((item, index) => (
              <div key={item.id}>
                <ReviewItem
                  writer={item.writer}
                  title={item.title}
                  body={item.body}
                  point={item.point}
                />
                {index !== reviewMock.length - 1 && <Separator />}
              </div>
            ))}
          </div>
          <button className="text-sm mt-10 py-2">view more {">"}</button>
        </section>
        <Separator />
        <section className="w-full">
          <h1 className="h1">Location</h1>
          <div className="w-full h-[300px] bg-gray-200"></div>
        </section>
        <Separator />
        <section>
          <h1 className="h1">Host</h1>
          <div className="rounded-md shadow-full m-6 p-6 flex">
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-36 h-36 bg-orange-300 rounded-full" />
              <h3 className="h2">HostName</h3>
            </div>
            <div className="flex-1 flex flex-col">
              <p className="text-2xl">8.5</p>
              <span className="">Avg Rates</span>
              <Separator />
              <p className="text-2xl">8.5</p>
              <span className="">Avg Rates</span>
              <Separator />
              <p className="text-2xl">8.5</p>
              <span className="">Avg Rates</span>
            </div>
          </div>
          <p className="text-xl">
            {`Hi, I'm Emily! I've been an Airbnb host for over 3 years. I love
              meeting new people and ensuring they have a comfortable stay.`}
          </p>
        </section>
      </div>
    </div>
  );
}
