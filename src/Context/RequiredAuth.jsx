import { Navigate } from "react-router-dom";

import React from "react";
import { useAuth } from "./AuthContext";

export const RequiredAuth = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};
