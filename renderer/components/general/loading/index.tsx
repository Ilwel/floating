interface LoadingInterface {
  open: boolean
}

export default function Loading({ open }: LoadingInterface){
  return (
    open?
    <div className="h-full w-fit bg-base absolute flex items-center justify-center">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    : <></>
    )
}