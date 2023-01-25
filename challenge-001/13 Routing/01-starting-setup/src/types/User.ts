import type Role from "./Role";

export interface User {
  id: string;
  fullName: string;
  role: Role;
}
