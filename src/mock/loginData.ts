import { UserRole, UserProfile } from "@/types/user";

export const loginData: Record<UserRole, UserProfile> = {
  tenant: {
    id: 1,
    name: "user",
    type: "tenant",
    image_url: "url1",
  },
  landlord: {
    id: 2,
    name: "god",
    type: "landlord",
    image_url: "url2",
  },
};
