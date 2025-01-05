export type UserRole = "tenant" | "landlord";
export interface UserProfile {
  id: number;
  name: string;
  type: UserRole;
  image_url: string;
}
