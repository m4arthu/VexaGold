import DashboardComponent from "../../Components/Dashboard/DashboardComponent"
import Sidebar from "../../Components/SidebarComponent"

const Dashboard = () => {
    return (
        <div className="bg-black h-[100vh] flex py-4">
            <Sidebar/>
            <DashboardComponent/>
        </div>
    )
}


export default Dashboard