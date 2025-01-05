import React from "react";
import Image from "next/image";

type PropType = {
  selected: boolean;
  path: string;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = ({ selected, path, onClick }) => {
  return (
    <div
      className={"embla_thumbs__slide".concat(
        selected ? " embla_thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla_thumbs__slide__number"
      >
        <Image src={path} alt="" fill className="object-cover" />
      </button>
    </div>
  );
};
