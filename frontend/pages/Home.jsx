import React, { useContext } from 'react';
import Hero from '../components/Hero/Hero';
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductContext } from '../context/ProductContext';


const Home = () => {
    const { products } = useContext(ProductContext);
    return (
        <div><Hero /><div className="container my-5 d-flex justify-content-center align-items-around flex-wrap">
            {products.map((item) => <ProductCard key={item.id} id={item.id} title={item.title} image={item.images[0]} price={item.price} category={item.category.name} />)}
        </div></div>

    )
}

export default Home