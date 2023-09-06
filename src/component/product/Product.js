import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Snackbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/feature/CartSlice'

const Product = ({ products }) => {
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
    const dispatch = useDispatch();
    return (
        < >
            {
                products?.map((p) => (
                    <Box width='330px' key={p.id}>
                        <Card sx={{ maxWidth: 350 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="380"
                                    image={p.image}
                                    alt={p.title}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">

                                        {p.title.length > 30 ? p.title.substr(0, 20) : p.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        $
                                        {p.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {p.description.length > 80 ? p.description.substr(0, 60) : p.description}
                                    </Typography>
                                </CardContent>

                                <Button variant='contained' fullWidth onClick={() => dispatch(addToCart(p))}>Add To Cart</Button>
                            </CardActionArea>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default Product