import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Loading from "../loading";
import { VehicleInterface } from "../../../redux/features/vehicleSlice";
import { useDispatch } from "react-redux";
import * as vehicleActions from "../../../redux/features/vehicleSlice";
import { ApiService } from "../../../services/ApiService";

interface AutocompleteInterface {
  className?: string
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Autocomplete({ className, setOpen }: AutocompleteInterface ){
  const [display, setDisplay] = useState(false)
  const [list, setList] = useState<Array<string>>([])
  const [search, setSearch] = useState('')
  const wrapperRef = useRef(null);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const setSearchValue = async (item: string) =>{
    setSearch(item)
    setDisplay(false)
  }

  const handleChange = async (e) => {
    setSearch(e.target.value)
    const token = localStorage.getItem('token')
    const data = await ApiService.listVehicles(token, e.target.value)
    const plates = data.map(item => item.placa)
    setList(plates)
  }

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const searchPlate = (plate: string) => {
    return {
      plate: plate,
      status: 'EM VIAGEM'
    } as VehicleInterface
  } 

  useEffect(() => {
    if(search.length === 7){
      setLoading(true)
      const data = searchPlate(search)
      dispatch(vehicleActions.set(data))
      setLoading(false)
    }else{
      dispatch(vehicleActions.reset())
    }
  }, [search])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return(
    <div ref={wrapperRef} className={"flex flex-col " + className}>
      <Loading open={loading}/>
      <input maxLength={7} className="w-20 p-2 font-bold uppercase bg-transparent border border-solid select-none border-text text-text placeholder:text-highlight/50" value={search} onChange={handleChange} onClick={() => setDisplay(true)} type="text" placeholder='Placa' />
      {display && (
        <div className="overflow-auto h-[90px] snap-y flex flex-col gap-1 mt-1 no-scrollbar">
          {
            list
            .filter((v) => v.toLocaleLowerCase().indexOf(search.toLowerCase()) > -1)
            .map((v, i) => (
              <div key={i} onClick={() => {
                setOpen(false)
                setSearchValue(v)
              }}>
                <p className="w-full p-1 text-center cursor-pointer bg-text text-highlight">{v}</p>
              </div>
            ))
          }
        </div>
      )}
    </div>
  )
}