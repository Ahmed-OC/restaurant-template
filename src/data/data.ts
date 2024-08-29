import { Beef, Flame, Sandwich, Clock, Award } from 'lucide-react';
import { Specialty, Advantage, Testimonial } from '@/types/landing.types';
import { MenuItem } from '@/types/menu.types';

export const specialties: Specialty[] = [
  { icon: Beef, title: 'Viande de qualité', description: 'Bœuf 100% pur muscle' },
  { icon: Flame, title: 'Grillé à la perfection', description: 'Cuisson sur flamme vive' },
  { icon: Sandwich, title: 'Burgers gourmets', description: 'Recettes originales' },
];

export const menuItems: MenuItem[] = [
  { name: 'Classic Burger', description: 'Notre burger signature avec steak de bœuf juteux, cheddar fondant, et sauce secrète.', price: '12€', link: '/assets/images/burger.webp', category: 'Burgers' },
  { name: 'Côte de Bœuf', description: 'Côte de bœuf grillée à la perfection, servie avec ses pommes de terre rôties.', price: '28€', link: '/assets/images/boeuf.webp', category: 'Grillades' },
  { name: 'BBQ Ribs', description: 'Travers de porc caramélisés, nappés de notre sauce BBQ maison.', price: '18€', link: '/assets/images/ribs.webp', category: 'Grillades' },
  { name: 'Salade César', description: 'Salade romaine, croûtons, parmesan, et pourpier, le tout assaisonné de notre sauce César.', price: '10€', link: '/assets/images/salad.webp', category: 'Salades' },
  { name: 'Frites Maison', description: 'Frites croustillantes, assaisonnées à la fleur de sel.', price: '5€', link: '/assets/images/fries.webp', category: 'Sides' },
  { name: 'Cheesecake', description: 'Cheesecake New-Yorkais, servi avec un coulis de fruits rouges.', price: '8€', link: '/assets/images/cheesecake.webp', category: 'Desserts' },
];

export const advantages: Advantage[] = [
  { icon: Beef, title: 'Viande de qualité' },
  { icon: Flame, title: 'Grillé à la perfection' },
  { icon: Clock, title: 'Service rapide' },
  { icon: Award, title: 'Primé' },
];

export const testimonials: Testimonial[] = [
  { name: 'Sophie L.', comment: 'Les meilleurs burgers que j\'ai jamais goûtés. La viande est tellement juteuse !' },
  { name: 'Thomas M.', comment: 'L\'ambiance est géniale et les côtes de bœuf sont à tomber. Je recommande vivement !' },
];