const LoginPage = () => {
    return (
        <div className="bg-[black]">
            <div className={`bg-[url(../public/assets/images/background.svg)] h-screen w-full flex justify-center items-center`}>
                <div name="form" className="rounded-[25px] border-[#2E2F32] px-6 py-8 border-[1px] bg-[#151618] w-[525px]
                 h-[480px] flex flex-col items-center">
                    <div className="flex justify-center"><img src="./assets/images/logo.svg" /></div>
                    <form className="h-full w-full flex flex-col gap-y-8 mt-7">
                        <div className="flex flex-col gap-y-2">
                            <label for="email" className="text-[15px] text-white">E-mail</label>
                            <input className="w-full text-white h-[50px] rounded-[10px] border-[#2E2F32] border-[1px] bg-[transparent] pl-[10px]" placeholder="E-mail" type="email" name="email" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label for="password" className="text-[15px] text-white">Senha</label>
                            <input className="w-full text-white  h-[50px] rounded-[10px] border-[#2E2F32] border-[1px] bg-[transparent] pl-[10px]" placeholder="Digite sua senha" type="password" name="password" />
                            <div className="mt-4 flex items-center">
                                <input
                                    className="w-5 h-5 rounded-[6px] border-[1px] border-[#2FFE82] bg-[#2FFE823D] appearance-none checked:bg-[#2FFE82] checked:border-[#2FFE82] checked:border-[1px] checked:rounded-[6px]"
                                    type="checkbox"
                                />
                                <p className="ml-3 text-[#848894]">Lembrar de mim</p>
                            </div>
                            <button className="bg-[#2FFE823D] mt-5 h-[45px] rounded-[10px] text-white text-bold border-[1px] border-[#2FFE82]">Iniciar Sessão</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default LoginPage