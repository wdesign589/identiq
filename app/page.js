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
    
  </main>
  );
}
