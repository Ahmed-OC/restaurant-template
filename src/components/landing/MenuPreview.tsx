'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { menuItems } from '@/data/data'
import { MenuItem } from '@/types/menu.types'
import MenuCard from '../MenuCard'

export default function MenuPreview() {
  return (
    <section id="menu" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Menu background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Découvrez Notre Menu
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.slice(0, 3).map((item: MenuItem, index: number) => (
            <MenuCard key={index} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/menu">Voir tout le menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}