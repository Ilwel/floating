import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import logo from '../public/images/logo.svg'
import Image from 'next/image'
import { Providers } from '../redux/provider'
import Info from '../components/head/info/Info'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Providers>
      <Head>
        <title>Floating</title>
      </Head>
      <div className='box-border relative h-screen text-text bg-base'>
        <div className='header min-h-[50px] max-h-[50px] p-3 select-none flex gap-2'>
          <Image src={logo} alt='gci logo' height={20} width={20}/>
          <p>
            Floating
          </p>
          <Info/>
        </div>      
        <main className='flex h-[84%] w-full items-start justify-center relative'>
          <Component {...pageProps} />
        </main>  

      </div>
    </Providers>
    </>
  )
}

export default MyApp
