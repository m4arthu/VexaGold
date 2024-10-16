import { useState } from "react"
import SidebarComponent from "./SidebarComponent"

const HeaderComponent = ({ title }) => {
    const [isSidebarVisible,setSidebarVisible] = useState(false)
    return (
        <>
        <header className="w-full mb-2 flex justify-between">
            <h1 className="hidden md:block text-white font-bold">{title}</h1>
            <div className="text-white gap-2 flex md:hidden">
                <img src="./assets/images/icons/mobileSidebarIcon.svg" />
                <svg onClick={()=>{setSidebarVisible(!isSidebarVisible)}} width="14" height="41" viewBox="0 0 14 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 15.5H7H13" stroke="#F6F7FA" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M1 20.5H5H9" stroke="#F6F7FA" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M1 25.5H6H11" stroke="#F6F7FA" stroke-width="1.5" stroke-linecap="round" />
                </svg>

            </div>
            <div className="flex gap-4 items-center">
                <img className="cursor-pointer" src="./assets/images/swichdark.svg" />
                <svg className="cursor-pointer" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5.14286C20 7.34858 18.2556 9.14286 16.1111 9.14286C13.9667 9.14286 12.2222 7.34858 12.2222 5.14286C12.2222 2.93715 13.9667 1.14286 16.1111 1.14286C18.2556 1.14286 20 2.93715 20 5.14286ZM17.7778 11.1886C17.2222 11.3371 16.6667 11.4286 16.1111 11.4286C14.4912 11.4256 12.9386 10.7623 11.7931 9.5842C10.6477 8.40605 10.0029 6.80901 10 5.14286C10 3.46286 10.6444 1.94286 11.6667 0.811434C11.465 0.557195 11.2108 0.352429 10.9225 0.212056C10.6341 0.0716836 10.319 -0.000759433 10 6.00307e-06C8.77778 6.00307e-06 7.77778 1.02858 7.77778 2.28572V2.61715C4.47778 3.62286 2.22222 6.74286 2.22222 10.2857V17.1429L0 19.4286V20.5714H20V19.4286L17.7778 17.1429V11.1886ZM10 24C11.2333 24 12.2222 22.9829 12.2222 21.7143H7.77778C7.77778 22.3205 8.01191 22.9019 8.42865 23.3305C8.8454 23.7592 9.41063 24 10 24Z" fill="#2FFE82" />
                </svg>
                <svg className="cursor-pointer" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15061 10.2382C8.2203 11.3741 9.58697 12 11.0004 12C12.4145 12 13.7805 11.3741 14.8474 10.2375C15.8855 9.1309 16.52 7.65408 16.6348 6.0784C16.7544 4.41409 16.2368 2.87318 15.1733 1.74C14.1201 0.617726 12.6386 0 11.0004 0C9.35048 0 7.87313 0.606818 6.8165 1.73182C5.75988 2.85681 5.24359 4.40045 5.36321 6.07908C5.47527 7.65272 6.11048 9.13022 7.15061 10.2382ZM1.93828 24H20.0632C20.3536 24.0014 20.6406 23.937 20.902 23.8115C21.1634 23.6859 21.3924 23.5027 21.5715 23.2759C21.7619 23.0291 21.8937 22.7429 21.9571 22.4385C22.0204 22.1342 22.0136 21.8195 21.9372 21.5182C21.3611 19.185 19.925 17.2623 17.7863 15.9579C15.8813 14.7954 13.5337 14.1818 11.0004 14.1818C8.5159 14.1818 6.10498 14.8227 4.21103 15.9859C2.07715 17.297 0.64311 19.2088 0.064269 21.5141C-0.0130696 21.8152 -0.0207142 22.1299 0.0419068 22.4344C0.104528 22.7389 0.235792 23.0254 0.425873 23.2725C0.605069 23.5004 0.834599 23.6845 1.0968 23.8106C1.359 23.9367 1.64688 24.0015 1.93828 24Z" fill="#2FFE82" />
                </svg>
            </div>
        </header>
        <h1 className="block md:hidden text-white font-bold">{title}</h1>

        {isSidebarVisible && <SidebarComponent setSidebarVisible={setSidebarVisible} isSidebarVisible={isSidebarVisible} />}
        </>
    )
}

export default HeaderComponent