// types/types.ts

import { LucideIcon } from "lucide-react";

export interface Specialty {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Advantage {
  icon: LucideIcon;
  title: string;
}

export interface Testimonial {
  name: string;
  comment: string;
}