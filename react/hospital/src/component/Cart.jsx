import { Container, Typography } from '@mui/material'
import React from 'react'
import { cart } from '../data'

const Cart = () => {
  return (
    <>
    <Container>
        {cart.map((carts)=>{
            return (
                <>
                <Typography variant='circle'>{carts.icon}</Typography>
                <Typography variant='h6'>{carts.heading}</Typography>
                <Typography variant='p'>{carts.des}</Typography>
                </>
            )
        })}
    </Container>
    
    </>
  )
}

export default Cart