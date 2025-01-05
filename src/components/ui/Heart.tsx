import Image from "next/image";

interface HeartProps {
  point: number;
  size: number;
  fontSize?: string;
}

const Heart = ({ point = 0, size = 20, fontSize }: HeartProps) => {
  return (
    <div className="inline-flex items-center">
      <Image src="/heart.svg" width={size} height={size} alt="heart" />
      <span className={`ml-1 ${fontSize}`}>{point}</span>
    </div>
  );
};

export { Heart };
