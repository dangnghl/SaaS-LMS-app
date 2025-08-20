'use client'

import { removeBookmark, insertBookmark } from '@/lib/actions/companion.action';
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;  
  bookmarked: boolean;
  color: string;
}

const CompanionCard = ({id,name,topic,subject,duration,color,bookmarked}:CompanionCardProps) => {
  const [isBookmark, setIsBookmark] = useState(bookmarked);
  const handleBookmarkToggle = async () => {
    setIsBookmark(!isBookmark);
    if(isBookmark){
      await removeBookmark(id);
    } else {
      await insertBookmark(id);
    }
    
  };

  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark" onClick={handleBookmarkToggle}>
          <Image src= {isBookmark ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"} alt="Bookmark-filled" width={12.5} height={15} />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
        <p className="text-sm">{duration} min</p>
      </div>
      
      <Link href={`/companions/${id}`} className='w-full'>
        <button className='btn-primary w-full justify-center'>Launch Lesson</button>
      </Link>
      
    </article>
  )
}

export default CompanionCard