import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options }) => {
  const auth = useContext(AuthContext);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, boolean>
  >(
    options.reduce((acc, option) => {
      acc[option.value] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleCheckboxChange = (optionValue: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [optionValue]: !prevState[optionValue],
    }));
  };

  return (
    <ul className="flex flex-col sm:flex-row">
      {options.map((option) => (
        <li
          key={option.value}
          className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border rounded-lg text-gray-800 sm:mt-0 sm:ms-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
        >
          <div className="relative flex items-start w-full">
            <div className="flex items-center h-5">
              {/* Hidden Checkbox */}
              <input
                id={`checkbox-${option.value}`}
                type="checkbox"
                className="peer hidden"
                checked={selectedOptions[option.value]}
                onChange={() => handleCheckboxChange(option.value)}
              />
              <span className="w-5 h-5 border-2 border-gray-400 rounded-full inline-block peer-checked:border-[#F47F54] peer-checked:bg-[#F47F54]"></span>
            </div>
            <label
              htmlFor={`checkbox-${option.value}`}
              className="ms-3.5 block w-full text-sm text-gray-600 dark:text-neutral-500 peer-checked:text-[#F47F54]"
            >
              {option.label}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxGroup;
