import Hero from '../components/Hero'
import Features from '../components/Features'
import LoginTypes from '../components/LoginTypes'
import Solutions from '../components/Solutions'
import TechStack from '../components/TechStack'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <LoginTypes />
      <Solutions />
      <TechStack />
      <CallToAction />
    </main>
  )
}