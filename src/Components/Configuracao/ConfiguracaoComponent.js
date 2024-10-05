import HeaderComponent from "../HeaderComponent"

const ConfigComponent = () => {
    return (
        <div className="w-full p-2">
            <HeaderComponent title={'CONFIGURAÇOES'} />
            <div className="w-full flex flex-col items-center p-4 rounded-[10px] bg-[#151618]">
                <div className="w-full mt-2 flex justify-center">
                    <img src="./assets/images/icons/UserIcon.svg" />
                </div>
                <div className="flex w-full mt-5 mb-4 gap-3">
                    <div className="w-full">
                        <label className="text-white font-bold text-[13px]">E-mail</label>
                        <input name="mail" className="bg-[#2E2F323D] w-full rounded-[10px] h-[35px]" type="email" />
                    </div>
                    <div className="w-full">
                        <label className="text-white font-bold text-[13px]">Password</label>
                        <input name="mail" className="bg-[#2E2F323D] w-full rounded-[10px] h-[35px]" type="email" />
                    </div>
                    <div className="w-full">
                        <label className="text-white font-bold text-[13px]">Cadastro</label>
                        <input name="mail" className="bg-[#2E2F323D] w-full rounded-[10px] h-[35px]" type="email" />
                    </div>
                </div>
                <div className="w-full">
                    <button className="border text-[white] border-[#2FFE82] bg-[#1B985E] p-1 font-bold w-[250px] rounded-[8px]">Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default ConfigComponent