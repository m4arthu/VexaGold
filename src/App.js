import { useContext } from "react";
import { AuthContext } from "./Contexts/authContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import Dashboard from "./Pages/Dashboard/DashboardPage";
import "./reset.css"


const App = () => {
  const { signed } = useContext(AuthContext)
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/" Component={Dashboard} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
