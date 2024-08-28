import Header from '@/components/Header'
import Hero from '@/components/landing/Hero'
import Specialties from '@/components/landing/Specialities'
import MenuPreview from '@/components/landing/MenuPreview'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Specialties />
      <MenuPreview />
      <Footer />
    </main>
  )
}