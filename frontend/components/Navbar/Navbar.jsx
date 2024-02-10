import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">ShoppyCart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"><MdOutlineShoppingCart />&nbsp;Cart
                                {cartCount > 0 && <span class="position-absolute top-1  translate-middle badge rounded-pill bg-dark">
                                    {cartCount}
                                    <span class="visually-hidden">unread messages</span>
                                </span>}</Link>
                        </li>
                        <li className="nav-item">
                            <Link type="button" className="btn btn-dark" to="login">
                                Log In
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar