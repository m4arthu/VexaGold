import { useLocation, useNavigate } from "react-router-dom";

const SidebarComponent = () => {
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
    <aside className="relative bg-[#151618] w-[227px] h-[95vh] mt-2 rounded-[12px] py-4 pl-4 ml-4 flex flex-col gap-y-5 text-white">
      {routes.map((route, index) => (
        <div onClick={() => navigate(route.path)} key={index} className="flex h-ful items-center cursor-pointer">
          <img className={`mr-2 ${location.pathname === route.path ? 'fill-[#2FFE82]' : ''}`} src={`/assets/images/icons/${route.icon}`} />
          <p
            className={`ml-2 text-[12px] font-bold ${location.pathname === route.path ? 'text-[#2FFE82]' : ''}`}
          >
            {route.label}
          </p>
        </div>
      ))}
      <button className="absolute bottom-[10px] flex py-1 flex px-2 justify-start w-[160px] items-center rounded-[10px] border-[#DB4831] bg-[#DB48313D] border-[1px]">
        <img className="mr-2" src={`/assets/images/icons/logoutIcon.svg`} />
        <p className=" ml-2 font-bold text-[#DB4831]">Sair</p>
      </button>
    </aside>
  );
};

export default SidebarComponent;