import type Project from "./Project";

export default interface User {
  id: string;
  fullName: string;
  projects: Project[];
}
