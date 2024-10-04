import { useLocation,useNavigate} from "react-router-dom";


const SidebarComponent = () => {
    const location = useLocation(); // assuming you're using React Router
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
      <aside className="relative bg-[#151618] w-[227px] h-[90vh] mt-2 rounded-[12px] py-4 pl-4 ml-4 flex flex-col gap-y-5 text-white">
        {routes.map((route, index) => (
          <div onClick={() => navigate(route.path)} key={index} className="flex items-center cursor-pointer">
            <img className="mr-2" src={`/assets/images/icons/${route.icon}`} />
            <p
              className={`ml-2 text-[12px] font-bold ${
                location.pathname === route.path ? 'text-[#2FFE82]' : ''
              }`}
            >
              {route.label}
            </p>
          </div>
        ))}
        {/* ... */}
      </aside>
    );
  };

export default SidebarComponent