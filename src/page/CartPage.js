import React from 'react'
import ShoppingCartItem from '../component/ShoppingCartItem'
import { Box, Container, Grid } from '@mui/material'
import OrderSummary from '../component/OrderSummary'
import { useSelector } from 'react-redux'

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <>
      {
        cart.length > 0 ? (
          <Container fixed>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Grid container>
                  <Grid item xs>
                    <ShoppingCartItem cart={cart} />

                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={5}>
                <OrderSummary />

              </Grid>
            </Grid>
          </Container>
        ) : (
          <p style={{ textAlign: "center" }}>cart is empty</p>
        )
      }

    </>
  )
}

export default CartPage