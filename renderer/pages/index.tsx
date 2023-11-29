import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loading from '../components/general/loading'
import { BadgeCheck, LogOut } from 'lucide-react'
import Notification, { NotificationType } from '../components/main/notification'

const mock = [
  'AG INICIO',
  'EM VIAGEM',
  'CLIENTE',
  'FILIAL',
  'SINAL NÃO DIRECIONADO',
  'PERNOITE',
  'PARADA INDEVIDA',
  'PARADA EVENTUAL',
  'PARADA POSTO FISCAL',
  'PARADA HIGIENE',
  'PARADA DISTRIBUIÇÃO',
  'PARADA REFEIÇÃO',
  'PARADA VIA INTERDITADA',
  'PARADA MANUNTENÇÃO',
  'PARADA ABASTECIMENTO'
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
    <div className='w-full flex flex-col items-center'>
      <Loading open={loading}/>
      <div className="flex w-full p-3 items-center justify-between select-none">
        <div className='flex gap-2 items-center'>
          <BadgeCheck/>
          <p className='font-bold text-sm'>Nova Sessão: {user?.current_user}</p>
        </div>
        <button type='button' onClick={handleSignOut} className='border-none hover:bg-transparent hover:text-red-400 text-sm text-center p-2 flex items-center gap-1'>
          <p className='font-bold'>Sair</p>
          <LogOut className='w-5'/>
        </button>
      </div>
      <div className="field">
        <label htmlFor="plate" >Placa</label>
        <div className='flex gap-2'>
          <input className='uppercase placeholder:normal-case' type="text" name='plate' placeholder='Insira a Placa'/>
          <Notification type='EM VIAGEM'/>
        </div>
      </div>


      <div className='flex gap-1 p-1 mt-3 flex-wrap w-[62%] h-[100px]' >
        <h2 className='select-none'>Histórico de Eventos</h2>
        <div className='flex gap-2 p-1 flex-wrap overflow-y-scroll max-h-[100px]'>

          {mock.map(item => (
            <Notification type={item as NotificationType}/>
          ))}
        </div>
      </div>

    </div>
  )
}
