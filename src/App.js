import { useContext } from "react";
import { AuthContext } from "./Contexts/authContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import Dashboard from "./Pages/Dashboard/DashboardPage";
import "./reset.css"
import ConfigPage from "./Pages/Configuracao/ConfiguracaoPage";
import PlanoPage from "./Pages/Planos/PlanoPage";
import SinaisPage from "./Pages/SinaisAoVivo/SinaisPage";
import HistoricoPage from "./Pages/Historico/HistoricoPage";
import CalendarioPage from "./Pages/Calendario/CalendarioPage";


const App = () => {
  const { signed } = useContext(AuthContext)
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/register" Component={LoginPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/" Component={Dashboard} />
        <Route path="/configurar" Component={ConfigPage} />
        <Route path="/planos" Component={PlanoPage} />
        <Route path="/sinaisaovivo" Component={SinaisPage} />
        <Route path="/historico" Component={HistoricoPage} />
        <Route path="/calendario" Component={CalendarioPage} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
