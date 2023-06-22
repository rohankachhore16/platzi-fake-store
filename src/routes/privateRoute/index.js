import { Navigate } from "react-router-dom";
import DashBoard from "../../components/pages/commonpages/dashboard";
import MainLayout from "../../layout/mainLayout";
import { ROUTE_DEFINATION } from "../../utils/routesConstant";

export const PRIVATE_ROUTES={
element:<MainLayout/>,
  children:[
    {
      path: ROUTE_DEFINATION.BASE,
      title:ROUTE_DEFINATION.BASE,
      element:<DashBoard/>
    },
    {
      path:"*",
      title:"*",
      element:<Navigate to={ROUTE_DEFINATION.BASE}/>
    }
  ]
}