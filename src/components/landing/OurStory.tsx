'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function OurStory() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Notre Histoire
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/images/history.webp"
              alt="Fondateurs du restaurant"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover max-h-[400px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">De la passion à l&apos;assiette</h3>
            <p className="text-muted-foreground mb-6">
              Fondé en 2010 par les frères Dupont, Grill & Burgers est né d&apos;une passion partagée pour la viande de qualité et les saveurs authentiques. Notre voyage a commencé dans le garage familial, où nous expérimentions des recettes et des techniques de cuisson pour créer le burger parfait.
            </p>
            <p className="text-muted-foreground mb-6">
              Aujourd&apos;hui, notre restaurant est devenu une référence locale pour les amateurs de viande grillée et de burgers gourmets. Nous restons fidèles à notre philosophie : des ingrédients frais, une cuisson maîtrisée et une ambiance chaleureuse.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              En savoir plus
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}