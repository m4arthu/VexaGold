import ConfigComponent from "../../Components/Configuracao/ConfiguracaoComponent"
import SidebarComponent from "../../Components/SidebarComponent"

const ConfigPage = () => {
    return (
        <div className="bg-black  flex py-4">
            <SidebarComponent/>
            <ConfigComponent/>
        </div>
    )
}

export default ConfigPage
