'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

import { Category } from '@/types/global.types'

interface FilterProps {
  onFilterChange: (category: Category) => void
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous')

  const categories: Category[] = ['Tous', 'Burgers', 'Grillades', 'Sides', 'Desserts']

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {categories.map((category) => (
        <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            } hover:bg-primary/90 hover:text-primary-foreground`}
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </div>
  )
}