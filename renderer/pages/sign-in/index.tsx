import { FormEvent, useState } from "react"
import { ApiService } from "../../services/ApiService"

export default function SignIn(){

  const [token, setToken] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    ApiService.getUser(token)
  }

  return (
    <div className="flex gap-3 flex-col items-center mt-20">
      <h1 className="text-xl select-none">Token</h1>
      <form className="flex gap-2" onSubmit={e => handleSubmit(e)} id="form" action="">
        <input onChange={e => setToken(e.target.value)} name="token" type="text" placeholder="Insira seu token"/>
        <button type="submit" >Acesso</button>
      </form>
    </div>
  )
}