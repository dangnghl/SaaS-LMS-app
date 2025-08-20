'use client'

import React, { useEffect, useState } from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils';



const Page = () => {
  
  
  const [recentSessions, setRecentSessions] = useState<string[][]>([]);
  const [popularCompanions, setpopularCompanions] = useState<Companion[]>([]);
  


  useEffect(() => {
    const initial = async ()=>{
      const sessions = await getRecentSessions();
      setRecentSessions(sessions);
      console.log("session:" , sessions);

      const companions = await getAllCompanions({limit:3});
      setpopularCompanions(companions)
      console.log("fdsfdsafdsafd",companions)
    } 
    initial();

  }, []);



  return (
      <main>
        <h1 className="text-2xl underline">Popular Companions</h1>
        <section className='home-section'>
          {popularCompanions.map((companion) => (
          <CompanionCard 
            {... companion}
            key={companion.id} 
            name={companion.name} 
            color={getSubjectColor(companion.subject)}
            duration={companion.duration}
            subject={companion.subject}
            topic={companion.topic}
            id={companion.id}
            bookmarked={companion.bookmarked}
            />
        ))}
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