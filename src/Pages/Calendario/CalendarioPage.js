import CalendarioComponent from "../../Components/Calendario/CalendarioComponent"
import SidebarComponent from "../../Components/SidebarComponent"
const CalendarioPage = () => {
    return (
        <div className="bg-black h-[100vh] flex py-4">
            <SidebarComponent/>
            <CalendarioComponent/>
        </div>
    )
}

export default CalendarioPage
