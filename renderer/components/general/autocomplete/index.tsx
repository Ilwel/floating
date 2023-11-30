import { BadgeCheck, CloudOff, Construction, Droplet, FlagTriangleRight, Fuel, GitCommitHorizontal, Milestone, Moon, Package, PackageCheck, ShieldX, Truck, Utensils, Wrench } from "lucide-react"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { StatusType } from "../../main/status"
import { Vehicle } from "../../../pages"

const StartLabel = () => (
  <div className="label check w-full snap-center">
    <BadgeCheck/>
    <p>AGUARDANDO INÍCIO</p>
  </div>
)

const OnTripLabel = () => (
  <div className="label check w-full snap-center">
    <Truck/>
    <p>EM VIAGEM</p>
  </div>
)

const ClientLabel = () => (
  <div className="label check w-full snap-center">
    <PackageCheck/>
    <p>CLIENTE</p>
  </div>
)

const BranchLabel = () => (
  <div className="label check w-full snap-center">
    <FlagTriangleRight/>
    <p>FILIAL</p>
  </div>
)

const MissingSignalLabel = () => (
  <div className="label error w-full">
    <CloudOff/>
    <p>SINAL NÃO DIRECIONADO</p>
  </div>
)

const OnNightLabel = () => (
  <div className="label purple w-full">
    <Moon/>
    <p>PERNOITE</p>
  </div>
)

const WrongStopLabel = () => (
  <div className="label error w-full">
    <ShieldX />
    <p>PARADA INDEVIDA</p>
  </div>
)

const EventualStopLabel = () => (
  <div className="label check w-full snap-center">
    <GitCommitHorizontal/>
    <p>PARADA EVENTUAL</p>
  </div>
)

const FiscalStopLabel = () => (
  <div className="label check w-full snap-center">
    <Milestone/>
    <p>PARADA POSTO FISCAL</p>
  </div>
)

const HygieneStopLabel = () => (
  <div className="label check w-full snap-center">
    <Droplet/>
    <p>PARADA HIGIENE</p>
  </div>
)

const DistributionStopLabel = () => (
  <div className="label check w-full snap-center">
    <Package/>
    <p>PARADA DISTRIBUIÇÃO</p>
  </div>
)

const SnackStopLabel = () => (
  <div className="label check w-full snap-center">
    <Utensils/>
    <p>PARADA REFEIÇÃO</p>
  </div>
)

const ClosedRoadStopLabel = () => (
  <div className="label check w-full snap-center">
    <Construction/>
    <p>PARADA VIA INTERDITADA</p>
  </div>
)

const MaintenanceStopLabel = () => (
  <div className="label error w-full">
    <Wrench/>
    <p>PARADA MANUTENÇÃO</p>
  </div>
)

const FuelStopLabel = () => (
  <div className="label check w-full snap-center">
    <Fuel/>
    <p>PARADA ABASTECIMENTO</p>
  </div>
)

interface StatusInterface{
  type: StatusType
}

function Status({ type }: StatusInterface){

  const mapStatuss = {
    'AGUARDANDO INICIO': <StartLabel/>,
    'EM VIAGEM': <OnTripLabel/>, 
    'CLIENTE': <ClientLabel/>,
    'FILIAL': <BranchLabel/>,
    'SINAL NÃO DIRECIONADO': <MissingSignalLabel/>,
    'PERNOITE': <OnNightLabel/>,
    'PARADA INDEVIDA': <WrongStopLabel/>,
    'PARADA EVENTUAL': <EventualStopLabel/>,
    'PARADA POSTO FISCAL': <FiscalStopLabel/>,
    'PARADA HIGIENE': <HygieneStopLabel/>,
    'PARADA DISTRIBUIÇÃO': <DistributionStopLabel/>,
    'PARADA REFEIÇÃO': <SnackStopLabel/>,
    'PARADA VIA INTERDITADA':<ClosedRoadStopLabel/>,
    'PARADA MANUNTENÇÃO': <MaintenanceStopLabel/>,
    'PARADA ABASTECIMENTO': <FuelStopLabel/>
  }

  return mapStatuss[type]
}

interface AutocompleteInterface {
  className?: string
  vehicle: Vehicle,
  setVehicle: Dispatch<SetStateAction<Vehicle>>
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Autocomplete({ className, vehicle, setVehicle, setOpen }: AutocompleteInterface){

  const [display, setDisplay] = useState(false)
  const [list, setList] = useState<Array<StatusType>>([
    'AGUARDANDO INICIO',
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
  ])
  const [search, setSearch] = useState('')
  const wrapperRef = useRef(null);

  const setSearchValue = (item: StatusType) =>{
    setSearch(item)
    setVehicle({
      ...vehicle,
      status: item
    })
    setDisplay(false)
  }

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return(
    <div ref={wrapperRef} className={"flex flex-col " + className}>
      <input value={search} onChange={(e) => setSearch(e.target.value)} onClick={() => setDisplay(true)} type="text" placeholder='Status de viagem' />
      {display && (
        <div className="overflow-auto h-[90px] snap-y flex flex-col gap-1 mt-1 no-scrollbar">
          {
            list
            .filter((v) => v.toLocaleLowerCase().indexOf(search.toLowerCase()) > -1)
            .map((v, i) => (
              <div onClick={() => {
                setOpen(false)
                setSearchValue(v)
              }}>
                <Status type={v}/>
              </div>
            ))
          }
        </div>
      )}
    </div>
  )
}