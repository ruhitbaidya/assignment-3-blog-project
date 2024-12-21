import { USER_ROLE } from "./user.constant";

export type TUserInterface = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  isBlocked: boolean;
};

export type TRole = keyof typeof USER_ROLE;
