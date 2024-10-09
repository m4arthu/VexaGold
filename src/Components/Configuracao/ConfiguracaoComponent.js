import HeaderComponent from "../HeaderComponent"

const ConfigComponent = () => {
    return (
        <div className="w-full p-2">
            <HeaderComponent title={'CONFIGURAÇOES'} />
            <div className="w-full flex flex-col items-center p-4 rounded-[10px] bg-[#151618]">
                <div className="w-full mt-2 flex justify-center">
                    <img src="./assets/images/icons/UserIcon.svg" />
                </div>
                <div className="flex w-full mt-3 mb-4 gap-2">
                    <div className="w-full">
                        <label className="text-white font-bold text-[13px]">E-mail</label>
                        <input value={'meuEmai@example.com'} className="px-4 text-white bg-[#2E2F323D] w-full rounded-[10px] h-[35px]" type="email" />
                    </div>
                    <div className="w-full">
                        <label className="text-white font-bold text-[13px]">Senha</label>
                        <input value={'123445'} className="bg-[#2E2F323D] w-full px-4 text-white rounded-[10px] h-[35px]" type="password" />
                    </div>
                    <div className="w-full">
                        <label className="text-white font-bold text-[13px]">Cadastro</label>
                        <input value={'m4arthu'} className="bg-[#2E2F323D] w-full px-4 text-white rounded-[10px] h-[35px]" type="text" />
                    </div>
                </div>
                <div className="w-full">
                    <button className="border text-[white] border-[#2FFE82] bg-[#1B985E] p-1 font-bold w-[250px] rounded-[8px]">Salvar</button>
                </div>
            </div>

            <div className="mt-1 bg-[#151618] mt-2 mb-2 w-[300px] p-2 rounded-[10px]">
                <div className="flex">
                    <img src="./assets/images/icons/SettingsIcon.svg" />
                    <p className="text-[14px] text-white ml-3 font-bold">OPERAÇÃO AO VIVO</p>
                    <div className="flex ml-8 w-[45px] justify-end w-[80px] rounded-[15px] bg-[#2FFE823D] ">
                        <div className="w-[21px] cursor-pointer rounded-[100%] bg-[#2FFE82]"></div>
                    </div>
                </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-x-2 gap-1">
                <div className="mt-1 bg-[#151618] w-full p-2 rounded-[10px]">
                    <div className="flex items-center   justify-between">
                        <div className="flex">
                            <img src="./assets/images/icons/SettingsIcon.svg" />
                            <p className="text-[14px] text-white ml-3 font-bold">NOTICIA</p>
                        </div>
                        <img src="./assets/images/icons/trash.svg" className="cursor-pointer " />
                    </div>
                    <p className="text-[11px] text-white mt-1 mb-2">Não óperar em noticia</p>
                    <div className="w-full cursor-pointer py-3 flex justify-between font-bold text-[14px] p-2 mt-2 mb-3 rounded bg-[#2E2F323D] text-white">
                        <p>Desligado</p>
                        <img src="./assets/images/icons/arrowUpDown.svg" />
                    </div>
                </div>
                <div className="mt-1 bg-[#151618] w-full p-2 rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="./assets/images/icons/SettingsIcon.svg" />
                            <p className="text-[14px] text-white ml-3 font-bold">STOP WIN</p>
                        </div>
                        <img src="./assets/images/icons/trash.svg" className="cursor-pointer " />
                    </div>
                    <p className="text-[11px] text-white mt-1 mb-2">Meta Max.Diária</p>
                    <div className="w-full flex items-center justify-between font-bold text-[14px] p-2 mt-2 mb-3 rounded bg-[#2E2F323D] text-white">
                        <p>+R$200,00</p>
                        <button className="mr-2 px-4 border border-[#2FFE82] rounded-[8px] p-1 bg-[#1B985E]">Salvar</button>
                    </div>
                </div>
                <div className="mt-1 bg-[#151618] w-full p-2 rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="./assets/images/icons/SettingsIcon.svg" />
                            <p className="text-[14px] text-white ml-3 font-bold">STOP LOSS</p>
                        </div>
                        <img src="./assets/images/icons/trash.svg" className="cursor-pointer " />
                    </div>
                    <p className="text-[11px] text-white mt-1 mb-2">Perda Max.Diária</p>
                    <div className="w-full flex items-center justify-between font-bold text-[14px] p-2 mt-2 mb-3 rounded bg-[#2E2F323D] text-white">
                        <p>-R$200,00</p>
                        <button className="mr-2 px-4 border border-[#2FFE82] rounded-[8px] p-1 bg-[#1B985E]">Salvar</button>
                    </div>
                </div>
                <div className="mt-1 bg-[#151618] w-full p-2 rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="./assets/images/icons/SettingsIcon.svg" />
                            <p className="text-[14px] text-white ml-3 font-bold">VALOR DA ENTRADA</p>
                        </div>
                        <img src="./assets/images/icons/trash.svg" className="cursor-pointer " />
                    </div>
                    <p className="text-[11px] text-white mt-1 mb-2">Meta Max.Diária</p>
                    <div className="w-full flex items-center justify-between font-bold text-[14px] p-2 mt-2 mb-3 rounded bg-[#2E2F323D] text-white">
                        <p>R$50,00</p>
                        <button className="mr-2 px-4 border border-[#2FFE82] rounded-[8px] p-1 bg-[#1B985E]">Salvar</button>
                    </div>
                </div>
                <div className="mt-1 bg-[#151618] w-full p-2 rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="./assets/images/icons/SettingsIcon.svg" />
                            <p className="text-[14px] text-white ml-3 font-bold">PAGAMENTO</p>
                        </div>
                        <img src="./assets/images/icons/trash.svg" className="cursor-pointer " />
                    </div>
                    <p className="text-[11px] text-white mt-1 mb-2">Minimo Taxa de pagamento a ser operada</p>
                    <div className="w-full flex items-center justify-between font-bold text-[14px] p-2 mt-2 mb-3 rounded bg-[#2E2F323D] text-white">
                        <p>84%</p>
                        <button className="mr-2 px-4 border border-[#2FFE82] rounded-[8px] p-1 bg-[#1B985E]">Salvar</button>
                    </div>
                </div>
                <div className="mt-1 bg-[#151618] w-full p-2 rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="./assets/images/icons/SettingsIcon.svg" />
                            <p className="text-[14px] text-white ml-3 font-bold">QUANTIDADE MARTIN GALE</p>
                        </div>
                        <img src="./assets/images/icons/trash.svg" className="cursor-pointer " />
                    </div>
                    <p className="text-[11px] text-white mt-1 mb-2">Só pode ser operado  se cilclo de recuperação for desativado</p>
                    <div className="w-full flex items-center justify-between font-bold text-[14px] p-2 mt-2 mb-3 rounded bg-[#2E2F323D] text-white">
                        <p>0</p>
                        <button className="mr-2 px-4 border border-[#2FFE82] rounded-[8px] p-1 bg-[#1B985E]">Salvar</button>
                    </div>
                </div>
                <div className="mt-1 bg-[#151618] w-full p-2 rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="./assets/images/icons/SettingsIcon.svg" />
                            <p className="text-[14px] text-white ml-3 font-bold">FATOR GALE</p>
                        </div>
                        <img src="./assets/images/icons/trash.svg" className="cursor-pointer " />
                    </div>
                    <p className="text-[11px] text-white mt-1 mb-2">Multiplicação sobre as entradas</p>  <div className="w-full flex items-center justify-between font-bold text-[14px] p-2 mt-2 mb-3 rounded bg-[#2E2F323D] text-white">
                        <p>0</p>
                        <button className="mr-2 px-4 border border-[#2FFE82] rounded-[8px] p-1 bg-[#1B985E]">Salvar</button>
                    </div>
                </div>
                <div className="mt-1 bg-[#151618] w-full p-2 rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="./assets/images/icons/SettingsIcon.svg" />
                            <p className="text-[14px] text-white ml-3 font-bold">FATOR CICLO</p>
                        </div>
                        <img src="./assets/images/icons/trash.svg" className="cursor-pointer " />
                    </div>
                    <p className="text-[11px] text-white mt-1 mb-2">Fator de multiplicação em  cicllo</p>
                    <div className="w-full flex items-center justify-between font-bold text-[14px] p-2 mt-2 mb-3 rounded bg-[#2E2F323D] text-white">
                        <p>0</p>
                        <button className="mr-2 px-4 border border-[#2FFE82] rounded-[8px] p-1 bg-[#1B985E]">Salvar</button>
                    </div>
                </div>
                <div className="mt-1 bg-[#151618] w-full p-2 rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="./assets/images/icons/SettingsIcon.svg" />
                            <p className="text-[14px] text-white ml-3 font-bold">QUANTIDADE DE CICLO</p>
                        </div>
                        <img src="./assets/images/icons/trash.svg" className="cursor-pointer " />
                    </div>
                    <p className="text-[11px] text-white mt-1 mb-2">Quatidade de cliclo a ser operada</p>
                    <div className="w-full flex items-center justify-between font-bold text-[14px] p-2 mt-2 mb-3 rounded bg-[#2E2F323D] text-white">
                        <p>0</p>
                        <button className="mr-2 px-4 border border-[#2FFE82] rounded-[8px] p-1 bg-[#1B985E]">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigComponent