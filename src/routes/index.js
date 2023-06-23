import React, { useEffect, useState } from "react";
import RoleBaseRoutes, { PRIVATE_ROUTES } from "./privateRoute";
import { PUBLIC_ROUTES } from "./publicRoute";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
const Routes = ({ isLoggedIn }) => {
  const user= useSelector((state)=> state?.auth?.user)
  const itemrole= user?.role;
  const [currentRoute, setCurrentRoute] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      setCurrentRoute(RoleBaseRoutes(itemrole));
    } else {
      setCurrentRoute(PUBLIC_ROUTES);
    }
  }, [itemrole, isLoggedIn]);
  return useRoutes([currentRoute]);
};

export default Routes;
