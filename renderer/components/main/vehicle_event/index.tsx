import { Antenna, MonitorOff, PanelTopInactive, Siren, Split, Truck, Unlock, Unplug, WifiOff } from "lucide-react"

export type VehicleEventType = 
'VIOLAÇÃO DE DESENGATE'
| 'VIOLAÇÃO DE BAÚ'
| 'VIOLAÇÃO DE PAINEL'
| 'VIOLAÇÃO DE ANTENA'
| 'PERDA DE SINAL'
| 'VIOLAÇÃO DE COMPUTADOR DE BORDO'
| 'BOTÃO DE PÂNICO'
| 'VIOLAÇÃO DE PORTAS'
| 'DESVIO DE ROTA'

interface VehicleEventInterface{
  type: VehicleEventType
}

const UnplugLabel = () => (
  <div className="label group error">
    <Unplug/>
    <p className="absolute duration-500 opacity-0 bottom-2 left-4 group-hover:opacity-100">VIOLAÇÃO DE DESENGATE</p>
  </div>
)

const PanelLabel = () => (
  <div className="label group error">
    <PanelTopInactive/>
    <p className="absolute duration-500 opacity-0 bottom-2 left-4 group-hover:opacity-100">VIOLAÇÃO DE PAINEL</p>
  </div>
)

const TruckLabel = () => (
  <div className="label group error">
    <Truck/>
    <p className="absolute duration-500 opacity-0 bottom-2 left-4 group-hover:opacity-100">VIOLAÇÃO DE BAÚ</p>
  </div>
)

const AntennaLabel = () => (
  <div className="label group error">
    <Antenna/>
    <p className="absolute duration-500 opacity-0 bottom-2 left-4 group-hover:opacity-100">VIOLAÇÃO DE ANTENA</p>
  </div>
)

const LostSignalLabel = () => (
  <div className="label group error">
    <WifiOff/>
    <p className="absolute duration-500 opacity-0 bottom-2 left-4 group-hover:opacity-100">PERDA DE SINAL</p>
  </div>
)

const MonitorLabel = () => (
  <div className="label group error">
    <MonitorOff/>
    <p className="absolute duration-500 opacity-0 bottom-2 left-4 group-hover:opacity-100">VIOLAÇÃO DE COMPUTADOR DE BORDO</p>
  </div>
)

const PanicLabel = () => (
  <div className="label group error">
    <Siren/>
    <p className="absolute duration-500 opacity-0 bottom-2 left-4 group-hover:opacity-100">BOTÃO DE PÂNICO</p>
  </div>
)

const DoorLabel = () => (
  <div className="label group error">
    <Unlock/>
    <p className="absolute duration-500 opacity-0 bottom-2 left-4 group-hover:opacity-100">VIOLAÇÃO DE PORTAS</p>
  </div>
)

const SplitLabel = () => (
  <div className="label group error">
    <Split/>
    <p className="absolute duration-500 opacity-0 bottom-2 left-4 group-hover:opacity-100">DESVIO DE ROTA</p>
  </div>
)
 
export default function VehicleEvent({ type }: VehicleEventInterface){

  const mapEvents = {
    'VIOLAÇÃO DE DESENGATE': <UnplugLabel/>,
    'VIOLAÇÃO DE BAÚ': <TruckLabel/>,
    'VIOLAÇÃO DE PAINEL': <PanelLabel/>,
    'VIOLAÇÃO DE ANTENA': <AntennaLabel/>,
    'PERDA DE SINAL': <LostSignalLabel/>,
    'VIOLAÇÃO DE COMPUTADOR DE BORDO': <MonitorLabel/>,
    'BOTÃO DE PÂNICO': <PanicLabel/>,
    'VIOLAÇÃO DE PORTAS': <DoorLabel/>,
    'DESVIO DE ROTA': <SplitLabel/>
  }

  return mapEvents[type]
}