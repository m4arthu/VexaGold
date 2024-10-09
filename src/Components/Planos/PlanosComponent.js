import HeaderComponent from "../HeaderComponent"

const PlanosComponent = () => {
    return (
        <div className="w-full py-4 px-4">
            <HeaderComponent title={'PLANOS'} />
            <div className="w-full bg-[url('../public/assets/images/planosBackgrount.svg')]">
                <div className="w-full flex flex-col items-center font-bold text-white text-[25px]">
                    <h1 className="max-w-[395px] text-[22px] text-center">O Melhor Robô Financeiro
                        Lucros Automatizados com Alta Precisão</h1>
                    <div className="flex items-center mt-3 mb-3 gap-3">
                        <h2 className="text-[14px]">Mensal</h2>
                        <div className="flex  w-[40px] justify-end h-[20px] rounded-[15px] bg-[#2FFE823D] ">
                            <div className="w-[20px] cursor-pointer rounded-[100%] bg-[#2FFE82]"></div>
                        </div>
                        <h2 className="text-[14px]">Anual</h2>
                        <div style={{border:'border 1px solid #2FFE82'}} className="text-[14px] p-1  rounded-[17px] px-4 bg-[#1B985E]">20% off</div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-3 mt-2 p-2 items-end gap-3">
                    <div className="bg-[#151618]  px-3 py-4 rounded-[15px] w-full h-[67vh]">
                        <h1 className="text-[25px] font-bold text-[white]">Basic</h1>
                        <p className="text-white text-[12px] mt-4 ">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLore</p>
                        <div className="h-[1px] border my-5 border-[#2E2F32] border-dashed"></div>
                        <h1 className="text-[25px] font-bold text-[white]">R$49 / mês</h1>
                        <div className="border border-[#2E2F32]  cursor-pointer text-white flex justify-between p-2 px-4 my-2 mb-3 bg-[#2E2F32] rounded-[6px]">
                            <p className="font-bold">COMEÇAR</p>
                            <img src="./assets/images/icons/ArrowRight.svg" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#151618]  px-3 py-4 rounded-[15px] w-full h-[72vh]">
                        <h1 className="text-[25px] font-bold text-[white]">Basic</h1>
                        <p className="text-white text-[12px] mt-4 ">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLore</p>
                        <div className="h-[1px] border my-5 border-[#2E2F32] border-dashed"></div>
                        <h1 className="text-[25px] font-bold text-[white]">R$89 / mês</h1>
                        <div className="border-[1px] cursor-pointer text-white flex justify-between p-2 px-4 border-[#2FFE82] my-2 mb-3 bg-[#2FFE823D] rounded-[6px]">
                            <p className="font-bold">COMEÇAR</p>
                            <img src="./assets/images/icons/ArrowRight.svg" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#151618]  px-3 py-4 rounded-[15px] w-full h-[67vh]">
                        <h1 className="text-[25px] font-bold text-[white]">Basic</h1>
                        <p className="text-white text-[12px] mt-4 ">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLore</p>
                        <div className="h-[1px] border my-5 border-[#2E2F32] border-dashed"></div>
                        <h1 className="text-[25px] font-bold text-[white]">R$100 / mês</h1>
                        <div className="border cursor-pointer text-white flex justify-between p-2 px-4 border-[#2E2F32] my-2 mb-3 bg-[#2E2F32] rounded-[6px]">
                            <p className="font-bold">COMEÇAR</p>
                            <img src="./assets/images/icons/ArrowRight.svg" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                            <div className="text-white mt-1 flex">
                                <img src="./assets/images/icons/circleCheckedGreen.svg" />
                                <p className="ml-2 font-bold text-[13px]">Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanosComponent