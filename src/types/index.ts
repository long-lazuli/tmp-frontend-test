export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  email: string;
  subscriptions: SubscriptionRight[];
}

export interface Newsletter {
  id: string;
  image: string;
  title: string;
  description: string;
  site: Site;
  subscriptions: SubscriptionRight[];
}

export type Gender = "M" | "F";

export type Site = "DEN" | "DAN" | "LAN" | "SAN";

export type SubscriptionRight = "RIGHT_1" | "RIGHT_2";
