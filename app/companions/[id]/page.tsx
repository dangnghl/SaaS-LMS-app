import Link from 'next/link'

const CompanionSession = () => {
  return (
    <div>
      <h1>Companion Session</h1>
      <Link href='/'>
        <button className='btn-primary'>Back</button>
      </Link>
    </div>
  )
}

export default CompanionSession