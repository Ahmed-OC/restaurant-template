'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { menuItems } from '@/data/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuHero from '@/components/menu/MenuHero'

export default function FullMenu() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <MenuHero />
      <main className="container mx-auto px-4 py-12 mt-20">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Notre Menu Complet
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-card text-card-foreground">
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
                  <h2 className="text-xl font-semibold mb-2 text-primary">{item.name}</h2>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Commander
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}