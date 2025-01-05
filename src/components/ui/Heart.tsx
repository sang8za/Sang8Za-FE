import Image from "next/image";

interface HeartProps {
  point: number;
}

const Heart = ({ point = 0 }: HeartProps) => {
  return (
    <div className="inline-flex items-center">
      <Image src="/heart.svg" width={20} height={20} alt="heart" />
      <span className="ml-1">{point}</span>
    </div>
  );
};

export { Heart };
