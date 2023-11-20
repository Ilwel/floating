import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import logo from '../public/images/logo.svg'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Floating</title>
      </Head>
      <div className='box-border text-text bg-base h-screen'>
        <div className='header min-h-[50px] max-h-[50px] p-3 select-none flex gap-2'>
          <Image src={logo} alt='gci logo' height={20} width={20}/>
          <p >
            Floating
          </p>
        </div>      
        <main className='flex h-[84%] items-start justify-center'>
          <Component {...pageProps} />
        </main>  

      </div>
    </>
  )
}

export default MyApp
