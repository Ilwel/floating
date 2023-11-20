export default function SignIn(){
  return (
    <div className="flex gap-3 flex-col items-center mt-20">
      <h1 className="text-xl">Token</h1>
      <div className="flex gap-2">        
        <input type="text" placeholder="Insira seu token"/>
        <button >Acesso</button>
      </div>
    </div>
  )
}