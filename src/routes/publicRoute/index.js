import { Navigate } from "react-router-dom";
import Login from "../../components/pages/auth/login";
import LoginLayout from "../../layout/loginLayout";
import { ROUTE_DEFINATION } from "../../utils/routesConstant";
import SignUp from "../../components/pages/auth/signUp";

export const PUBLIC_ROUTES={
  element:<LoginLayout/>,
  children:[
    {
      path: ROUTE_DEFINATION.BASE,
      title:ROUTE_DEFINATION.BASE,
      element:<Login/>
    },
    {
      path: ROUTE_DEFINATION.SIGNUP,
      title:ROUTE_DEFINATION.SIGNUP,
      element:<SignUp/>
    },
    {
      path:"*",
      title:"*",
      element:<Navigate to={ROUTE_DEFINATION.BASE}/>
    }
  ]
}