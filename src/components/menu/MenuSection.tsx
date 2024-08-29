// components/MenuSection.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MenuCard from "@/components/MenuCard";
import Filter from "@/components/Filter";
import { MenuItem } from "@/types/menu.types";

interface MenuSectionProps {
  menuItems: MenuItem[];
}

export default function MenuSection({ menuItems }: MenuSectionProps) {
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const handleFilterChange = (category: string) => {
    if (category === "Tous") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === category));
    }
  };

  return (
    <section className="py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Notre Menu Complet
      </motion.h1>
      <Filter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MenuCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
