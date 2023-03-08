import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const defaultState = {
    user : null,
    login: (data: any) => {},
    logout: () => {},
}

const AuthContext = createContext(defaultState);

export const AuthProvider = (props: { children:any }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);

  const navigate = useNavigate();
    // call this function when you want to authenticate the user
    const login = async (data:any) => {
        setUser(data.userInfo);
        setToken(data.tokenInfo);
        navigate("/dashboard");
      };
    
    // call this function to sign out logged in user
    const logout = async () => {
        setUser(null);
        setToken(null);
        navigate("/", { replace: true });
    };
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};