import HeaderComponent from "../HeaderComponent"
import SignalsWitget from "./Witgets/signalsListWitget"
import SignalsOverview from "./Witgets/signalsOverviewWitget"

const SinaisAoVivoComponent = () => {
    return (
        <div className="w-full p-2">
            <HeaderComponent title={'SINAIS AO VIVO'} />
            <SignalsOverview/>
            <div className="flex justify-end">
                <SignalsWitget/>
            </div>
        </div>
    )
}

export default SinaisAoVivoComponent