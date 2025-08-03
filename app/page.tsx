import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
      <main>
        <h1 className="text-2xl underline">Popular Companions</h1>

        <section className='home-section'>
          <CompanionCard 
            id="123"
            name="World of Calculus"
            topic ="Calculus"
            subject="Mathematics"
            duration={45}
            color="#e5d0ff"
          />
          <CompanionCard 
            id="234"
            name="Introduction to Psychology"
            topic="Psychology"
            subject="Social Sciences"
            duration={30}
            color="#f0abfc"
          />
          <CompanionCard 
            id="345"
            name="Basic Physics"
            topic="Physics"
            subject="Science"
            duration={60}
            color="#c4f1f9"
          />
        </section>

        <section className="home-section">
          <CompanionsList 
            title="Recently completed sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
      </main>
  )
}

export default Page