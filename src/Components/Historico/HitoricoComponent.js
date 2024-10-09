import HeaderComponent from "../HeaderComponent"
import HistoricOverview from "./Witgets/HistoricOverview"
import HistoryTable from "./Witgets/HistoryTable"

const HitoricoComponent = () => {
    return (
        <div className="w-full p-2">
            <HeaderComponent title={'HISTÓRICO'} />
            <HistoricOverview/>
            <HistoryTable/>
        </div>
    )
}

export default HitoricoComponent