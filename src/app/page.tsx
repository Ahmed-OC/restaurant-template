'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Beef, Flame, Clock, Award, Utensils, Sandwich, Beer } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BurgerRestaurantLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const headerBackground = useTransform(scrollY, [0, 50], ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)'])
  const headerShadow = useTransform(scrollY, [0, 50], ['none', '0 2px 4px rgba(0,0,0,0.1)'])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const specialties = [
    { icon: Beef, title: 'Viande de qualité', description: 'Bœuf 100% pur muscle' },
    { icon: Flame, title: 'Grillé à la perfection', description: 'Cuisson sur flamme vive' },
    { icon: Sandwich, title: 'Burgers gourmets', description: 'Recettes originales' },
  ]

  return (
    <div className="min-h-screen bg-[#1A0F0F] text-[#F5E6D3]">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-colors duration-300"
        style={{ backgroundColor: headerBackground, boxShadow: headerShadow }}
      >
        <nav className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Grill & Burgers</Link>
          <div className="space-x-4">
            <Link href="#specialties" className="hover:text-[#FF6B35] transition-colors">Spécialités</Link>
            <Link href="#menu" className="hover:text-[#FF6B35] transition-colors">Menu</Link>
            <Link href="#about" className="hover:text-[#FF6B35] transition-colors">À propos</Link>
            <Link href="#contact" className="hover:text-[#FF6B35] transition-colors">Contact</Link>
          </div>
        </nav>
      </motion.header>

      <motion.section
        className="hero relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Grill ambiance"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
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
            <Button className="bg-[#FF6B35] text-white hover:bg-[#FF8C61]">Réserver une table</Button>
          </motion.div>
        </div>
      </motion.section>

      <section id="specialties" className="py-20 bg-[#2D1A1A]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-[#FF6B35]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nos Spécialités
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-[#FF6B35] text-white rounded-full p-4 inline-block mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <specialty.icon className="h-12 w-12" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
                <p className="text-sm text-[#F5E6D3]">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 relative overflow-hidden bg-[#1A0F0F]">
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
            className="text-4xl font-bold text-center mb-12 text-[#FF6B35]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Découvrez Notre Menu
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Classic Burger', description: 'Notre burger signature avec steak de bœuf juteux, cheddar fondant, et sauce secrète.', price: '12€' },
              { name: 'Côte de Bœuf', description: 'Côte de bœuf grillée à la perfection, servie avec ses pommes de terre rôties.', price: '28€' },
              { name: 'BBQ Ribs', description: 'Travers de porc caramélisés, nappés de notre sauce BBQ maison.', price: '18€' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-[#2D1A1A] text-[#F5E6D3] border-[#FF6B35]">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={`/placeholder.svg?height=300&width=400`}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-[#FF6B35]">{item.name}</h3>
                    <p className="text-[#F5E6D3] mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#FF6B35]">{item.price}</span>
                      <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-colors">
                        Commander
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-[#2D1A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FF6B35]">Nos Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Beef, title: 'Viande de qualité' },
              { icon: Flame, title: 'Grillé à la perfection' },
              { icon: Clock, title: 'Service rapide' },
              { icon: Award, title: 'Primé' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="mx-auto mb-4 h-12 w-12 text-[#FF6B35]" />
                <h3 className="text-xl font-semibold mb-2 text-[#F5E6D3]">{item.title}</h3>
                <p className="text-sm text-[#F5E6D3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A0F0F]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FF6B35]">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Sophie L.', comment: 'Les meilleurs burgers que j\'ai jamais goûtés. La viande est tellement juteuse !' },
              { name: 'Thomas M.', comment: 'L\'ambiance est géniale et les côtes de bœuf sont à tomber. Je recommande vivement !' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#2D1A1A] border-[#FF6B35]">
                  <CardContent className="p-6">
                    <p className="mb-4 italic text-[#F5E6D3]">&quot;{item.comment}&quot;</p>
                    <p className="font-semibold text-[#FF6B35]">{item.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#1A0F0F] text-[#F5E6D3] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#FF6B35]">Grill & Burgers</h3>
              <p>123 Rue de la Viande<br />75000 Paris, France</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#FF6B35]">Heures d&apos;ouverture</h3>
              <p>Lun - Dim: 11h30 - 23h00</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#FF6B35]">Contact</h3>
              <p>Téléphone: +33 1 23 45 67 89<br />Email: info@grillandburgers.com</p>
            </div>
          </div>
          <Separator className="my-8 bg-[#FF6B35]/20" />
          <p className="text-center text-sm">© 2023 Grill & Burgers. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}