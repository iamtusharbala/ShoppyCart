import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, id, title, image, price, category }) => {
    const addToCart = (product, id) => {
        console.log(product);
        console.log(`Item ${id} Added to cart`);
    }
    return (

        <div className="card mx-3 mb-5" >
            <img src={image} className="card-img-top product-image" alt={title} />
            <div className="card-body">
                <h6 className="card-title"><Link to={`product/${id}`}>{title}</Link></h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
                <p className="card-text">$ {price}</p>
                <button type="button" className="btn btn-danger" onClick={() => addToCart(product, id)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard