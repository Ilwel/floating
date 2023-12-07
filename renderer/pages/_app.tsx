import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import logo from '../public/images/logo.svg'
import Image from 'next/image'
import { Providers } from '../redux/provider'
import Info from '../components/head/info/Info'
import { ChevronDownCircle, MinusCircle, XCircle } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import * as screenActions from '../redux/features/screenSlice'
import Link from 'next/link'

type ContentProps = {
  children: React.ReactNode
}

function Content({ children }: ContentProps) {
  const minimal = useAppSelector(state => state.screenReducer.minimal)
  const dispatch = useAppDispatch()

  const handleMinimizeMaximize = () => {

    if (minimal) {
      window.ipc.send('maximize', 'maximize')
    } else {
      window.ipc.send('minimize', 'minimize')
    }

    dispatch(screenActions.set({ minimal: !minimal }))

  }

  const handleClose = () => {

    window.ipc.send('close', 'close')

  }
  return (
    <>
      <Head>
        <title>Floating</title>
      </Head>
      <div className='box-border relative h-screen overflow-hidden text-text bg-base'>
        <div className=' min-h-[50px] max-h-[50px] select-none items-center flex justify-between'>
          <div className='flex items-center w-full gap-2 p-3 header'>
            <Image src={logo} alt='gci logo' height={20} width={20} />
            {!minimal ? (
              <p>
                Floating
              </p>
            ) : (
              <Info />
            )}
          </div>

          <div className='flex items-center gap-1 p-3'>
            {minimal ? (
              <ChevronDownCircle onClick={handleMinimizeMaximize} height={20} className='text-blue-400 duration-500 cursor-pointer opacity-40 hover:opacity-100' />
              ) : (
                <>
                <Link href={'/shortcuts'}>
                  <p className='mr-1 text-[10px] border font-bold border-text w-5 h-5 flex items-center justify-center rounded-[50%] opacity-40 hover:opacity-100 cursor-pointer hover:bg-text hover:text-highlight duration-700'>K</p>
                </Link>
                  <MinusCircle onClick={handleMinimizeMaximize} height={20} className='text-yellow-300 duration-500 cursor-pointer opacity-40 hover:opacity-100' />
                </>
            )}
            <XCircle onClick={handleClose} height={20} className='text-red-400 duration-500 cursor-pointer opacity-60 hover:opacity-100' />
          </div>
        </div>

        <main className='flex h-[84%] w-full items-start justify-center relative'>
          {children}
        </main>

      </div>
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Providers>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Providers>
    </>
  )
}

export default MyApp
