'use client'

import { motion } from 'framer-motion'
import { specialties } from '@/data/data'
import { Specialty } from '@/types/landing.types'

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Nos Spécialités
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty: Specialty, index: number) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-primary text-primary-foreground rounded-full p-4 inline-block mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <specialty.icon className="h-12 w-12" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
              <p className="text-sm text-muted-foreground">{specialty.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}