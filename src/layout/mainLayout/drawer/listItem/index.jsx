import {
  AccountCircleOutlined,
  ArrowForwardOutlined,
  Category,
  Dashboard,

  ProductionQuantityLimits,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../../../redux/slice/authSlice";
import { ROUTE_DEFINATION } from "../../../../utils/routesConstant"
import { useNavigate } from "react-router-dom";
const ListItemData = ({ open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const adminList = [
    {
      id: "1",
      icon: <Dashboard />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.DASHBOARD

    },

    {
      id: "2",
      icon: <ProductionQuantityLimits />,
      value: "Product",
      path: ROUTE_DEFINATION.PRODUCT_STORE
    },
  ];
  const customerList = [
    {
      id: "1",
      icon: <Dashboard />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.DASHBOARD

    },
    {
      id: "2",
      icon: <Category />,
      value: "productList",
      path: ROUTE_DEFINATION.PRODUCT_LIST

    },
  ];
  const user = useSelector((state) => state?.auth?.user);
  const roleLogin = user?.role;
  const menuItems = roleLogin === "admin" ? adminList : customerList;
  const sidebarItems = [...menuItems];
  console.log(menuItems, "---------sidebar");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%"

        }}
      >
        <Box>
          {sidebarItems?.map((item) => {
            return (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={()=>navigate(item.path) }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.value}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>
        <Box>
          <Divider />

          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AccountCircleOutlined />
                </ListItemIcon>
                <ListItemText
                  primary="Profile"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => dispatch(removeToken())}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ArrowForwardOutlined />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default ListItemData;
