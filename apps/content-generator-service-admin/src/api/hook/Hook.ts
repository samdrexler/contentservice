import { Script } from "../script/Script";

export type Hook = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  scripts?: Array<Script>;
};
