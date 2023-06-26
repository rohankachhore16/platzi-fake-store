import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ProductAsyncThunk } from '../../../../redux/asyncThunk/productAsyncThunk'
import { Box, Grid, Pagination } from '@mui/material'
import ProductCard from './productCard'

const ProductList = () => {
  const [pagination, setPagination] = useState(1)
  const [product, setProduct] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProductAsyncThunk({ pagination })).unwrap().then((res) => {
      return (
        setProduct(res.data)
      )
    })
  }, [pagination])
  return (
    <>
      <Grid container spacing={5}  >



        {
          product?.map((item) => {
            const { category, id, images, price, description,title } = item
            return (
              <Grid item gap={10}  xs={6} sm={4} lg={4} key={id}>
                <ProductCard {...{ category, id, images, price, description,title }} />
              </Grid>

            )
          })
        }
      </Grid>
{ product.length >=5 ?  <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination count={10} onChange={(e, value) => setPagination(value)} />
      </Box> : null}
     

    </>
  )
}

export default ProductList
