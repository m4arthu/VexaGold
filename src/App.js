import { useContext } from "react";
import { AuthContext } from "./Contexts/authContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";


const App = () => {
  const { signed } = useContext(AuthContext)
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
