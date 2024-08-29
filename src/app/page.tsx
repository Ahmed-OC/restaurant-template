import Header from '@/components/Header'
import Hero from '@/components/landing/Hero'
import Specialties from '@/components/landing/Specialities'
import MenuPreview from '@/components/landing/MenuPreview'
import Footer from '@/components/Footer'
import OurStory from '@/components/landing/OurStory'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Specialties />
      <MenuPreview />
      <OurStory />
      <Testimonials />
      <Footer />
    </main>
  )
}