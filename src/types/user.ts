export type UserType = "tenant" | "landlord";
export interface UserProfile {
  id: number;
  name: string;
  type: UserType;
  image_url: string;
}
