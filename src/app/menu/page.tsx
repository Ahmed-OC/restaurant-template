import { menuItems } from '@/data/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuHero from '@/components/menu/MenuHero'
import MenuSection from '@/components/menu/MenuSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Grill & Burgers template - menu",
  description: "Template for a restaurant website",
};


export default function FullMenu() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <MenuHero />
      <div className="container mx-auto px-4 py-12 mt-10">
        <MenuSection menuItems={menuItems} />
      </div>

      <Footer />
    </main>
  )
}