import { Category } from "./global.types";

export interface MenuItem {
  link: string;
  name: string;
  description: string;
  price: string;
  category: Category;
}
