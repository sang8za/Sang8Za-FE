import { Separator } from "./ui/separator";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { ReviewItem, reviewMock } from "./ReviewItem";
import { PropertyDetail } from "@/mock/loginData";
import { useState, useContext } from "react";
import {
  Filter,
  FilterTrigger,
  FilterContent,
} from "@/components/ui/FilterModal";
import CheckboxGroup from "./ui/CheckboxGroup";
import { AuthContext } from "@/context/AuthContext";

interface MatchingContentProps {
  currentIndex: number;
  mockupData: PropertyDetail[];
  extraProps?: React.ReactNode;
}

export default function UserMatchingContent({
  currentIndex,
  mockupData,
  extraProps,
}: MatchingContentProps) {
  const [isEditFilter, setIsEditFilter] = useState(false);
  const auth = useContext(AuthContext);
  const options = [
    { value: "private", label: "Private" },
    { value: "petsOkay", label: "Pets Okay" },
    { value: "furnished", label: "Furnished" },
  ];

  const handleFilterClick = () => {
    setIsEditFilter(true);
  };

  const handleSave = () => {
    // handle saving
    setIsEditFilter(false);
  };

  const handleAllClear = () => {
    // handle clearing all inputs
    setIsEditFilter(false);
  };

  return (
    <div className="max-w-custom-sm overflow-hidden">
      <FilterTrigger onOpen={() => setIsEditFilter(true)}>
        <img src="/filter.svg" alt="logo" width={24} height={20} />
        Filter
      </FilterTrigger>

      <Filter isOpen={isEditFilter} onClose={() => setIsEditFilter(false)}>
        <FilterContent>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col w-100 gap-5">
              <div>Housing Type</div>
              <div className="flex gap-2">
                <input
                  id="housing-any"
                  type="radio"
                  value=""
                  name="housing"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="housing-any"
                  className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Any
                </label>
                <input
                  id="housing-apartment"
                  type="radio"
                  value=""
                  name="housing"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="housing-apartment"
                  className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Apartment
                </label>
                <input
                  id="housing-condo"
                  type="radio"
                  value=""
                  name="housing"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="housing-condo"
                  className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Condo
                </label>
                <input
                  id="housing-house"
                  type="radio"
                  value=""
                  name="housing"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="housing-house"
                  className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  House
                </label>
                <input
                  id="housing-townhouse"
                  type="radio"
                  value=""
                  name="housing"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="housing-townhouse"
                  className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Townhouse
                </label>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col w-2/3 gap-5">
                <div>Price Range</div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <input
                      id="price-any"
                      type="radio"
                      value=""
                      name="price"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="price-any"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Any
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-300-900"
                      type="radio"
                      value=""
                      name="price"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="price-300-900"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      $300 - $900
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-900-1200"
                      type="radio"
                      value=""
                      name="price"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="price-900-1200"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      $900 - $1.2k
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-1200-1500"
                      type="radio"
                      value=""
                      name="price"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="price-1200-1500"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      $1.2k - $1.5k
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-1500-1800"
                      type="radio"
                      value=""
                      name="price"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="price-1500-1800"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      $1.5k - $1.8k
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-1800-2100"
                      type="radio"
                      value=""
                      name="price"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="price-1800-2100"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      $1.8k - $2.1k
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="price-2100"
                      type="radio"
                      value=""
                      name="price"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="price-2100"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      $2.1k
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-1/3 gap-5">
                <div>
                  <p className="mt-6">Distance From Me</p>
                  <div className="flex items-baseline">
                    <input
                      type="text"
                      className="mt-2 w-[54px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <p className="ml-2">km</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-100 gap-5">
              <div>Park</div>
              <div className="flex align-center">
                <input
                  id="park-any"
                  type="radio"
                  value=""
                  name="park"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="park-any"
                  className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Any
                </label>
                <input
                  id="park-attached"
                  type="radio"
                  value=""
                  name="park"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="park-attached"
                  className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Attached Garage
                </label>
                <input
                  id="park-detached"
                  type="radio"
                  value=""
                  name="park"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="park-detached"
                  className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Detached Garage
                </label>
                <input
                  id="park-none"
                  type="radio"
                  value=""
                  name="park"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="park-none"
                  className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No Garage
                </label>
              </div>
            </div>

            <div className="flex flex-col w-100 gap-5">
              <div>Property</div>
              <CheckboxGroup options={options} />
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => handleSave()}
              className="mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              All Clear
            </button>
            <button
              type="button"
              onClick={() => handleAllClear()}
              className="mt-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-orange-500 bg-white border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-300"
            >
              Save
            </button>
          </div>
        </FilterContent>
      </Filter>
      <div className="flex flex-col items-center w-full">
        <section>
          <EmblaCarousel slides={mockupData[currentIndex].photo_url} />
        </section>

        {/* extraButton이 존재하면 렌더링 */}
        {extraProps && <section className="w-full">{extraProps}</section>}

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
