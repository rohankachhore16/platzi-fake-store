import React, { useEffect, useState } from 'react'
import { PRIVATE_ROUTES } from './privateRoute'
import { PUBLIC_ROUTES } from './publicRoute'
import { useRoutes } from 'react-router-dom'

const Routes = ({isLoggedIn}) => {
  const [currentRoute, setCurrentRoute]= useState([])
  useEffect(()=>{
    if(isLoggedIn){
      setCurrentRoute([PRIVATE_ROUTES])
    }
    else{
      setCurrentRoute([PUBLIC_ROUTES])
    }
  },[isLoggedIn])
  return useRoutes(currentRoute)
}

export default Routes
