'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
  return (
    <motion.section
      className="hero relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/assets/images/hero.webp"
        alt="Grill ambiance"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bienvenue chez Grill & Burgers
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          L&apos;expérience ultime du burger gourmet et de la viande grillée
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Découvrez notre menu</Button>
        </motion.div>
      </div>
    </motion.section>
  )
}