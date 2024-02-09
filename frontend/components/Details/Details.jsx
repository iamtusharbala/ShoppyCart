import React, { useContext } from 'react';
import './Details.css'
import { ProductContext } from '../../context/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const product = products.find((item => item.id === parseInt(id)));
    const { title, category, images, description, price } = product;
    const [img1, img2, img3] = images;
    return (
        product &&
        <div className='product-details' >
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-7">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {img1 && <div className="carousel-item active">
                                    <img src={img1} className="d-block w-100" alt="..." />
                                </div>}
                                {img2 && <div className="carousel-item">
                                    <img src={img2} className="d-block w-100" alt="..." />
                                </div>}
                                {img3 && <div className="carousel-item">
                                    <img src={img3} className="d-block w-100" alt="..." />
                                </div>}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5 my-5 ps-lg-5">
                        <h1>{title}</h1>
                        <h6 className='subtitle'>{category.name}</h6>
                        <p>{description}</p>
                        <h3>${price}</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetails