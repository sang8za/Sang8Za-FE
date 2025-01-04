import Image from "next/image";

interface matchingImageProps {
  path: string;
  title: string;
}

const MatchingImage = ({ path, title }: matchingImageProps) => {
  return (
    <div className="relative w-[620px] h-[620px] bg-primary">
      {/* 이미지 */}
      <Image src={path} alt={title} fill className="object-cover" />
    </div>
  );
};

export default MatchingImage;
