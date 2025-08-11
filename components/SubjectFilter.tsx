'use client'
import { useEffect, useState } from 'react'

import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue
} from '@/components/ui/select';
import { subjects } from '@/constants';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SubjectFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [querySubject, setQuerySubject] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';
      if(querySubject === 'all') {
        newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['subject']
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'subject',
          value: querySubject
        })
      }
      router.push(newUrl,{scroll: false});
    }, 500);
  }, [querySubject]);


  return (
    <Select onValueChange={(value) => setQuerySubject(value)} value={querySubject}>
      <SelectTrigger className='input capitalize'>
        <SelectValue placeholder="Subject"/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='all'>All Subjects</SelectItem>
          {subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>{subject}</SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}

export default SubjectFilter