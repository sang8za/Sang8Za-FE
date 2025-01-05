import InputField from "@/components/ui/InputField";
import UserLayout from "@/components/layout/UserLayout";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <UserLayout>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">환영합니다, {user.name}님!</h1>
        <h2 className="text-xl text-gray-600">역할: {user.role}</h2>

        <form>
          <input type="hidden" value={user.id} />
          <InputField
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            label={"name"}
            name={"userName"}
          />
          <InputField
            type="text"
            value={user.phone_number}
            onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
            label={"phone number"}
            name={"phoneNumber"}
          />
        </form>
        {user.role === "user" ? (
          <div className="mt-4 p-4 border rounded shadow">
            <h3 className="text-lg font-semibold">📄 User 대시보드</h3>
            <p>거주 이력 및 계약 정보를 확인하세요.</p>
          </div>
        ) : (
          <div className="mt-4 p-4 border rounded shadow">
            <h3 className="text-lg font-semibold">🏡 Landlord 대시보드</h3>
            <p>임대 중인 방의 리뷰 및 계약을 확인하세요.</p>
          </div>
        )}
      </div>
    </UserLayout>
  );
}
