import React, {Navigate} from 'react-router-dom';

import { useAuth } from "../contexts/AuthContext";

export const AccessRoute = (props: { children:any }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to={"/dashboard"} /> ;
  }
  return props.children;
};