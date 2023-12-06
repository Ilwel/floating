import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loading from '../components/general/loading'
import { BadgeCheck, LogOut } from 'lucide-react'
import Status from '../components/main/status'
import VehicleEvent, { VehicleEventType } from '../components/main/vehicle_event'
import AutocompleteStatus from '../components/general/autocomplete-status'
import { VehicleInterface } from '../redux/features/vehicleSlice'
import * as vehicleActions from "../redux/features/vehicleSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Autocomplete from '../components/general/autocomplete'

const mock = [
  'AG INICIO',
  'EM VIAGEM',
  'CLIENTE',
  'FILIAL',
  'SINAL NÃO DIRECIONADO', //tirar da func
  'PERNOITE',
  'PARADA INDEVIDA', //tirar da func
  'PARADA EVENTUAL',
  'PARADA POSTO FISCAL',
  'PARADA HIGIENE',
  'PARADA DISTRIBUIÇÃO',
  'PARADA REFEIÇÃO',
  'PARADA VIA INTERDITADA',  //tirar da func
  'PARADA MANUNTENÇÃO',
  'PARADA ABASTECIMENTO'
]

const mock2 = [
  'VIOLAÇÃO DE DESENGATE', 
  'VIOLAÇÃO DE BAÚ', 
  'VIOLAÇÃO DE PAINEL',
  'VIOLAÇÃO DE ANTENA',
  'PERDA DE SINAL',
  'VIOLAÇÃO DE COMPUTADOR DE BORDO',
  'BOTÃO DE PÂNICO',
  'VIOLAÇÃO DE PORTAS',
  'DESVIO DE ROTA'
]

export interface UserInterface{
  user_signed_in: boolean,
  current_user: string,
  client_id: number,
  grupo_usuario_id: number
}

export default function HomePage() {

  const { push, reload } = useRouter()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<UserInterface>()
  const [openStatusInput, setOpenStatusInput] = useState(false)
  const vehicle = useAppSelector(state => state.vehicleReducer)


  useEffect(() => {

    setLoading(true)
    const stringUser = localStorage.getItem('user')
    if(!stringUser) push('/sign-in')
    else{
      const userParsed = JSON.parse(stringUser) as UserInterface
      setUser(userParsed)
      if(userParsed.grupo_usuario_id === 8) {
        localStorage.setItem('user', '')
        push('/sign-in')
      }
    }
    setLoading(false)

  }, [])

  const handleSignOut = () => {
    localStorage.setItem('user', '')
    reload()
  }


  return (
    <div className='flex flex-col items-center w-full h-full overflow-hidden'>
      <Loading open={loading}/>
      <div className="flex items-center justify-between w-full p-3 select-none">
        <div className='flex items-center gap-2'>
          <BadgeCheck/>
          <p className='text-sm font-bold'>Nova Sessão: {user?.current_user}</p>
        </div>
        <button type='button' onClick={handleSignOut} className='flex items-center gap-1 p-2 text-sm text-center border-none hover:bg-transparent hover:text-red-400'>
          <p className='font-bold'>Sair</p>
          <LogOut className='w-5'/>
        </button>
      </div>
      { vehicle.plate ? (
        <div className='flex items-center gap-2'>
          <Autocomplete setOpen={setOpenStatusInput}/>
          <div onClick={() => setOpenStatusInput(true)}>
            <Status type={vehicle.status}/>
          </div>
        </div>
      ) : (
        <div className="field">
          <Autocomplete setOpen={setOpenStatusInput}/>
        </div>
      )}

      {openStatusInput && (
        <AutocompleteStatus setOpen={setOpenStatusInput} className='mt-3'/>
      )}


      {vehicle.plate && (
        <div className='flex gap-1 p-1 mt-3 flex-wrap w-[62%] h-[100px]' >
          <h2 className='select-none'>Eventos</h2>
          <div className='flex gap-2 p-1 flex-wrap overflow-y-auto min-w-[100%] max-h-[100px] no-scrollbar'>

            {mock2.map((item, index) => (
              <VehicleEvent key={index} type={item as VehicleEventType}/>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
