import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, image, price, category }) => {
    return (

        <div className="card mx-3 mb-5" >
            <img src={image} className="card-img-top product-image" alt={title} />
            <div className="card-body">
                <h6 className="card-title"><Link to={`product/${id}`}>{title}</Link></h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
                <p className="card-text">$ {price}</p>
            </div>
        </div >
    )
}

export default ProductCard