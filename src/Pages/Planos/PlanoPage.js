import PlanoComponent from "../../Components/Configuracao/ConfiguracaoComponent"
import SidebarComponent from "../../Components/SidebarComponent"

const PlanoPage = () => {
    return (
        <div className="bg-black h-[100vh] flex py-4">
            <SidebarComponent/>
            <PlanoComponent/>
        </div>
    )
}

export default PlanoPage
