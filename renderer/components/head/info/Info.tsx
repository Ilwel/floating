import { useAppSelector } from "../../../redux/hooks"
import MiniStatus from "../../main/status/mini"

const mapColors = {
  'PERNOITE': 'text-purple-400',
  'SINAL NÃO DIRECIONADO': 'text-red-400',
  'PARADA INDEVIDA': 'text-red-400',
  'PARADA MANUNTENÇÃO': 'text-red-400',
  'AGUARDANDO INICIO': 'text-green-300',
  'EM VIAGEM': 'text-green-300',
  'CLIENTE': 'text-green-300',
  'FILIAL': 'text-green-300',
  'PARADA EVENTUAL': 'text-green-300',
  'PARADA POSTO FISCAL': 'text-green-300',
  'PARADA HIGIENE': 'text-green-300',
  'PARADA DISTRIBUIÇÃO': 'text-green-300',
  'PARADA REFEIÇÃO': 'text-green-300',
  'PARADA VIA INTERDITADA': 'text-green-300',
  'PARADA ABASTECIMENTO': 'text-green-300',
}

export default function Info(){
  const vehicle = useAppSelector(state => state.vehicleReducer)
  return(
    vehicle.plate ? (
      
      <div className={"flex flex-col items-start " + mapColors[vehicle.status]}>
        <div className="flex">
          <p className="text-[12px] font-bold">{vehicle.plate.toUpperCase()}</p>
          <div className="mt-[2px]">
            <MiniStatus type={vehicle.status}/>
          </div>
        </div>
        <p className="text-[12px]">({vehicle.status})</p>
      </div>
    ) 
    : <> </>
  )
}