import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [registering, setRegistering] = useState(false);
    const [registered, setRegistered] = useState(false);
  
    const signed = () => {
      const token = localStorage.getItem('token');
      return token !== null;
    };
  
    const login = (user) => {
      localStorage.setItem('token', user.token);
      setUser(user);
    };
  
    const logout = () => {
      localStorage.removeItem('token');
      setUser(null);
    };

    const register = (user) => {
        setRegistering(true);
        setRegistered(true);
      };

      
  
    return (
      <AuthContext.Provider value={{  registering, registered,register, signed, user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

export { AuthProvider, AuthContext };