import { UserRole, UserProfile } from "@/types/user";

export const loginData: Record<UserRole, UserProfile> = {
  user: {
    id: 1,
    name: "user",
    role: "user",
    phone_number: "00000000000",
  },
  landlord: {
    id: 2,
    name: "god",
    role: "landlord",
    phone_number: "99999999999",
  },
};
