import { Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'

const Orders = () => {
    const order = useSelector((state) => state.cart.cart)
    console.log(order);
    return (
        <>
  <Container fixed>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Grid container>
                  <Grid item xs>
                  {order.map((c) => (
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

                                        <Typography>
                                            quantity
                                        </Typography>
                                        <Typography>
                                            {c.quantity}
                                        </Typography>

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

                  </Grid>
                </Grid>
              </Grid>

            </Grid>
          </Container>

        </>
    )
}

export default Orders