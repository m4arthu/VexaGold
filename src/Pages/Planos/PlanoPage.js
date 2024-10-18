import PlanosComponent from "../../Components/Planos/PlanosComponent"
import SidebarComponent from "../../Components/SidebarComponent"

const PlanoPage = () => {
    return (
        <div className="bg-black  flex py-4">
            <SidebarComponent/>
            <PlanosComponent/>
        </div>
    )
}

export default PlanoPage
