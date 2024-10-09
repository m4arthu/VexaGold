const SignalsWitget = () => {
    return (
        <div className="max-w-[20%]  w-full pl-3 pt-3">
            <h1 className="my-3 font-bold text-white">SINAIS ATUALIZADOS</h1>
            <div className="flex flex-col gap-4 max-h-[85%] min-h-[85%] overflow-y-auto">

                <div style={{ border: "1px solid #2FFE82" }} className="flex  relative items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className=" w-[50%] text-white flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1 className="text-[12px]">JPY/BRL</h1>
                            <div className="flex items-center gap-1 text-[10px]">
                                VENDA
                                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="20" height="20" rx="10" fill="#DB4831" />
                                    <path d="M9.40737 15.2584C9.56454 15.4131 9.77759 15.5 9.99972 15.5C10.2219 15.5 10.4349 15.4131 10.5921 15.2584L13.7544 12.1431C13.9117 11.9881 14 11.7779 14 11.5587C14 11.3395 13.9117 11.1293 13.7544 10.9743C13.5972 10.8193 13.3839 10.7323 13.1615 10.7323C12.9391 10.7323 12.7258 10.8193 12.5686 10.9743L10.8379 12.6796L10.8379 6.32619C10.8379 6.10707 10.7496 5.89693 10.5924 5.74199C10.4352 5.58705 10.222 5.5 9.99972 5.5C9.77741 5.5 9.5642 5.58705 9.40701 5.74198C9.24981 5.89693 9.1615 6.10707 9.1615 6.32619L9.16149 12.6796L7.4314 10.9743C7.35354 10.8976 7.2611 10.8367 7.15937 10.7952C7.05764 10.7536 6.94861 10.7323 6.83849 10.7323C6.72838 10.7323 6.61935 10.7536 6.51762 10.7952C6.41588 10.8367 6.32345 10.8976 6.24559 10.9743C6.16773 11.0511 6.10596 11.1422 6.06383 11.2424C6.02169 11.3427 6 11.4502 6 11.5587C6 11.6672 6.02169 11.7747 6.06383 11.875C6.10596 11.9752 6.16773 12.0664 6.24559 12.1431L9.40737 15.2584Z" fill="#F6F7FA" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <div className="absolute top-1 flex gap-1 right-2" >
                            <p className="text-[12px]">9:48</p>
                            <img src="assets/images/icons/AlarmIcon.svg" />
                        </div>
                        <img width="40px" className="absolute top-1 right-14 mr-2" src="assets/images/icons/otcIcon.svg" />
                        <p className=" text-[11px] font-bold absolute bottom-1 right-2">M5</p>
                    </div>
                </div>

                <div style={{ border: "1px solid #DB4831" }} className="flex  relative items-center py-4 pl-3  bg-[#DB48313D] w-full rounded-[10px] h-[47px]">
                    <div className=" w-[50%] text-white flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1 className="text-[12px]">JPY/BRL</h1>
                            <div className="flex items-center gap-1 text-[10px]">
                                Compra
                                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="20" y="20.5" width="20" height="20" rx="10" transform="rotate(180 20 20.5)" fill="#2FFE82" />
                                    <path d="M10.5926 5.74162C10.4355 5.5869 10.2224 5.5 10.0003 5.5C9.77815 5.5 9.5651 5.5869 9.40793 5.74162L6.24559 8.8569C6.08834 9.01189 6 9.2221 6 9.44129C6 9.66048 6.08834 9.87069 6.24559 10.0257C6.40284 10.1807 6.61611 10.2677 6.83849 10.2677C7.06088 10.2677 7.27415 10.1807 7.4314 10.0257L9.16205 8.32043V14.6738C9.16205 14.8929 9.25037 15.1031 9.40757 15.258C9.56476 15.413 9.77797 15.5 10.0003 15.5C10.2226 15.5 10.4358 15.413 10.593 15.258C10.7502 15.1031 10.8385 14.8929 10.8385 14.6738V8.32043L12.5686 10.0257C12.6465 10.1024 12.7389 10.1633 12.8406 10.2048C12.9424 10.2464 13.0514 10.2677 13.1615 10.2677C13.2716 10.2677 13.3807 10.2464 13.4824 10.2048C13.5841 10.1633 13.6766 10.1024 13.7544 10.0257C13.8323 9.94894 13.894 9.85783 13.9362 9.75756C13.9783 9.65729 14 9.54982 14 9.44129C14 9.33276 13.9783 9.22529 13.9362 9.12502C13.894 9.02475 13.8323 8.93364 13.7544 8.8569L10.5926 5.74162Z" fill="#F6F7FA" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <div className="absolute top-1 flex gap-1 right-2" >
                            <p className="text-[12px]">9:48</p>
                            <img src="assets/images/icons/AlarmIcon.svg" />
                        </div>
                        <img width="40px" className="absolute top-1 right-14 mr-2" src="assets/images/icons/otcIcon.svg" />
                        <p className=" text-[11px] font-bold absolute bottom-1 right-2">M5</p>
                    </div>
                </div>
                <div style={{ border: "1px solid #DB4831" }} className="flex  relative items-center py-4 pl-3  bg-[#DB48313D] w-full rounded-[10px] h-[47px]">
                    <div className=" w-[50%] text-white flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1 className="text-[12px]">JPY/BRL</h1>
                            <div className="flex items-center gap-1 text-[10px]">
                                Compra
                                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="20" y="20.5" width="20" height="20" rx="10" transform="rotate(180 20 20.5)" fill="#2FFE82" />
                                    <path d="M10.5926 5.74162C10.4355 5.5869 10.2224 5.5 10.0003 5.5C9.77815 5.5 9.5651 5.5869 9.40793 5.74162L6.24559 8.8569C6.08834 9.01189 6 9.2221 6 9.44129C6 9.66048 6.08834 9.87069 6.24559 10.0257C6.40284 10.1807 6.61611 10.2677 6.83849 10.2677C7.06088 10.2677 7.27415 10.1807 7.4314 10.0257L9.16205 8.32043V14.6738C9.16205 14.8929 9.25037 15.1031 9.40757 15.258C9.56476 15.413 9.77797 15.5 10.0003 15.5C10.2226 15.5 10.4358 15.413 10.593 15.258C10.7502 15.1031 10.8385 14.8929 10.8385 14.6738V8.32043L12.5686 10.0257C12.6465 10.1024 12.7389 10.1633 12.8406 10.2048C12.9424 10.2464 13.0514 10.2677 13.1615 10.2677C13.2716 10.2677 13.3807 10.2464 13.4824 10.2048C13.5841 10.1633 13.6766 10.1024 13.7544 10.0257C13.8323 9.94894 13.894 9.85783 13.9362 9.75756C13.9783 9.65729 14 9.54982 14 9.44129C14 9.33276 13.9783 9.22529 13.9362 9.12502C13.894 9.02475 13.8323 8.93364 13.7544 8.8569L10.5926 5.74162Z" fill="#F6F7FA" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <div className="absolute top-1 flex gap-1 right-2" >
                            <p className="text-[12px]">9:48</p>
                            <img src="assets/images/icons/AlarmIcon.svg" />
                        </div>
                        <img width="40px" className="absolute top-1 right-14 mr-2" src="assets/images/icons/otcIcon.svg" />
                        <p className=" text-[11px] font-bold absolute bottom-1 right-2">M5</p>
                    </div>
                </div>
                <div style={{ border: "1px solid #2FFE82" }} className="flex  relative items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className=" w-[50%] text-white flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1 className="text-[12px]">JPY/BRL</h1>
                            <div className="flex items-center gap-1 text-[10px]">
                                VENDA
                                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="20" height="20" rx="10" fill="#DB4831" />
                                    <path d="M9.40737 15.2584C9.56454 15.4131 9.77759 15.5 9.99972 15.5C10.2219 15.5 10.4349 15.4131 10.5921 15.2584L13.7544 12.1431C13.9117 11.9881 14 11.7779 14 11.5587C14 11.3395 13.9117 11.1293 13.7544 10.9743C13.5972 10.8193 13.3839 10.7323 13.1615 10.7323C12.9391 10.7323 12.7258 10.8193 12.5686 10.9743L10.8379 12.6796L10.8379 6.32619C10.8379 6.10707 10.7496 5.89693 10.5924 5.74199C10.4352 5.58705 10.222 5.5 9.99972 5.5C9.77741 5.5 9.5642 5.58705 9.40701 5.74198C9.24981 5.89693 9.1615 6.10707 9.1615 6.32619L9.16149 12.6796L7.4314 10.9743C7.35354 10.8976 7.2611 10.8367 7.15937 10.7952C7.05764 10.7536 6.94861 10.7323 6.83849 10.7323C6.72838 10.7323 6.61935 10.7536 6.51762 10.7952C6.41588 10.8367 6.32345 10.8976 6.24559 10.9743C6.16773 11.0511 6.10596 11.1422 6.06383 11.2424C6.02169 11.3427 6 11.4502 6 11.5587C6 11.6672 6.02169 11.7747 6.06383 11.875C6.10596 11.9752 6.16773 12.0664 6.24559 12.1431L9.40737 15.2584Z" fill="#F6F7FA" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <div className="absolute top-1 flex gap-1 right-2" >
                            <p className="text-[12px]">9:48</p>
                            <img src="assets/images/icons/AlarmIcon.svg" />
                        </div>
                        <img width="40px" className="absolute top-1 right-14 mr-2" src="assets/images/icons/otcIcon.svg" />
                        <p className=" text-[11px] font-bold absolute bottom-1 right-2">M5</p>
                    </div>
                </div>

                <div style={{ border: "1px solid #2FFE82" }} className="flex  relative items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className=" w-[50%] text-white flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1 className="text-[12px]">JPY/BRL</h1>
                            <div className="flex items-center gap-1 text-[10px]">
                                VENDA
                                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="20" height="20" rx="10" fill="#DB4831" />
                                    <path d="M9.40737 15.2584C9.56454 15.4131 9.77759 15.5 9.99972 15.5C10.2219 15.5 10.4349 15.4131 10.5921 15.2584L13.7544 12.1431C13.9117 11.9881 14 11.7779 14 11.5587C14 11.3395 13.9117 11.1293 13.7544 10.9743C13.5972 10.8193 13.3839 10.7323 13.1615 10.7323C12.9391 10.7323 12.7258 10.8193 12.5686 10.9743L10.8379 12.6796L10.8379 6.32619C10.8379 6.10707 10.7496 5.89693 10.5924 5.74199C10.4352 5.58705 10.222 5.5 9.99972 5.5C9.77741 5.5 9.5642 5.58705 9.40701 5.74198C9.24981 5.89693 9.1615 6.10707 9.1615 6.32619L9.16149 12.6796L7.4314 10.9743C7.35354 10.8976 7.2611 10.8367 7.15937 10.7952C7.05764 10.7536 6.94861 10.7323 6.83849 10.7323C6.72838 10.7323 6.61935 10.7536 6.51762 10.7952C6.41588 10.8367 6.32345 10.8976 6.24559 10.9743C6.16773 11.0511 6.10596 11.1422 6.06383 11.2424C6.02169 11.3427 6 11.4502 6 11.5587C6 11.6672 6.02169 11.7747 6.06383 11.875C6.10596 11.9752 6.16773 12.0664 6.24559 12.1431L9.40737 15.2584Z" fill="#F6F7FA" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <div className="absolute top-1 flex gap-1 right-2" >
                            <p className="text-[12px]">9:48</p>
                            <img src="assets/images/icons/AlarmIcon.svg" />
                        </div>
                        <img width="40px" className="absolute top-1 right-14 mr-2" src="assets/images/icons/otcIcon.svg" />
                        <p className=" text-[11px] font-bold absolute bottom-1 right-2">M5</p>
                    </div>
                </div>
                <div style={{ border: "1px solid #2FFE82" }} className="flex  relative items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className=" w-[50%] text-white flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1 className="text-[12px]">JPY/BRL</h1>
                            <div className="flex items-center gap-1 text-[10px]">
                                VENDA
                                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="20" height="20" rx="10" fill="#DB4831" />
                                    <path d="M9.40737 15.2584C9.56454 15.4131 9.77759 15.5 9.99972 15.5C10.2219 15.5 10.4349 15.4131 10.5921 15.2584L13.7544 12.1431C13.9117 11.9881 14 11.7779 14 11.5587C14 11.3395 13.9117 11.1293 13.7544 10.9743C13.5972 10.8193 13.3839 10.7323 13.1615 10.7323C12.9391 10.7323 12.7258 10.8193 12.5686 10.9743L10.8379 12.6796L10.8379 6.32619C10.8379 6.10707 10.7496 5.89693 10.5924 5.74199C10.4352 5.58705 10.222 5.5 9.99972 5.5C9.77741 5.5 9.5642 5.58705 9.40701 5.74198C9.24981 5.89693 9.1615 6.10707 9.1615 6.32619L9.16149 12.6796L7.4314 10.9743C7.35354 10.8976 7.2611 10.8367 7.15937 10.7952C7.05764 10.7536 6.94861 10.7323 6.83849 10.7323C6.72838 10.7323 6.61935 10.7536 6.51762 10.7952C6.41588 10.8367 6.32345 10.8976 6.24559 10.9743C6.16773 11.0511 6.10596 11.1422 6.06383 11.2424C6.02169 11.3427 6 11.4502 6 11.5587C6 11.6672 6.02169 11.7747 6.06383 11.875C6.10596 11.9752 6.16773 12.0664 6.24559 12.1431L9.40737 15.2584Z" fill="#F6F7FA" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <div className="absolute top-1 flex gap-1 right-2" >
                            <p className="text-[12px]">9:48</p>
                            <img src="assets/images/icons/AlarmIcon.svg" />
                        </div>
                        <img width="40px" className="absolute top-1 right-14 mr-2" src="assets/images/icons/otcIcon.svg" />
                        <p className=" text-[11px] font-bold absolute bottom-1 right-2">M5</p>
                    </div>
                </div>
                <div style={{ border: "1px solid #2FFE82" }} className="flex  relative items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className=" w-[50%] text-white flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1 className="text-[12px]">JPY/BRL</h1>
                            <div className="flex items-center gap-1 text-[10px]">
                                VENDA
                                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="20" height="20" rx="10" fill="#DB4831" />
                                    <path d="M9.40737 15.2584C9.56454 15.4131 9.77759 15.5 9.99972 15.5C10.2219 15.5 10.4349 15.4131 10.5921 15.2584L13.7544 12.1431C13.9117 11.9881 14 11.7779 14 11.5587C14 11.3395 13.9117 11.1293 13.7544 10.9743C13.5972 10.8193 13.3839 10.7323 13.1615 10.7323C12.9391 10.7323 12.7258 10.8193 12.5686 10.9743L10.8379 12.6796L10.8379 6.32619C10.8379 6.10707 10.7496 5.89693 10.5924 5.74199C10.4352 5.58705 10.222 5.5 9.99972 5.5C9.77741 5.5 9.5642 5.58705 9.40701 5.74198C9.24981 5.89693 9.1615 6.10707 9.1615 6.32619L9.16149 12.6796L7.4314 10.9743C7.35354 10.8976 7.2611 10.8367 7.15937 10.7952C7.05764 10.7536 6.94861 10.7323 6.83849 10.7323C6.72838 10.7323 6.61935 10.7536 6.51762 10.7952C6.41588 10.8367 6.32345 10.8976 6.24559 10.9743C6.16773 11.0511 6.10596 11.1422 6.06383 11.2424C6.02169 11.3427 6 11.4502 6 11.5587C6 11.6672 6.02169 11.7747 6.06383 11.875C6.10596 11.9752 6.16773 12.0664 6.24559 12.1431L9.40737 15.2584Z" fill="#F6F7FA" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <div className="absolute top-1 flex gap-1 right-2" >
                            <p className="text-[12px]">9:48</p>
                            <img src="assets/images/icons/AlarmIcon.svg" />
                        </div>
                        <img width="40px" className="absolute top-1 right-14 mr-2" src="assets/images/icons/otcIcon.svg" />
                        <p className=" text-[11px] font-bold absolute bottom-1 right-2">M5</p>
                    </div>
                </div>
                <div style={{ border: "1px solid #2FFE82" }} className="flex  relative items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className=" w-[50%] text-white flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1 className="text-[12px]">JPY/BRL</h1>
                            <div className="flex items-center gap-1 text-[10px]">
                                VENDA
                                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="20" height="20" rx="10" fill="#DB4831" />
                                    <path d="M9.40737 15.2584C9.56454 15.4131 9.77759 15.5 9.99972 15.5C10.2219 15.5 10.4349 15.4131 10.5921 15.2584L13.7544 12.1431C13.9117 11.9881 14 11.7779 14 11.5587C14 11.3395 13.9117 11.1293 13.7544 10.9743C13.5972 10.8193 13.3839 10.7323 13.1615 10.7323C12.9391 10.7323 12.7258 10.8193 12.5686 10.9743L10.8379 12.6796L10.8379 6.32619C10.8379 6.10707 10.7496 5.89693 10.5924 5.74199C10.4352 5.58705 10.222 5.5 9.99972 5.5C9.77741 5.5 9.5642 5.58705 9.40701 5.74198C9.24981 5.89693 9.1615 6.10707 9.1615 6.32619L9.16149 12.6796L7.4314 10.9743C7.35354 10.8976 7.2611 10.8367 7.15937 10.7952C7.05764 10.7536 6.94861 10.7323 6.83849 10.7323C6.72838 10.7323 6.61935 10.7536 6.51762 10.7952C6.41588 10.8367 6.32345 10.8976 6.24559 10.9743C6.16773 11.0511 6.10596 11.1422 6.06383 11.2424C6.02169 11.3427 6 11.4502 6 11.5587C6 11.6672 6.02169 11.7747 6.06383 11.875C6.10596 11.9752 6.16773 12.0664 6.24559 12.1431L9.40737 15.2584Z" fill="#F6F7FA" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <div className="absolute top-1 flex gap-1 right-2" >
                            <p className="text-[12px]">9:48</p>
                            <img src="assets/images/icons/AlarmIcon.svg" />
                        </div>
                        <img width="40px" className="absolute top-1 right-14 mr-2" src="assets/images/icons/otcIcon.svg" />
                        <p className=" text-[11px] font-bold absolute bottom-1 right-2">M5</p>
                    </div>
                </div>
                <div style={{ border: "1px solid #2FFE82" }} className="flex  relative items-center py-4 pl-3  bg-[#2FFE823D] w-full rounded-[10px] h-[47px]">
                    <div className=" w-[50%] text-white flex">
                        <img src="assets/images/icons/brlJpy.svg" />
                        <div className="ml-2">
                            <h1 className="text-[12px]">JPY/BRL</h1>
                            <div className="flex items-center gap-1 text-[10px]">
                                VENDA
                                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="20" height="20" rx="10" fill="#DB4831" />
                                    <path d="M9.40737 15.2584C9.56454 15.4131 9.77759 15.5 9.99972 15.5C10.2219 15.5 10.4349 15.4131 10.5921 15.2584L13.7544 12.1431C13.9117 11.9881 14 11.7779 14 11.5587C14 11.3395 13.9117 11.1293 13.7544 10.9743C13.5972 10.8193 13.3839 10.7323 13.1615 10.7323C12.9391 10.7323 12.7258 10.8193 12.5686 10.9743L10.8379 12.6796L10.8379 6.32619C10.8379 6.10707 10.7496 5.89693 10.5924 5.74199C10.4352 5.58705 10.222 5.5 9.99972 5.5C9.77741 5.5 9.5642 5.58705 9.40701 5.74198C9.24981 5.89693 9.1615 6.10707 9.1615 6.32619L9.16149 12.6796L7.4314 10.9743C7.35354 10.8976 7.2611 10.8367 7.15937 10.7952C7.05764 10.7536 6.94861 10.7323 6.83849 10.7323C6.72838 10.7323 6.61935 10.7536 6.51762 10.7952C6.41588 10.8367 6.32345 10.8976 6.24559 10.9743C6.16773 11.0511 6.10596 11.1422 6.06383 11.2424C6.02169 11.3427 6 11.4502 6 11.5587C6 11.6672 6.02169 11.7747 6.06383 11.875C6.10596 11.9752 6.16773 12.0664 6.24559 12.1431L9.40737 15.2584Z" fill="#F6F7FA" />
                                </svg>
                                <p>89%</p>
                            </div>
                        </div>
                        <div className="absolute top-1 flex gap-1 right-2" >
                            <p className="text-[12px]">9:48</p>
                            <img src="assets/images/icons/AlarmIcon.svg" />
                        </div>
                        <img width="40px" className="absolute top-1 right-14 mr-2" src="assets/images/icons/otcIcon.svg" />
                        <p className=" text-[11px] font-bold absolute bottom-1 right-2">M5</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignalsWitget