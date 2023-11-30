import { BadgeCheck, Construction, Droplet, FlagTriangleRight, Fuel, GitCommitHorizontal, Milestone, Moon, Package, PackageCheck, ShieldX, Truck, Utensils, WifiOff, Wrench } from "lucide-react"

const StartLabel = () => (
  <div className="status-label check group">
    <BadgeCheck/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">AGUARDANDO INÍCIO</p>
  </div>
)

const OnTripLabel = () => (
  <div className="status-label check group">
    <Truck/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">EM VIAGEM</p>
  </div>
)

const ClientLabel = () => (
  <div className="status-label check group">
    <PackageCheck/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">CLIENTE</p>
  </div>
)

const BranchLabel = () => (
  <div className="status-label check group">
    <FlagTriangleRight/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">FILIAL</p>
  </div>
)

const MissingSignalLabel = () => (
  <div className="status-label error group">
    <WifiOff/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">SINAL NÃO DIRECIONADO</p>
  </div>
)

const OnNightLabel = () => (
  <div className="status-label purple group">
    <Moon/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PERNOITE</p>
  </div>
)

const WrongStopLabel = () => (
  <div className="status-label error group">
    <ShieldX />
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PARADA INDEVIDA</p>
  </div>
)

const EventualStopLabel = () => (
  <div className="status-label check group">
    <GitCommitHorizontal/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PARADA EVENTUAL</p>
  </div>
)

const FiscalStopLabel = () => (
  <div className="status-label check group">
    <Milestone/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PARADA POSTO FISCAL</p>
  </div>
)

const HygieneStopLabel = () => (
  <div className="status-label check group">
    <Droplet/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PARADA HIGIENE</p>
  </div>
)

const DistributionStopLabel = () => (
  <div className="status-label check group">
    <Package/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PARADA DISTRIBUIÇÃO</p>
  </div>
)

const SnackStopLabel = () => (
  <div className="status-label check group">
    <Utensils/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PARADA REFEIÇÃO</p>
  </div>
)

const ClosedRoadStopLabel = () => (
  <div className="status-label check group">
    <Construction/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PARADA VIA INTERDITADA</p>
  </div>
)

const MaintenanceStopLabel = () => (
  <div className="status-label error group">
    <Wrench/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PARADA MANUTENÇÃO</p>
  </div>
)

const FuelStopLabel = () => (
  <div className="status-label check group">
    <Fuel/>
    <p className="absolute bottom-2 left-4 opacity-0 group-hover:opacity-100 duration-500">PARADA ABASTECIMENTO</p>
  </div>
)


export type StatusType = 
'AG INICIO' 
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

export default function Status({ type }: StatusInterface){

  const mapStatuss = {
    'AG INICIO': <StartLabel/>,
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