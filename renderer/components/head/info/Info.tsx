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
      
      <div className={"flex items-center " + mapColors[vehicle.status]}>
        <p className="text-[12px] font-bold">{vehicle.plate}</p>
        <MiniStatus type={vehicle.status}/>
      </div>
    ) 
    : <> </>
  )
}