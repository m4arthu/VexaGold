const CalendaryTable = () => {
    return (
        <div class="container mx-auto px-4 sm:px-8" >
            <div class=" mt-2">
                <div className="flex w-full justify-between">
                    <div className="text-white text-[14px] bg-[#151618] rounded-[15px]">
                        <button className=" selected-buttom p-4 py-2">Hoje</button>
                        <button className="p-4 py-2">Amanhã</button>
                        <button className="p-4 py-2">Esta Semana</button>
                        <button className="p-4 py-2">Proxima Semana</button>
                       
                    </div>
                    <div class="block relative">
                        <input placeholder="Pesquisar"
                            class="appearance-none rounded-[15px]  block pl-4 pr-7 py-2 w-[300px] bg-[#151618] text-sm placeholder-gray-400 text-white" />
                        <span class="h-full absolute inset-y-0 right-2 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="w-full flex py-2 px-5  rounded-[15px] my-4 text-white justify-between bg-[#151618] rouded">
                    <div className="flex gap-3">
                        <img src="./assets/images/oneStars.svg" />
                        <p>Volatividade Esperada Baixa</p>
                    </div>
                    <div className="flex gap-3">
                        <img src="./assets/images/twoStars.svg" />
                        <p>Volatividade Esperada Média</p>
                    </div>
                    <div className="flex gap-3">
                        <img src="./assets/images/threeStars.svg" />
                        <p>Volatividade Esperada Alta</p>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th style={{ borderBottom: "1px solid #2FFE82" }}
                                    class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                    MOEDA
                                </th>
                                <th style={{ borderBottom: "1px solid #2FFE82" }}
                                    class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                    HORA
                                </th>
                                <th style={{ borderBottom: "1px solid #2FFE82" }}
                                    class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                    IMPORTANCIA
                                </th>
                                <th style={{ borderBottom: "1px solid #2FFE82" }}
                                    class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                    EVENTO
                                </th>
                                <th style={{ borderBottom: "1px solid #2FFE82" }}
                                    class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                    ATUAL
                                </th>
                                <th style={{ borderBottom: "1px solid #2FFE82" }}
                                    class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                    PROJEÇÃO
                                </th>
                                <th style={{ borderBottom: "1px solid #2FFE82" }}
                                    class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                    ANTERIOR
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-white font-bold ">
                            <tr className="bg-[#151618]">
                                <td className="flex mt-3 ml-[-15px] justify-center">
                                    <img src="./assets/images/icons/Alemanha.svg" />
                                </td>
                                <td>
                                    <p className="flex justify-center ">1:00</p>
                                </td>
                                <td>
                                    <img src="./assets/images/twoStars.svg" />
                                </td>
                                <td className="max-w-[300px]">
                                    <p className="max-w-[300px] text-[14px]">
                                        Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
                                    </p>
                                </td>
                                <td>
                                    <p className="flex justify-center">5,58%</p>
                                </td>
                                <td>
                                    <p className="flex justify-center">3,58%</p>
                                </td>
                                <td className="flex justify-center">5,58%</td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="px-5 w-full justify-between items-center py-2 bg-[#151618] border-t flex gap-2">
                        <div class="flex gap-3 mt-2 xs:mt-0">
                            <button
                                class=" bg-[#2E2F323D]   py-2 px-4  mb-2 rounded">
                                <div className="flex items-center gap-2">
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 1L1.5 6L6.5 11" stroke="#F6F7FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className="text-white text-[13px]">Anterior</p>

                                </div>
                            </button>
                            <button
                                class=" bg-[#2E2F323D]   py-2 px-4 mb-2 rounded">
                                <div className="flex items-center gap-2">
                                    <p className="text-white text-[13px]">Proximo</p>
                                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L6 6L1 1" stroke="#F6F7FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </button>
                        </div>
                        <span class="text-xs  text-white">
                            Pagina 1 de 10
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendaryTable