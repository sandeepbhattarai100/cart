import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cart)
    return (
        <>
            <AppBar position='static' style={{ marginBottom: '10px' }}>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} >product-cart</Typography>


                    <Stack direction='row' spacing={2}>
                        <Button color='inherit' onClick={() => navigate('/')}>Home</Button>
                        <Button color='inherit' onClick={() => navigate('/cart')}>cart({cart.length})</Button>

                    </Stack>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default NavBar