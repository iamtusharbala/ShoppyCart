import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
    )
}

export default ProductProvider