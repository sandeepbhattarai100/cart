import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const OrderSummary = () => {
    const cart = useSelector((state) => state.cart.cart)
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
        );
    }, []);
    return (
        <>
            <Card elevation={15}>
                <CardContent>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                    >
                        Shopping Cart
                    </Typography>
                    <Typography variant="div" component="h1">
                        {" "}
                        Order Summary
                    </Typography>
                    <Typography variant="subtitle2">
                        <hr />
                    </Typography>
                    <Grid container>
                        <Grid item xs={11} sm={11} md={11} lg={11}>
                            <Typography variant="body1" component="div">
                                Total
                            </Typography>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1}>
                            <Typography variant="h6" component="div">
                                ${total}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions>
                    <Button size="large" color="secondary">
                        BUY NOW ({cart.length})
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default OrderSummary