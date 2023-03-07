import React, {Navigate} from 'react-router-dom';

import { useAuth } from "../contexts/AuthContext";

export const ProtectedRoute = (props: { children:any }) => {
  const { user } = useAuth();
  if (!user) {
    console.log("redirected!")
    // user is not authenticated
    return <Navigate to={"/"} /> ;
  }
  return props.children;
};