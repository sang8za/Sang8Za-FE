import { Separator } from "./ui/separator";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { ReviewItem, reviewMock } from "./ReviewItem";
import { TenantDetail } from "@/mock/loginData";
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
  mockupData: TenantDetail[];
  extraProps?: React.ReactNode;
}

export default function LandlordMatchingContent({
  currentIndex,
  mockupData,
  extraProps,
}: MatchingContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditFilter, setIsEditFilter] = useState(false);
  const auth = useContext(AuthContext);

  const options = [
    { value: "private", label: "Private" },
    { value: "petsOkay", label: "Pets Okay" },
    { value: "furnished", label: "Furnished" },
  ];

  const ageRanges = [
    { id: "age-any", label: "Any" },
    { id: "age-under-24", label: "Under 24" },
    { id: "age-24-30", label: "24-30" },
    { id: "age-31-35", label: "31-35" },
    { id: "age-36-40", label: "36-40" },
    { id: "age-41-45", label: "41-45" },
    { id: "age-46-50", label: "46-50" },
    { id: "age-51-plus", label: "51+" },
  ];

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
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="flex flex-col w-1/3 gap-5">
                <p>Sex</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center">
                    <input
                      id="sex-any"
                      type="radio"
                      value="any"
                      name="sex"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="sex-any"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Any
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="sex-male"
                      type="radio"
                      value="male"
                      name="sex"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="sex-male"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="sex-female"
                      type="radio"
                      value="female"
                      name="sex"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="sex-female"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-2/3 gap-5">
                <div>Age Range</div>
                <div className="grid grid-cols-3 gap-4">
                  {ageRanges.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        id={option.id}
                        type="radio"
                        value={option.label.toLowerCase().replace(" ", "-")}
                        name="age-range"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={option.id}
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-100 gap-5 mt-5">
            <div>Status</div>
            <div className="flex align-center gap-2">
              <input
                id="status-any"
                type="radio"
                value="any"
                name="status"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="status-any"
                className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Any
              </label>
              <input
                id="status-students"
                type="radio"
                value="students"
                name="status"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="status-students"
                className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Students
              </label>
              <input
                id="status-professional"
                type="radio"
                value="professional"
                name="status"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="status-professional"
                className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Professional
              </label>
              <input
                id="status-others"
                type="radio"
                value="others"
                name="status"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="status-others"
                className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Others
              </label>
            </div>
          </div>

          <div className="flex flex-col w-100 gap-5 mt-5">
            <div>Property</div>
            <CheckboxGroup options={options} />
          </div>
          <div className="flex flex-col w-100 gap-5 mt-5">
            <div>Tendency</div>
            <div className="flex align-center gap-2">
              <input
                id="tendency-any"
                type="radio"
                value="any"
                name="tendency"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="tendency-any"
                className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Any
              </label>
              <input
                id="tendency-extroverted"
                type="radio"
                value="extroverted"
                name="tendency"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="tendency-extroverted"
                className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Extroverted
              </label>
              <input
                id="tendency-introverted"
                type="radio"
                value="introverted"
                name="tendency"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="tendency-introverted"
                className="mr-2 ml-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Introverted
              </label>
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
            <h1 className="h1">{mockupData[currentIndex].name}</h1>
            <div className="flex gap-4">
              <span className="text-xl font-semibold">
                {mockupData[currentIndex].age}
              </span>
              <span className="text-xl font-semibold">
                {mockupData[currentIndex].gender}
              </span>
              <span className="text-xl font-semibold">
                {mockupData[currentIndex].date_of_birth}
              </span>
            </div>
          </div>
          <div>
            <span className="">{mockupData[currentIndex].date}</span>
          </div>
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
        <section className="w-full flex flex-col">
          <h1 className="h1">Bio</h1>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded
                ? "max-h-[500px] opacity-100 translate-y-0"
                : "max-h-24 translate-y-1"
            }`}
          >
            <p>{mockupData[currentIndex].bio}</p>
          </div>
          <button
            className="text-sm mt-10 py-2 transition-opacity duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "view less ▲" : "view more ▼"}
          </button>
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
