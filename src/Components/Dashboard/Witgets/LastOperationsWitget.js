const LastOperationWitget = () => {
    return (
        <div className="w-full md:max-w-[40%] w-full text-white h-[300px] bg-[url(../public/assets/images/backgroundWitget.svg)]">
            <div className="flex items-center">
                <h1 className="font-bold text-[18px] py-3 px-2">Status:</h1>
                <div className="flex items-center p-2 justify-center border-[#DB4831] border-[1px] bg-[#DB48313D] w-[150px] rounded-[15px] h-[35px]">
                    <h1 className="font-bold text-[14px] py-3 px-2">DESLIGADO</h1>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="17" r="5" fill="#DB4831" />
                        <circle cx="16" cy="17" r="7.6" stroke="#DB4831" stroke-width="0.8" />
                        <circle cx="16" cy="17" r="10.8" stroke="#DB4831" stroke-width="0.4" />
                        <circle cx="16" cy="17" r="13.9" stroke="#DB4831" stroke-width="0.2" />
                    </svg>

                </div>
            </div>
            <div style={{ border: "1px solid #2FFE82" }} className="flex items-center p-2 justify-center  bg-[#2FFE823D] w-full rounded-[10px] h-[35px]">
                <h1 className="font-bold text-[14px] py-3 px-2">INICIAR</h1>
            </div>
            <h1 className="font-bold text-[13px] py-3 px-2">ULTIMAS OPERAÇÕES</h1>

            <div style={{ scrollbarWidth: "none" }} className="w-full flex text-white flex-col overflow-y-auto max-h-[57%] gap-3">
                <div style={{ border: "1px solid #2FFE82" }} className="flex items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className="relative w-[50%] flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1>JPY/BRL</h1>
                            <div className="flex text-[10px]">
                                R$ 25,00
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0926 5.74162C9.93546 5.5869 9.72241 5.5 9.50028 5.5C9.27815 5.5 9.0651 5.5869 8.90793 5.74162L5.74559 8.8569C5.58834 9.01189 5.5 9.2221 5.5 9.44129C5.5 9.66048 5.58834 9.87069 5.74559 10.0257C5.90284 10.1807 6.11611 10.2677 6.33849 10.2677C6.56088 10.2677 6.77415 10.1807 6.9314 10.0257L8.66205 8.32043V14.6738C8.66205 14.8929 8.75037 15.1031 8.90756 15.258C9.06476 15.413 9.27797 15.5 9.50028 15.5C9.72259 15.5 9.9358 15.413 10.093 15.258C10.2502 15.1031 10.3385 14.8929 10.3385 14.6738V8.32043L12.0686 10.0257C12.1465 10.1024 12.2389 10.1633 12.3406 10.2048C12.4424 10.2464 12.5514 10.2677 12.6615 10.2677C12.7716 10.2677 12.8807 10.2464 12.9824 10.2048C13.0841 10.1633 13.1765 10.1024 13.2544 10.0257C13.3323 9.94894 13.394 9.85783 13.4362 9.75756C13.4783 9.65729 13.5 9.54982 13.5 9.44129C13.5 9.33276 13.4783 9.22529 13.4362 9.12502C13.394 9.02475 13.3323 8.93364 13.2544 8.8569L10.0926 5.74162Z" fill="#1B985E" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <img className="absolute top-0 right-3" src="assets/images/icons/otcIcon.svg" />
                    </div>
                </div>
                <div style={{ border: "1px solid #2FFE82" }} className="flex items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className="relative w-[50%] flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1>JPY/BRL</h1>
                            <div className="flex text-[10px]">
                                R$ 25,00
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0926 5.74162C9.93546 5.5869 9.72241 5.5 9.50028 5.5C9.27815 5.5 9.0651 5.5869 8.90793 5.74162L5.74559 8.8569C5.58834 9.01189 5.5 9.2221 5.5 9.44129C5.5 9.66048 5.58834 9.87069 5.74559 10.0257C5.90284 10.1807 6.11611 10.2677 6.33849 10.2677C6.56088 10.2677 6.77415 10.1807 6.9314 10.0257L8.66205 8.32043V14.6738C8.66205 14.8929 8.75037 15.1031 8.90756 15.258C9.06476 15.413 9.27797 15.5 9.50028 15.5C9.72259 15.5 9.9358 15.413 10.093 15.258C10.2502 15.1031 10.3385 14.8929 10.3385 14.6738V8.32043L12.0686 10.0257C12.1465 10.1024 12.2389 10.1633 12.3406 10.2048C12.4424 10.2464 12.5514 10.2677 12.6615 10.2677C12.7716 10.2677 12.8807 10.2464 12.9824 10.2048C13.0841 10.1633 13.1765 10.1024 13.2544 10.0257C13.3323 9.94894 13.394 9.85783 13.4362 9.75756C13.4783 9.65729 13.5 9.54982 13.5 9.44129C13.5 9.33276 13.4783 9.22529 13.4362 9.12502C13.394 9.02475 13.3323 8.93364 13.2544 8.8569L10.0926 5.74162Z" fill="#1B985E" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <img className="absolute top-0 right-3" src="assets/images/icons/otcIcon.svg" />
                    </div>
                </div>
                <div style={{ border: "1px solid #DB4831" }} className="flex items-center py-4 pl-3  bg-[#DB48313D] w-full rounded-[10px] h-[47px]">
                    <div className="relative w-[50%] flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1>JPY/BRL</h1>
                            <div className="flex text-[10px]">
                                R$ 25,00
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.90737 15.2584C9.06454 15.4131 9.27759 15.5 9.49972 15.5C9.72185 15.5 9.9349 15.4131 10.0921 15.2584L13.2544 12.1431C13.4117 11.9881 13.5 11.7779 13.5 11.5587C13.5 11.3395 13.4117 11.1293 13.2544 10.9743C13.0972 10.8193 12.8839 10.7323 12.6615 10.7323C12.4391 10.7323 12.2258 10.8193 12.0686 10.9743L10.3379 12.6796L10.3379 6.32619C10.3379 6.10707 10.2496 5.89693 10.0924 5.74199C9.93524 5.58705 9.72203 5.5 9.49972 5.5C9.27741 5.5 9.0642 5.58705 8.90701 5.74198C8.74981 5.89693 8.6615 6.10707 8.6615 6.32619L8.66149 12.6796L6.9314 10.9743C6.85354 10.8976 6.7611 10.8367 6.65937 10.7952C6.55764 10.7536 6.44861 10.7323 6.33849 10.7323C6.22838 10.7323 6.11935 10.7536 6.01762 10.7952C5.91588 10.8367 5.82345 10.8976 5.74559 10.9743C5.66773 11.0511 5.60596 11.1422 5.56383 11.2424C5.52169 11.3427 5.5 11.4502 5.5 11.5587C5.5 11.6672 5.52169 11.7747 5.56383 11.875C5.60596 11.9752 5.66773 12.0664 5.74559 12.1431L8.90737 15.2584Z" fill="#DB4831" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <img className="absolute top-0 right-3" src="assets/images/icons/otcIcon.svg" />
                    </div>
                </div>
                <div style={{ border: "1px solid #2FFE82" }} className="flex items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className="relative w-[50%] flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1>JPY/BRL</h1>
                            <div className="flex text-[10px]">
                                R$ 25,00
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0926 5.74162C9.93546 5.5869 9.72241 5.5 9.50028 5.5C9.27815 5.5 9.0651 5.5869 8.90793 5.74162L5.74559 8.8569C5.58834 9.01189 5.5 9.2221 5.5 9.44129C5.5 9.66048 5.58834 9.87069 5.74559 10.0257C5.90284 10.1807 6.11611 10.2677 6.33849 10.2677C6.56088 10.2677 6.77415 10.1807 6.9314 10.0257L8.66205 8.32043V14.6738C8.66205 14.8929 8.75037 15.1031 8.90756 15.258C9.06476 15.413 9.27797 15.5 9.50028 15.5C9.72259 15.5 9.9358 15.413 10.093 15.258C10.2502 15.1031 10.3385 14.8929 10.3385 14.6738V8.32043L12.0686 10.0257C12.1465 10.1024 12.2389 10.1633 12.3406 10.2048C12.4424 10.2464 12.5514 10.2677 12.6615 10.2677C12.7716 10.2677 12.8807 10.2464 12.9824 10.2048C13.0841 10.1633 13.1765 10.1024 13.2544 10.0257C13.3323 9.94894 13.394 9.85783 13.4362 9.75756C13.4783 9.65729 13.5 9.54982 13.5 9.44129C13.5 9.33276 13.4783 9.22529 13.4362 9.12502C13.394 9.02475 13.3323 8.93364 13.2544 8.8569L10.0926 5.74162Z" fill="#1B985E" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <img className="absolute top-0 right-3" src="assets/images/icons/otcIcon.svg" />
                    </div>
                </div>
                <div style={{ border: "1px solid #2FFE82" }} className="flex items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className="relative w-[50%] flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1>JPY/BRL</h1>
                            <div className="flex text-[10px]">
                                R$ 25,00
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0926 5.74162C9.93546 5.5869 9.72241 5.5 9.50028 5.5C9.27815 5.5 9.0651 5.5869 8.90793 5.74162L5.74559 8.8569C5.58834 9.01189 5.5 9.2221 5.5 9.44129C5.5 9.66048 5.58834 9.87069 5.74559 10.0257C5.90284 10.1807 6.11611 10.2677 6.33849 10.2677C6.56088 10.2677 6.77415 10.1807 6.9314 10.0257L8.66205 8.32043V14.6738C8.66205 14.8929 8.75037 15.1031 8.90756 15.258C9.06476 15.413 9.27797 15.5 9.50028 15.5C9.72259 15.5 9.9358 15.413 10.093 15.258C10.2502 15.1031 10.3385 14.8929 10.3385 14.6738V8.32043L12.0686 10.0257C12.1465 10.1024 12.2389 10.1633 12.3406 10.2048C12.4424 10.2464 12.5514 10.2677 12.6615 10.2677C12.7716 10.2677 12.8807 10.2464 12.9824 10.2048C13.0841 10.1633 13.1765 10.1024 13.2544 10.0257C13.3323 9.94894 13.394 9.85783 13.4362 9.75756C13.4783 9.65729 13.5 9.54982 13.5 9.44129C13.5 9.33276 13.4783 9.22529 13.4362 9.12502C13.394 9.02475 13.3323 8.93364 13.2544 8.8569L10.0926 5.74162Z" fill="#1B985E" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <img className="absolute top-0 right-3" src="assets/images/icons/otcIcon.svg" />
                    </div>
                </div>
                <div style={{ border: "1px solid #2FFE82" }} className="flex items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className="relative w-[50%] flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1>JPY/BRL</h1>
                            <div className="flex text-[10px]">
                                R$ 25,00
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0926 5.74162C9.93546 5.5869 9.72241 5.5 9.50028 5.5C9.27815 5.5 9.0651 5.5869 8.90793 5.74162L5.74559 8.8569C5.58834 9.01189 5.5 9.2221 5.5 9.44129C5.5 9.66048 5.58834 9.87069 5.74559 10.0257C5.90284 10.1807 6.11611 10.2677 6.33849 10.2677C6.56088 10.2677 6.77415 10.1807 6.9314 10.0257L8.66205 8.32043V14.6738C8.66205 14.8929 8.75037 15.1031 8.90756 15.258C9.06476 15.413 9.27797 15.5 9.50028 15.5C9.72259 15.5 9.9358 15.413 10.093 15.258C10.2502 15.1031 10.3385 14.8929 10.3385 14.6738V8.32043L12.0686 10.0257C12.1465 10.1024 12.2389 10.1633 12.3406 10.2048C12.4424 10.2464 12.5514 10.2677 12.6615 10.2677C12.7716 10.2677 12.8807 10.2464 12.9824 10.2048C13.0841 10.1633 13.1765 10.1024 13.2544 10.0257C13.3323 9.94894 13.394 9.85783 13.4362 9.75756C13.4783 9.65729 13.5 9.54982 13.5 9.44129C13.5 9.33276 13.4783 9.22529 13.4362 9.12502C13.394 9.02475 13.3323 8.93364 13.2544 8.8569L10.0926 5.74162Z" fill="#1B985E" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <img className="absolute top-0 right-3" src="assets/images/icons/otcIcon.svg" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LastOperationWitget