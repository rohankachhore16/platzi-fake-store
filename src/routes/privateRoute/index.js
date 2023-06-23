import { Navigate } from "react-router-dom";
import DashBoard from "../../components/pages/commonpages/dashboard";
import MainLayout from "../../layout/mainLayout";
import { ROUTE_DEFINATION } from "../../utils/routesConstant";
import ProductStore from "../../components/pages/admin/productStore";
import ProductList from "../../components/pages/user/productList";
import Profile from "../../components/pages/commonpages/profile";

//admin routes
 const productStore ={
  path:ROUTE_DEFINATION.PRODUCT_STORE,
  title:ROUTE_DEFINATION.PRODUCT_STORE,
children:[
  {
    path:ROUTE_DEFINATION.PRODUCT_STORE,
    title:ROUTE_DEFINATION.PRODUCT_STORE,
  
    element:<ProductStore/>
  }
]
}

//customer routes


 const productList ={
  path:ROUTE_DEFINATION.PRODUCT_LIST,
  title:ROUTE_DEFINATION.PRODUCT_LIST,
  children:[
    {
      path:ROUTE_DEFINATION.PRODUCT_LIST,
      title:ROUTE_DEFINATION.PRODUCT_LIST,
      element:<ProductList/>
    }
  ]
}
 const RoleBaseRoutes=(role)=>{
  console.log(role,"__________role")
  const PRIVATE_ROUTES={
    element:<MainLayout/>,
    children:[
      {
        path: ROUTE_DEFINATION.BASE,
        title:ROUTE_DEFINATION.BASE,
        element:<DashBoard/>
      },
      {
        path: ROUTE_DEFINATION.PROFILE,
        title:ROUTE_DEFINATION.PROFILE,
        element:<Profile/>
      },
      {
        path:"*",
        title:"*",
        element:<Navigate to={ROUTE_DEFINATION.BASE}/>
      }
    ]
  }
switch(role){
  case "customer":
    PRIVATE_ROUTES.children.push(productList)
    break;
    case "admin":
  PRIVATE_ROUTES.children.push(productStore)
  break;
}

  return PRIVATE_ROUTES
}


export default RoleBaseRoutes