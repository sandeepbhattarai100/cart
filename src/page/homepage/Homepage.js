import React, { useEffect, useState } from 'react'
import Product from '../../component/product/Product'
import axios from 'axios';
import { Stack, Toolbar } from '@mui/material';
import './homepage.css';

const Homepage = () => {
    const [products, setProducts] = useState();

    const fetchProducts = async () => {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        console.log(data);
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <Toolbar>
            <div className='bodyItems'>
                <Product products={products} />

            </div>
        </Toolbar>

    )
}

export default Homepage