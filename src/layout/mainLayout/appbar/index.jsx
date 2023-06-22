import { Button } from '@mui/material'
import React from 'react'
import { removeToken } from '../../../redux/slice/authSlice'
import { useDispatch } from 'react-redux'

const Appbar = () => {
  const dispatch = useDispatch( )
  return (
    <>
      <h1>appbar</h1>
      <Button variant='contained' onClick={() => dispatch(removeToken())}>Log out</Button>
    </>
  )
}

export default Appbar
