import React, { useState } from "react";
import Appbar from "./appbar";
import Sidebar from "./drawer";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, styled } from "@mui/material";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Appbar {...{ open, setOpen }} />
        <Sidebar {...{ open, setOpen }} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>

   
      </Box>
    </>
  );
};

export default MainLayout;
