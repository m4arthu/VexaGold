
import SidebarComponent from "../../Components/SidebarComponent"
import SinaisAoVivoComponent from "../../Components/SinaisAoVivo/SinaisAoVivoComponent"
const SinaisPage = () => {
    return (
        <div className="bg-black  flex py-4">
            <SidebarComponent/>
            <SinaisAoVivoComponent/>
        </div>
    )
}

export default SinaisPage
