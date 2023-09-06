import { Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/feature/CartSlice'


const ShoppingCartItem = ({ cart }) => {
    // const cart = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    }

    return (

        <>

            {cart.map((c) => (
                <Card >
                    <CardMedia

                        image={c.image}
                        title="Live from space album cover"
                        component="img"
                        height={100}



                        alt={c.title}
                    />
                    <CardContent >
                        <CardMedia

                            image={c.image}
                            title="Live from space album cover"
                        />
                        <Typography

                            color="textSecondary"
                            align='right'
                        >
                            <Button onClick={() => handleRemove(c.id)}>X</Button>
                        </Typography>
                        <Typography variant="div" component="h2">
                            {c.title}
                        </Typography>

                        <Grid container>
                            <Grid item xs={1} sm={1} md={1} lg={1}>

                            </Grid>
                            <Grid item xs={11} sm={11} md={11} lg={11}>
                                <Typography variant="body1" component="div">

                                    <Stack direction='row' spacing={2}>
                                        <Button variant='contained' onClick={() => c.quantity > 1 ? dispatch(decreaseQuantity(c.id)) : ""}>-</Button>
                                        <Typography>
                                            {c.quantity}
                                        </Typography>
                                        <Button variant='contained' onClick={() => dispatch(increaseQuantity(c.id))}>+</Button>

                                    </Stack>
                                </Typography>
                            </Grid>


                            <Grid item xs={10} sm={9} md={10} lg={10}>
                                <Typography
                                    variant="body1"
                                    component="div"
                                    style={{ fontWeight: "bold" }}
                                >
                                    Price
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={1}>
                                <Typography variant="h6" component="div" color="secondary">
                                    ${c.price * c.quantity}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))
            }
        </>
    )

}

export default ShoppingCartItem