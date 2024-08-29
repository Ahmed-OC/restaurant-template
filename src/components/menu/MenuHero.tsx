'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MenuHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/images/menuHero.webp"
        alt="Menu background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Notre Menu
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Découvrez nos délicieuses grillades et burgers gourmets
        </motion.p>
      </div>
    </section>
  )
}