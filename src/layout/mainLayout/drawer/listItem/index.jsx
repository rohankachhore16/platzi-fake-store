import { Category, Dashboard, Inbox, Mail, ProductionQuantityLimits } from '@mui/icons-material'
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const ListItemData = ({ open }) => {
  const adminList = [{
    id: "1",
    icon: <Dashboard />,
    value: "Dashboard",

  },

  {
    id: "2",
    icon: <ProductionQuantityLimits />,
    value: "Product",

  }

  ]
  const customerList = [{
    id: "1",
    icon: <Dashboard />,
    value: "Dashboard",

  },
  {
    id: "2",
    icon: <Category />,
    value: "productList",

  }

  ]
  const user = useSelector((state) => state?.auth?.user)
  const roleLogin = user?.role 
  const menuItems=  roleLogin ===  "admin" ?  adminList : customerList
  const sidebarItems = [...menuItems]
  console.log(menuItems,"---------sidebar")
  return (

    <>

      {sidebarItems?.map((item) => {
        return (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
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
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.value} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        )
      })}
      <Divider />
      {/* {men} */}
      {/* <List>
         
          
         <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
             </ListItemIcon>
             <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>
     </List> */}
    </>
  )
}

export default ListItemData
