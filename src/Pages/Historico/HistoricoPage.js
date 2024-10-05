import HistoricoComponent from "../../Components/Configuracao/ConfiguracaoComponent"
import SidebarComponent from "../../Components/SidebarComponent"

const HistoricoPage = () => {
    return (
        <div className="bg-black h-[100vh] flex py-4">
            <SidebarComponent/>
            <HistoricoComponent/>
        </div>
    )
}

export default HistoricoPage
