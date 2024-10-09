const SignalsOverview = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-3">
            <div className="w-full bg-[#151618] rounded-[10px] p-3">
                <div className="flex items-center">
                    <img src="./assets/images/icons/signalsIcon.svg"/>
                    <h1 className="ml-3 font-bold text-white text-[14px]">SINAIS</h1>
                </div>
                <p className="text-[25px] mt-2 text-white font-bold">51</p>
            </div>
            <div className="w-full bg-[#151618] rounded-[10px] p-3">
                <div className="flex items-center">
                <img src="./assets/images/icons/winIcon.svg"/>
                    <h1 className="ml-3 font-bold text-white text-[14px]">WIN</h1>
                </div>
                <p className="text-[25px] text-[#2FFE82] mt-2  font-bold">35</p>
            </div>
            <div className="w-full bg-[#151618] rounded-[10px] p-3">
                <div className="flex items-center">
                <img src="./assets/images/icons/losIcon.svg"/>
                    <h1 className="ml-3 font-bold text-white text-[14px]">LOSS</h1>
                </div>
                <p className="text-[25px] mt-2 text-[#DB4831] font-bold">16</p>
            </div>
        </div>
    )
}

export default SignalsOverview