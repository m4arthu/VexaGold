import DashboardComponent from "../../Components/Dashboard/DashboardComponent"
import SidebarComponent from "../../Components/SidebarComponent"

const Dashboard = () => {
    return (
        <div className="bg-black h-[100vh] flex py-4">
            <SidebarComponent/>
            <DashboardComponent/>
        </div>
    )
}


export default Dashboard