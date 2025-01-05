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

export interface PropertyDetail {
  photo_url: string[];
  title: string;
  city: string;
  price: number;
  preference: string[];
}

export const propertyMockup: PropertyDetail[] = [
  {
    photo_url: ["next.svg", "file.svg"],
    title: "Home in Vancouver",
    city: "120 Garden dr, Vancouver, BC, Canada",
    preference: ["No Smoking", "Pet Friendly", "Dog OK"],
    price: 1500,
  },
  {
    photo_url: ["globe.svg", "logo.svg"],
    title: "2br - Private room with bathroom",
    city: "Downtown",
    preference: ["No Smoking", "Pet Friendly", "Cat OK", "Dog OK"],
    price: 1000,
  },
  {
    photo_url: ["window.svg", "next.svg"],
    title: "Furnished Upstair Quite room",
    city: "Port Moody",
    preference: ["No Smoking", "Fish OK", "Dog OK"],
    price: 900,
  },
];

export interface TenantDetail {
  photo_url: string[];
  name: string;
  age: string;
  gender: string;
  date_of_birth: string;
  date: string;
  preference: string[];
  bio: string;
}

export const tenantMockup: TenantDetail[] = [
  {
    photo_url: ["next.svg", "file.svg"],
    name: "Elias Hong",
    age: "34",
    gender: "M",
    date_of_birth: "7.22",
    date: "25/01/04 - 25/02/28",
    preference: ["No Smoking", "Fish OK", "Dog OK"],
    bio: "Lorem ipsum dolor sit amet consectetur. In aliquet nisl facilisis tellus semper vivamus lectus. Condimentum enim aliquam fermentum commodo. Quam massa viverra orci aenean in egestas velit volutpat. Sit accumsan aliquam orci augue et sit. Auctor quisque gravida cras sit scelerisque quam diam. Porttitor sit suspendisse odio augue tincidunt est amet eleifend scelerisque. Pulvinar nec malesuada sed nisl est sed metus ornare vitae. Nulla elit vestibulum in sapien est. Ultricies cum purus consectetur nunc. Arcu sit et malesuada lobortis ante et ullamcorper aliquam. Purus egestas vitae viverra id cras. At egestas metus nisl quam arcu nunc habitant lectus aliquam. A nunc pulvinar nec diam facilisis in in. Vehicula tristique habitasse vulputate viverra. Sed bibendum morbi est ornare non odio elementum mauris tempor. Pretium risus elit tortor lectus ut sed nibh pellentesque. Phasellus elit leo justo faucibus sollicitudin neque. In sapien eleifend nunc tincidunt netus. Duis ut quam sed mattis tellus.",
  },
];
