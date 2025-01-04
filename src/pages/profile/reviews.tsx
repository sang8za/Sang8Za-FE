import UserLayout from "@/components/layout/UserLayout";

interface reviewData {
  id: number;
  title?: string;
  body?: string;
  point?: number;
}

export default function ProfileReviews() {
  const reviewDummy: reviewData[] = [
    {
      id: 1,
      title: "완벽한 집주인!",
      body: "매우 친절하고 응답이 빨라요. 유지보수도 신속하게 처리해 주셨습니다.",
      point: 10,
    },
    {
      id: 2,
      title: "좋은 거주 경험",
      body: "크게 문제없이 계약 기간 동안 편하게 거주할 수 있었어요.",
      point: 8,
    },
    {
      id: 3,
      title: "대응이 너무 늦어요",
      body: "수리 요청을 몇 번이나 했지만 해결까지 오랜 시간이 걸렸어요.",
      point: 4,
    },
    {
      id: 4,
      title: "문제 해결에 비협조적",
      body: "고장난 보일러 수리를 요청했는데, 몇 주가 지나서야 고쳐졌습니다.",
      point: 3,
    },
  ];

  return (
    <UserLayout>
      <h1 className="text-2xl font-bold">Review List</h1>
      <p>이곳은 리뷰 리스트 페이지입니다.</p>
    </UserLayout>
  );
}
