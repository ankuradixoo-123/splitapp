// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };
  console.log(localStorage.getItem('token'))

  const Register = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };
  console.log(localStorage.getItem('token'))

  
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login,logout,Register}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
