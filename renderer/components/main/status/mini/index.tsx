import { BadgeCheck, CloudOff, Construction, Droplet, FlagTriangleRight, Fuel, GitCommitHorizontal, Milestone, Moon, Package, PackageCheck, ShieldX, Truck, Utensils, Wrench } from "lucide-react"

const StartLabel = () => (
  <BadgeCheck  className="text-green-300" height={15}/>
)

const OnTripLabel = () => (
  <Truck  className="text-green-300" height={15}/>
)

const ClientLabel = () => (
  <PackageCheck  className="text-green-300" height={15}/>
)

const BranchLabel = () => (
  <FlagTriangleRight  className="text-green-300" height={15}/>
)

const MissingSignalLabel = () => (
  <CloudOff  className="text-red-400" height={15}/>
)

const OnNightLabel = () => (
    <Moon  className="text-purple-400" height={15}/>
)

const WrongStopLabel = () => (
  <ShieldX className="text-red-400" height={15} />
)

const EventualStopLabel = () => (
  <GitCommitHorizontal  className="text-green-300" height={15}/>
)

const FiscalStopLabel = () => (
  <Milestone  className="text-green-300" height={15}/>
)

const HygieneStopLabel = () => (
  <Droplet  className="text-green-300" height={15}/>
)

const DistributionStopLabel = () => (
  <Package  className="text-green-300" height={15}/>
)

const SnackStopLabel = () => (
  <Utensils className="text-green-300" height={15}/>
)

const ClosedRoadStopLabel = () => (
  <Construction  className="text-green-300" height={15}/>
)

const MaintenanceStopLabel = () => (
  <Wrench  className="text-red-400" height={15}/>
)

const FuelStopLabel = () => (
  <Fuel  className="text-green-300" height={15}/>
)


export type StatusType = 
'AGUARDANDO INICIO' 
| 'EM VIAGEM' 
| 'CLIENTE'
| 'FILIAL'
| 'SINAL NÃO DIRECIONADO'
| 'PERNOITE'
| 'PARADA INDEVIDA'
| 'PARADA EVENTUAL'
| 'PARADA POSTO FISCAL'
| 'PARADA HIGIENE'
| 'PARADA DISTRIBUIÇÃO'
| 'PARADA REFEIÇÃO'
| 'PARADA VIA INTERDITADA'
| 'PARADA MANUNTENÇÃO'
| 'PARADA ABASTECIMENTO'

interface StatusInterface{
  type: StatusType
}

export default function MiniStatus({ type }: StatusInterface){

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