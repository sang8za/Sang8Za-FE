export type UserRole = "user" | "landlord";
export interface UserProfile {
  id: number;
  name: string;
  role: UserRole;
  phone_number: string;
}
