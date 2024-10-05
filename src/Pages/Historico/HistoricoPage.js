import SidebarComponent from "../../Components/SidebarComponent"
import HitoricoComponent from "../../Components/Historico/HitoricoComponent"
const HistoricoPage = () => {
    return (
        <div className="bg-black h-[100vh] flex py-4">
            <SidebarComponent/>
            <HitoricoComponent/>
        </div>
    )
}

export default HistoricoPage
