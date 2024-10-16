import { useLocation, useNavigate } from "react-router-dom";

const SidebarComponent = ({ isSidebarVisible, setSidebarVisible }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const routes = [
    { path: '/', icon: 'dashboard.svg', label: 'Dashboard' },
    { path: '/configurar', icon: 'config.svg', label: 'Configurar' },
    { path: '/planos', icon: 'planos.svg', label: 'Planos' },
    { path: '/sinaisaovivo', icon: 'sinaisaovivo.svg', label: 'Sinais Ao Vivo' },
    { path: '/historico', icon: 'historic.svg', label: 'Histórico' },
    { path: '/calendario', icon: 'calendario.svg', label: 'Calendário' },
  ];

  return (
    <>
      <aside className="relative bg-[#151618] hidden md:flex w-[227px] h-[95vh] mt-2 rounded-[12px] py-4 pl-4 ml-4 flex flex-col gap-3 text-white">
        <div className="flex w-full">
          <img className="w-[80%] cursor-pointer mb-3" src="./assets/images/logo.svg" />
          <img className="cursor-pointer ml-2" src="./assets/images/icons/sideBarBars.svg" />
        </div>
        {routes.map((route, index) => (
          <div onClick={() => navigate(route.path)} key={index} className="flex h-ful  cursor-pointer">
            <img
              className={`mr-1 ${location.pathname === route.path ? 'active-icon' : ''}`}
              src={`/assets/images/icons/${route.icon}`}
            />
            <p
              className={`ml-2 text-[13px] font-bold ${location.pathname === route.path ? 'text-[#2FFE82]' : ''}`}
            >
              {route.label}
            </p>
          </div>
        ))}
        <button className="absolute bottom-[10px] flex py-1 flex px-2 justify-start w-[80%] items-center rounded-[10px] border-[#DB4831] bg-[#DB48313D] border-[1px]">
          <img className="mr-2" src={`/assets/images/icons/logoutIcon.svg`} />
          <p className=" ml-2 font-bold text-[#DB4831]">Sair</p>
        </button>
      </aside>
      {isSidebarVisible &&
        <aside className="fixed z-50 bg-[#151618] top-0 left-0  w-[100vw] h-[100vh]  rounded-[12px] py-4  flex flex-col gap-3 text-white">
          <div className="flex justify-center mt-2 w-full">
            <div style={{border:'1px solid #2FFE82'}} className=" p-3 bg-[#2FFE823D] rounded-[18px] ">
              <svg onClick={() => setSidebarVisible(!isSidebarVisible)} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.78931 8.77904C9.92345 8.91317 9.99881 9.09509 9.99881 9.28478C9.99881 9.47447 9.92345 9.65639 9.78931 9.79052C9.65518 9.92465 9.47325 10 9.28355 10C9.09385 10 8.91192 9.92465 8.77778 9.79052L5 6.01177L1.22103 9.78933C1.08689 9.92346 0.904962 9.99881 0.715262 9.99881C0.525563 9.99881 0.343633 9.92346 0.209496 9.78933C0.0753579 9.6552 1.99881e-09 9.47328 0 9.28359C-1.99881e-09 9.0939 0.0753579 8.91198 0.209496 8.77785L3.98847 5.0003L0.210685 1.22155C0.0765477 1.08742 0.00119006 0.905503 0.00119007 0.715815C0.00119007 0.526127 0.0765477 0.344208 0.210685 0.210078C0.344823 0.0759483 0.526753 0.000594886 0.716452 0.000594885C0.906152 0.000594883 1.08808 0.0759483 1.22222 0.210078L5 3.98882L8.77897 0.209483C8.91311 0.0753532 9.09504 -3.1602e-09 9.28474 0C9.47444 3.1602e-09 9.65637 0.0753532 9.7905 0.209483C9.92464 0.343613 10 0.525532 10 0.71522C10 0.904908 9.92464 1.08683 9.7905 1.22096L6.01153 5.0003L9.78931 8.77904Z" fill="#F6F7FA" />
              </svg>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <img className="w-[80%] cursor-pointer mb-4" src="./assets/images/logo.svg" />
          </div>
         <div className="px-10 flex flex-col gap-5">
         {routes.map((route, index) => (
            <div onClick={() => navigate(route.path)} key={index} className="flex h-ful  cursor-pointer">
              <img
                width={25}
                className={`mr-1 ${location.pathname === route.path ? 'active-icon' : ''}`}
                src={`/assets/images/icons/${route.icon}`}
              />
              <p
                className={`ml-2 text-[16px] font-bold ${location.pathname === route.path ? 'text-[#2FFE82]' : ''}`}
              >
                {route.label}
              </p>
            </div>
          ))}
         </div>
         <div className="w-full justify-center flex">
         <button className="absolute bottom-[10px] mb-3 flex py-1 flex px-2 justify-start w-[90%] items-center rounded-[10px] border-[#DB4831] bg-[#DB48313D] border-[1px]">
            <img className="mr-2" src={`/assets/images/icons/logoutIcon.svg`} />
            <p className=" ml-2 font-bold text-[#DB4831]">Sair</p>
          </button>
         </div>
        </aside>}
    </>
  );
};

export default SidebarComponent;