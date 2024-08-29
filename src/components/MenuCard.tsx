// components/MenuCard.tsx

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MenuItem } from '@/types/menu.types'

interface MenuCardProps {
  item: MenuItem;
  showOrderButton?: boolean;
}

export default function MenuCard({ item, showOrderButton = false }: MenuCardProps) {
  return (
    <Card className="overflow-hidden bg-card text-card-foreground h-full">
      <CardContent className="p-6">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={item.link}
            alt={item.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 text-primary">{item.name}</h3>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">{item.price}</span>
          {showOrderButton && (
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Commander
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}