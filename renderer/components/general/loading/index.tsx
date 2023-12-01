interface LoadingInterface {
  open: boolean
}

export default function Loading({ open }: LoadingInterface){
  return (
    open?
    <div className="absolute flex items-center justify-center w-full h-full bg-base">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    : <></>
    )
}