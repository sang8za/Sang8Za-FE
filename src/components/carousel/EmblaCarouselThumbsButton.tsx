import React from "react";
import styles from "@/styles/EmblaCarousel.module.css";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = ({ selected, index, onClick }) => {
  return (
    <div
      className={`${styles.embla_thumbs__slide} ${
        selected ? styles.embla_thumbs__slide__selected : ""
      }`}
    >
      <button
        onClick={onClick}
        type="button"
        className={styles.embla_thumbs__slide__number}
      >
        {index + 1}
      </button>
    </div>
  );
};
