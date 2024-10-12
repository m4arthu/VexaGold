import HeaderComponent from "../HeaderComponent"
import CalendaryTable from "./Witget/CalendaryTable"

const CalendarioComponent = () => {
    return (
        <div className="w-full p-2">
            <HeaderComponent title={'CALENDÁRIO'} />
            <CalendaryTable />
        </div>
    )
}

export default CalendarioComponent