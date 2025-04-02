import { ReactNode } from "react";

export interface ITabs {
  id: number;
  order: number;
  name: string;
  icon: ReactNode;
  url: string | null;
  children?: ITabs;
}