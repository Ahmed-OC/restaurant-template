'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
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

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-colors duration-300"
      style={{ backgroundColor: headerBackground, boxShadow: headerShadow }}
    >
      <nav className="container text-secondary mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Grill & Burgers</Link>
        <div className="space-x-4">
          <Link href="/menu" className="hover:text-primary transition-colors">Menu</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </nav>
    </motion.header>
  )
}