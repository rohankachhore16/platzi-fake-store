import React from 'react'
import Appbar from './appbar'
import Sidebar from './drawer'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const MainLayout = () => {
  return (
    <>
      <Box>
          <Appbar/>
          <Sidebar/>
          <Outlet/>
      </Box>
    </>
  )
}

export default MainLayout
