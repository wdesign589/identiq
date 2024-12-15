import Hero from '@/components/hero'
import FeaturesSection from '../components/featuresSection'
import ExperienceSection from '../components/experienceSection'
import FaqSection from '../components/faqSection'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
    <Hero />
    <FeaturesSection />
    <ExperienceSection />
    <FaqSection />
    <div className="container mx-auto px-6 py-8 text-center">
      <Link href="/login" className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 mr-4">
        Login
      </Link>
      <Link href="/signup" className="inline-block bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90">
        Sign Up
      </Link>
    </div>
  </main>
  );
}
