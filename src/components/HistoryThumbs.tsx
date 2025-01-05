import { Heart } from "./ui/Heart";

export interface HistoryThumbsProps {
  label: string;
  point: number;
  review: boolean;
}

export default function HistoryThumbsItem({
  label,
  point,
  review,
}: HistoryThumbsProps) {
  return (
    <div className="p-3">
      <div className="w-16 h-16 relative">
        <div className="absolute right-0 top-0">
          {review ? <div className="w-4 h-4 bg-primary rounded-full" /> : ""}
        </div>
        <div className="w-full h-full bg-gray-200 rounded-full" />
      </div>
      <div className="mt-1 flex justify-between">
        <Heart point={point} size={10} fontSize="text-xs" />
        <span className="text-xs">{label}</span>
      </div>
    </div>
  );
}
