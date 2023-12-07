import { ArrowLeftCircle, MinusCircle } from "lucide-react";
import { mapFuncKeys } from "..";
import Status, { StatusType } from "../../components/main/status";
import Link from "next/link";

export default function Shortcuts(){
  return(
    <div className="flex flex-col items-start w-full h-full p-4">
      <div className="flex items-center gap-1">
        <Link href={'/'}>
          <ArrowLeftCircle className="duration-700 cursor-pointer opacity-40 hover:opacity-100"/>
        </Link>
        <h1 className="text-sm font-bold uppercase">Atalhos</h1>
      </div>
      <div className="flex flex-col flex-wrap h-full gap-3 mt-2">
        {Object.entries(mapFuncKeys).map(([key, value]) => (
          <div className="flex items-center gap-1">
            <p className="flex items-center justify-center w-10 h-10 border rounded-none border-text">{key}</p>
            <Status type={value as StatusType}/>
          </div>
        ))}
        <div className="flex items-center gap-1">
          <p className="flex items-center justify-center w-10 h-10 border rounded-none border-text">M</p>
          <p className="flex items-center justify-center w-10 h-10 border rounded-none border-text">
            <MinusCircle className="text-yellow-300"/>
          </p>
        </div>
      </div>
    </div>
  )
}