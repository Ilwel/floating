import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function HomePage() {

  const { push } = useRouter()

  useEffect(() => {
    const signed = localStorage.getItem('signed')
    if(signed !== 'true') push('/sign-in')
  }, [])
  return (
    <div>
      <h1>Main</h1>
    </div>
  )
}
