import CompanionCard from '@/components/CompanionCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions } from '@/lib/actions/companion.action';
import { getSubjectColor } from '@/lib/utils';
import React from 'react'

const ComponionsLibrary = async ({searchParams} : SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({subject, topic});
  
  return (
    <main>
      <section className="flex justify-around gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4 ">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid ">
        {companions.map((companion) => (
          <CompanionCard 
            key={companion.id} {...companion}
            name={companion.name} 
            color={getSubjectColor(companion.subject)}
            duration={companion.duration}
            subject={companion.subject}
            topic={companion.topic}
            id={companion.id}
            />
        ))}
      </section>
    </main>
  )
}

export default ComponionsLibrary