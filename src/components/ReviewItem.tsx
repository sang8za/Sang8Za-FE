import { Heart } from "./ui/Heart";

export interface ReviewItemProps {
  writer?: string;
  title?: string;
  body?: string;
  point?: number; // max5
}

export const reviewMock = [
  {
    id: 1,
    writer: "test1",
    title: "The Perfect Landlord!",
    body: "Very friendly and responds quickly. Maintenance was handled promptly.",
    point: 10,
  },
  {
    id: 2,
    writer: "test2",
    title: "Great Living Experience",
    body: "Had a comfortable stay throughout the lease period without any major issues.",
    point: 8,
  },
  {
    id: 3,
    writer: "test3",
    title: "Slow Response Time",
    body: "I requested repairs multiple times, but it took a long time to be resolved.",
    point: 4,
  },
  {
    id: 4,
    writer: "test4",
    title: "Uncooperative with Issue Resolution",
    body: "I requested a repair for a broken boiler, but it took weeks to get fixed.",
    point: 3,
  },
];

export function ReviewItem({ title, writer, body, point }: ReviewItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h3 className="text-lg">{writer}</h3>
        <Heart point={point ?? 0} />
      </div>
      <p>{body}</p>
    </div>
  );
}
