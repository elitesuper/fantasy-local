import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const data:any = null;

const defaultState = {
    user : data,
    login: (data: any) => {},
    logout: () => {},
    update: (data: any) => {},

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

    const update= async (data:any) =>{
      setUser(data);
    }
    
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
      update,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};