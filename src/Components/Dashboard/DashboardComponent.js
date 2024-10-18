import HeaderComponent from "../HeaderComponent"
import AcertosWitget from "./Witgets/AcertosWitget"
import LastOperationWitget from "./Witgets/LastOperationsWitget"
import RendimentosChart from "./Witgets/RendimentosChart"
import Top5ParidadesWitget from "./Witgets/Top5ParidadesWitget"
import WalletDetailsWitget from "./Witgets/WalletDetailsWitget"

const DashboardComponent = () => {
    return (
        <div className="md:ml-2 w-full px-3">
           <HeaderComponent title={'DASHBOARD'}/>
            <div className="w-full justify-between md:flex">
                <LastOperationWitget />
                <WalletDetailsWitget />
            </div>
            <div className="w-full justify-between md:flex">
                <RendimentosChart/>
                <AcertosWitget/>
                <Top5ParidadesWitget/>
            </div>
        </div>
    )
}


export default DashboardComponent