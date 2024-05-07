/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../Components/Loading";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (!isLoading && !user?.email) {
    return (
      <Navigate state={location.pathname} to={`/login`} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
