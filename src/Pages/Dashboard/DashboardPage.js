import DashboardComponent from "../../Components/Dashboard/DashboardComponent"
import Sidebar from "../../Components/SidebarComponent"

const Dashboard = () => {
    return (
        <div className="bg-black flex py-4">
            <Sidebar/>
            <DashboardComponent/>
        </div>
    )
}


export default Dashboard