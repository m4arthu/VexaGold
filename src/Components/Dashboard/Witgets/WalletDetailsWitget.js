const WalletDetailsWitget = () => {
    return (
        <div className="md:w-[57%] mt-3 md:mt-0 md:mr-3">
            <div className="relative   flex justify-center items-center w-full rounded-[5px] h-[40px] bg-[#151618]">
                <div className="flex items-center">
                    <h1 className="text-white text-[15px] font-bold">CARTEIRA DE TREINAMENTO</h1>
                    <svg className="ml-2" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.1453 1.45659L16.2479 15.0342C16.0293 15.9924 15.4592 16.2309 14.6492 15.7795L10.2345 12.5469L8.10431 14.5827C7.86857 14.817 7.67141 15.0129 7.21708 15.0129L7.53426 10.5452L15.7164 3.19851C16.0722 2.88334 15.6393 2.70873 15.1635 3.02389L5.04832 9.35271L0.693648 7.99836C-0.25358 7.70449 -0.270724 7.05713 0.890808 6.60568L17.9238 0.0852048C18.7124 -0.208664 19.4025 0.259822 19.1453 1.45659Z" fill="#1B985E" />
                    </svg>
                </div>
                <svg className="absolute right-[10px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.30691 5.24661C0.21217 5.3393 0.136182 5.45108 0.0834777 5.57528C0.0307737 5.69948 0.00243401 5.83356 0.000149584 5.9695C-0.00213485 6.10545 0.0216826 6.24049 0.070181 6.36657C0.118679 6.49264 0.190865 6.60717 0.282432 6.70331C0.373999 6.79946 0.483072 6.87525 0.603142 6.92618C0.723213 6.9771 0.851821 7.00211 0.981296 6.99971C1.11077 6.99731 1.23846 6.96755 1.35675 6.91221C1.47503 6.85687 1.58149 6.77709 1.66977 6.67761L3.8812 4.35561L3.8812 16.0871C3.8812 16.3556 3.98279 16.6132 4.16363 16.8031C4.34447 16.9929 4.58974 17.0996 4.84548 17.0996C5.10123 17.0996 5.3465 16.9929 5.52734 16.8031C5.70817 16.6132 5.80977 16.3556 5.80977 16.0871L5.80977 4.35561L8.0212 6.67761C8.10948 6.77709 8.21593 6.85687 8.33422 6.91221C8.4525 6.96755 8.58019 6.99731 8.70967 6.99971C8.83914 7.00211 8.96775 6.9771 9.08782 6.92617C9.20789 6.87525 9.31696 6.79946 9.40853 6.70331C9.5001 6.60716 9.57228 6.49264 9.62078 6.36657C9.66928 6.24049 9.6931 6.10545 9.69081 5.9695C9.68853 5.83355 9.66019 5.69948 9.60749 5.57528C9.55478 5.45108 9.47879 5.3393 9.38405 5.24661L5.52691 1.19661C5.34611 1.007 5.10102 0.900499 4.84548 0.900499C4.58995 0.900499 4.34486 1.007 4.16405 1.19661L0.30691 5.24661ZM10.0269 11.3216C9.93863 11.2221 9.83217 11.1423 9.71389 11.087C9.5956 11.0317 9.46791 11.0019 9.33844 10.9995C9.20896 10.9971 9.08036 11.0221 8.96028 11.073C8.84021 11.124 8.73114 11.1998 8.63958 11.2959C8.54801 11.3921 8.47582 11.5066 8.42732 11.6327C8.37882 11.7587 8.35501 11.8938 8.35729 12.0297C8.35958 12.1657 8.38792 12.2997 8.44062 12.4239C8.49332 12.5481 8.56931 12.6599 8.66405 12.7526L12.5212 16.8026C12.702 16.9922 12.9471 17.0987 13.2026 17.0987C13.4582 17.0987 13.7032 16.9922 13.8841 16.8026L17.7412 12.7526C17.9115 12.5607 18.0043 12.3068 17.9998 12.0445C17.9954 11.7822 17.8942 11.5319 17.7176 11.3464C17.5409 11.1609 17.3025 11.0546 17.0527 11.05C16.8029 11.0454 16.5611 11.1428 16.3783 11.3216L14.1669 13.6436L14.1669 1.91211C14.1669 1.64358 14.0653 1.38604 13.8845 1.19616C13.7036 1.00628 13.4584 0.899608 13.2026 0.899608C12.9469 0.899608 12.7016 1.00628 12.5208 1.19616C12.3399 1.38604 12.2383 1.64358 12.2383 1.91211L12.2383 13.6436L10.0269 11.3216Z" fill="#F6F7FA" />
                </svg>
            </div>
            <div className="flex flex-col md:flex-row w-full ">
                <div className="mt-3 flex flex-col w-full gap-y-4">
                    <div className="bg-[#151618] p-3 text-white rounded-[5px] w-full min-w-[80%]">
                        <h1 className="text-[13px] font-bold mb-2">CARTEIRA</h1>
                        <div className="flex justify-between">
                            <p className="font-bold">R$ 105,00</p>
                            <button className="bg-[#1B985E5D] border-[#1B985E] border-[1px] rounded-[8px] text-[11px] font-bold px-4 py-1">SACAR</button>
                        </div>
                    </div>
                    <div className="bg-[#151618] p-3 text-white rounded-[5px] w-full min-w-[80%]">
                        <h1 className="text-[13px] font-bold mb-2">ENTRADA</h1>
                        <p className="font-bold">R$ 10,00</p>
                    </div>
                </div>
                <div className="bg-[#151618] md:ml-3 mt-3 p-3 text-white rounded-[5px] w-full min-w-[55%]">
                    <h1 className="text-[13px] font-bold mb-2">LUCRO ESTIMADO</h1>
                    <p className="font-bold text-[#2FFE82]">+R$ 10,00</p>
                    <div className="bg-[#2E2F323D] mt-4 w-full py-1 px-3 h-20 rounded-[10px]">
                        <h1 className="font-bold text-[13px]">Progresso da banca</h1>
                        <div className="w-full mt-4">
                            <p className="text-[12px] font-bold">Investido: R$250,00</p>
                            <div className="w-full bg-[#2E2F32] rounded-[2px] h-[7px]">
                                <div className="w-[80%] mt-1 bg-[#1B985E] h-full rounded-[7px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col md:grid grid-cols-3 gap-2 mt-2">
                <div className=" bg-[#151618] p-3 text-white rounded-[5px] w-full">
                    <h1 className="text-[13px] font-bold mb-2">WIN</h1>
                    <p className="font-bold text-[#2FFE82]">20 WINS</p>
                </div>
                <div className="bg-[#151618] p-3 text-white rounded-[5px] w-full">
                    <h1 className="text-[13px] font-bold mb-2">LOSS</h1>
                    <p className="font-bold text-[#DB4831]">10 LOSS</p>
                </div>
                <div className="bg-[#151618] p-3 text-white rounded-[5px] w-full">
                    <h1 className="text-[13px] font-bold mb-2">RESULTADO DO DIA</h1>
                    <p className="font-bold">R$ 85,00</p>
                </div>
            </div>
        </div>
    )
}


export default WalletDetailsWitget