import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ProductCard = ({category,title,description,price}) => {
  return (
    <>
   <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 140 }}
        image={category.image}
   
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
  {description}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography variant='body2'>Price :-  {price}</Typography>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default ProductCard
