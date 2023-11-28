import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loading from '../components/general/loading'

export default function HomePage() {

  const { push } = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const signed = localStorage.getItem('signed')
    if(signed !== 'true') push('/sign-in')
    setLoading(false)
  }, [])
  return (
    <div>
      <Loading open={loading}/>
      <h1>Main</h1>
    </div>
  )
}
